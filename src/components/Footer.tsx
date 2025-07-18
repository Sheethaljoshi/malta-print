import Link from "next/link";
import { Package, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Package className="h-6 w-6 text-primary" />
              <span className="font-headline font-bold text-lg">PrintPerfect</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              High-quality printing services for all your needs.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/design" className="text-muted-foreground hover:text-primary">Business Cards</Link></li>
              <li><Link href="/design" className="text-muted-foreground hover:text-primary">Flyers & Leaflets</Link></li>
              <li><Link href="/design" className="text-muted-foreground hover:text-primary">Posters</Link></li>
              <li><Link href="/design" className="text-muted-foreground hover:text-primary">Stickers & Labels</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Shipping</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PrintPerfect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
