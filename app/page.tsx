import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "@/components/navigation-menu";
import Link from "next/link";
import { Heart, Building2, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">NonProfit Connect</span>
          </div>
          <NavigationMenuDemo />
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Connecting Nonprofits with
              <span className="text-primary"> Supporters & Sponsors</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our platform to make a real difference. Whether you're a nonprofit, supporter,
              or business sponsor, we help you create meaningful partnerships.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-lg">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nonprofits</h3>
                <p className="text-muted-foreground">
                  Connect with supporters and sponsors, manage campaigns, and track your impact.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-lg">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Supporters</h3>
                <p className="text-muted-foreground">
                  Discover and support causes you care about while enjoying exclusive offers.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-lg">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Sponsors</h3>
                <p className="text-muted-foreground">
                  Partner with nonprofits, increase your social impact, and grow your business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/help" className="text-muted-foreground hover:text-primary">Help Center</Link></li>
                <li><Link href="/guides" className="text-muted-foreground hover:text-primary">Guides</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="/twitter" className="text-muted-foreground hover:text-primary">Twitter</Link></li>
                <li><Link href="/linkedin" className="text-muted-foreground hover:text-primary">LinkedIn</Link></li>
                <li><Link href="/facebook" className="text-muted-foreground hover:text-primary">Facebook</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 NonProfit Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}