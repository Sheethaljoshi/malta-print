import Link from 'next/link';
import { Package, Search, Phone, Menu, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Input } from './ui/input';

export default function Header() {
  const primaryNavItems = [
    { href: '/', label: 'Products', icon: Package },
    { href: '/design', label: 'Design Online', icon: HelpCircle },
  ];

  const secondaryNavItems = [
    { href: '#', label: 'All Products' },
    { href: '#', label: 'Magazines, Books & Catalogs' },
    { href: '#', label: 'Marketing Materials' },
    { href: '#', label: 'Business Cards' },
    { href: '#', label: 'Invitations & Stationery' },
    { href: '#', label: 'Stickers & Labels' },
    { href: '#', label: 'Signs & Banners' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex w-full items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg whitespace-nowrap">PrintPerfect</span>
          </Link>
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products, services, and more..." className="pl-9" />
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Need Help?
            </Link>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary"/>
              <span className="text-sm font-semibold">(123) 456-7890</span>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex w-full items-center">
           <Link href="/" className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg">PrintPerfect</span>
          </Link>
          <div className="ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Package className="h-6 w-6 text-primary" />
                  <span className="font-headline font-bold text-lg">PrintPerfect</span>
                </Link>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
                <nav className="flex flex-col gap-4 mb-6">
                   <Link
                      href="#"
                      className="flex items-center gap-2 transition-colors hover:text-foreground/80 text-foreground"
                    >
                      <HelpCircle className="w-4 h-4" />
                      Need Help?
                    </Link>
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="transition-colors hover:text-foreground/80 text-muted-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary"/>
                  <span className="text-sm font-semibold">(123) 456-7890</span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <nav className="hidden md:block border-t border-border/40">
        <div className="container max-w-screen-2xl">
            <div className="flex justify-between items-center h-12">
                {secondaryNavItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
      </nav>
    </header>
  );
}
