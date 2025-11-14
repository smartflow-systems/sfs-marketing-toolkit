import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Star, QrCode, Users, Calculator as CalcIcon } from "lucide-react";
import FormBuilder from "@/components/FormBuilder";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import WaitlistManager from "@/components/WaitlistManager";
import Calculator from "@/components/Calculator";
import ReviewCard from "@/components/ReviewCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import avatar1 from "@assets/generated_images/Professional_avatar_1_524ba830.png";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("forms");

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="link-home">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
                T
              </div>
              <span className="text-xl font-bold">ToolKit</span>
            </a>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" data-testid="button-account">Account</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage all your tools in one place</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="forms" className="gap-2" data-testid="tab-forms">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Forms</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="gap-2" data-testid="tab-reviews">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Reviews</span>
            </TabsTrigger>
            <TabsTrigger value="qr" className="gap-2" data-testid="tab-qr">
              <QrCode className="h-4 w-4" />
              <span className="hidden sm:inline">QR Codes</span>
            </TabsTrigger>
            <TabsTrigger value="waitlist" className="gap-2" data-testid="tab-waitlist">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Waitlist</span>
            </TabsTrigger>
            <TabsTrigger value="calculator" className="gap-2" data-testid="tab-calculator">
              <CalcIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Calculator</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forms" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Form Builder</h2>
                <p className="text-muted-foreground">Create and customize forms for your website</p>
              </div>
              <Button data-testid="button-new-form">Create New Form</Button>
            </div>
            <FormBuilder />
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Review Management</h2>
                <p className="text-muted-foreground">Collect and display customer reviews</p>
              </div>
              <Button data-testid="button-new-review">Add Review</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ReviewCard
                name="Sarah Johnson"
                role="Marketing Director"
                rating={5}
                comment="ToolKit has transformed how we collect customer feedback. The embed feature is seamless!"
                avatar={avatar1}
              />
              <Card className="p-6 flex items-center justify-center border-dashed">
                <div className="text-center space-y-2">
                  <Star className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Add your first review</p>
                  <Button variant="outline" size="sm">Add Review</Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="qr" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">QR Code Generator</h2>
                <p className="text-muted-foreground">Create custom QR codes for any content</p>
              </div>
            </div>
            <QRCodeGenerator />
          </TabsContent>

          <TabsContent value="waitlist" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Waitlist Manager</h2>
                <p className="text-muted-foreground">Build and manage your product waitlist</p>
              </div>
              <Button data-testid="button-export-waitlist">Export List</Button>
            </div>
            <WaitlistManager />
          </TabsContent>

          <TabsContent value="calculator" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Calculator Suite</h2>
                <p className="text-muted-foreground">Multiple calculators for different use cases</p>
              </div>
            </div>
            <Calculator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
