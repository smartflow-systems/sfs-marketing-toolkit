import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
                T
              </div>
              <span className="text-xl font-bold">ToolKit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              All-in-one platform for forms, reviews, QR codes, waitlists, and calculators.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features"><a className="text-muted-foreground hover:text-foreground">Features</a></Link></li>
              <li><Link href="#pricing"><a className="text-muted-foreground hover:text-foreground">Pricing</a></Link></li>
              <li><Link href="#embed"><a className="text-muted-foreground hover:text-foreground">Embed</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ToolKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
