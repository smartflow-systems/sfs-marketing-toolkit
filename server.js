import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",").map(o => o.trim())
    : ["http://localhost:5000"],
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
const leadsLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests, please try again later." },
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Load config once at startup
const config = JSON.parse(readFileSync("./public/site.config.json", "utf-8"));

// Ensure data directory exists
const dataDir = "./data";
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

// Leads database file path
const leadsFile = join(dataDir, "leads.json");

// Initialize leads file if it doesn't exist
if (!existsSync(leadsFile)) {
  writeFileSync(leadsFile, JSON.stringify({ leads: [] }, null, 2));
}

// Admin API key middleware
function requireAdminKey(req, res, next) {
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey) {
    return res.status(503).json({ success: false, message: "Admin access not configured" });
  }
  const provided = req.headers["x-admin-key"] || req.headers.authorization?.replace("Bearer ", "");
  if (!provided || provided !== adminKey) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  next();
}

// Helper: Read leads
function readLeads() {
  try {
    const data = readFileSync(leadsFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading leads file");
    return { leads: [] };
  }
}

// Helper: Write leads
function writeLeads(data) {
  try {
    writeFileSync(leadsFile, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing leads file");
    return false;
  }
}

// serve everything from /public
app.use(express.static("public"));

// health check with site info
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/api/health", (_req, res) => res.json({
  ok: true,
  siteName: config.siteName,
  version: config.version,
}));

// API: Submit Lead
app.post("/api/leads", leadsLimiter, (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, source } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        success: false,
        message: "First name, last name, and email are required",
      });
    }

    // Enforce reasonable field lengths
    if (
      typeof firstName !== "string" || firstName.length > 100 ||
      typeof lastName !== "string" || lastName.length > 100 ||
      typeof email !== "string" || email.length > 254
    ) {
      return res.status(400).json({ success: false, message: "Invalid field length" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Read existing leads
    const data = readLeads();

    // Check for duplicate email
    const existingLead = data.leads.find(lead => lead.email === email);
    if (existingLead) {
      return res.status(200).json({
        success: true,
        message: "Lead already exists",
        leadId: existingLead.id,
      });
    }

    // Create new lead
    const newLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      firstName,
      lastName,
      email,
      company: company ? String(company).slice(0, 200) : "",
      phone: phone ? String(phone).slice(0, 30) : "",
      source: source ? String(source).slice(0, 50) : "direct",
      status: "new",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.leads.push(newLead);

    if (!writeLeads(data)) {
      throw new Error("Failed to save lead");
    }

    res.status(201).json({
      success: true,
      message: "Lead captured successfully",
      leadId: newLead.id,
    });

  } catch (error) {
    console.error("Lead submission error");
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// API: Get All Leads (admin only)
app.get("/api/leads", requireAdminKey, (_req, res) => {
  try {
    const data = readLeads();
    res.json({
      success: true,
      count: data.leads.length,
      leads: data.leads,
    });
  } catch (error) {
    console.error("Error fetching leads");
    res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
    });
  }
});

// API: Stripe Checkout (placeholder)
app.post("/api/stripe/checkout", leadsLimiter, async (req, res) => {
  try {
    const { planId } = req.body;

    if (!planId || typeof planId !== "string" || planId.length > 50) {
      return res.status(400).json({ success: false, message: "Invalid planId" });
    }

    const pricingData = JSON.parse(readFileSync("./public/pricing.json", "utf-8"));
    const plan = pricingData.plans.find(p => p.id === planId);

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    res.json({
      success: true,
      message: "Stripe integration pending",
      planId,
      plan: plan.name,
      price: plan.price,
      url: `/contact.html?plan=${encodeURIComponent(planId)}`,
    });

  } catch (error) {
    console.error("Checkout error");
    res.status(500).json({
      success: false,
      message: "Failed to create checkout session",
    });
  }
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err.message || "Unknown error");
  res.status(err.status || 500).json({
    success: false,
    message: "Internal server error",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => console.log(`serving on ${port}`));
export default app;
