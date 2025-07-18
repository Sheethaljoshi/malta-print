'use client';

import Link from 'next/link';
import { Package, Search, Phone, Menu, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Input } from './ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';

const megaMenuData = {
  'All Products': [
    {
      title: 'Magazines, Books & Catalogues',
      links: [
        { title: 'Saddle Stitched', href: '#' },
        { title: 'Perfect Binding', href: '#' },
        { title: 'Paperback Books', href: '#' },
        { title: 'Books', href: '#' },
        { title: 'Booklets', href: '#' },
        { title: 'Catalogs', href: '#' },
        { title: 'Magazines', href: '#' },
        { title: 'Zines', href: '#' },
        { title: 'Journals', href: '#' },
        { title: 'Manuals', href: '#' },
      ],
    },
    {
      title: 'Marketing Materials',
      links: [
        { title: 'Flyers', href: '#' },
        { title: 'Club Flyers', href: '#' },
        { title: 'Brochures', href: '#' },
        { title: 'Take-out Menus', href: '#' },
        { title: 'Postcards and Invitations', href: '#' },
      ],
    },
    {
      title: 'Stationery',
      links: [
        { title: 'Envelopes', href: '#' },
        { title: 'Bookmarks', href: '#' },
        { title: 'Hang Tags', href: '#' },
        { title: 'Door hangers', href: '#' },
      ],
    },
     {
      title: 'Business Cards',
      links: [
        { title: 'Standard business cards', href: '#' },
        { title: 'Square Business Cards', href: '#' },
        { title: 'Glossy Business Cards', href: '#' },
        { title: 'Matte Business Cards', href: '#' },
        { title: 'Rounded Corner Business Cards', href: '#' },
        { title: 'Loyalty Cards', href: '#' },
        { title: 'Appointment Cards', href: '#' },
      ],
    },
    {
      title: 'Signs & Banners',
      links: [
        { title: 'Banners', href: '#' },
        { title: 'Rigid Signs', href: '#' },
        { title: 'Corrugated A-Frame Signs', href: '#' },
        { title: 'Retractable Banners', href: '#' },
      ],
    },
    {
      title: 'Stickers and Labels',
      links: [
        { title: 'Die-Cut Stickers', href: '#' },
        { title: 'Round Stickers', href: '#' },
        { title: 'Rectangular Stickers', href: '#' },
        { title: 'Custom Shape Stickers', href: '#' },
        { title: 'Oval Stickers', href: '#' },
        { title: 'Square Stickers', href: '#' },
        { title: 'Custom Roll labels', href: '#' },
      ],
    },
  ],
  'Magazines, Books & Catalogs': [
    {
      title: 'Binding Options',
      links: [
        { title: 'Saddle Stitched', href: '#' },
        { title: 'Perfect Binding', href: '#' },
        { title: 'Spiral Bound', href: '#' },
        { title: 'Wire-O Binding', href: '#' },
      ],
    },
    {
      title: 'Publication Types',
      links: [
        { title: 'Magazines', href: '#' },
        { title: 'Catalogs', href: '#' },
        { title: 'Lookbooks', href: '#' },
        { title: 'Manuals & Reports', href: '#' },
      ],
    },
  ],
  // Add other main categories here if they need mega menus
};

export default function Header() {
  const secondaryNavItems = [
    { title: 'All Products', href: '#'},
    { title: 'Magazines, Books & Catalogs', href: '#'},
    { title: 'Marketing Materials', href: '#'},
    { title: 'Business Cards', href: '#'},
    { title: 'Invitations & Stationery', href: '#'},
    { title: 'Stickers & Labels', href: '#'},
    { title: 'Signs & Banners', href: '#'},
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
              <Phone className="w-4 h-4 text-primary" />
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
                  <Link href="#" className="flex items-center gap-2 transition-colors hover:text-foreground/80 text-foreground">
                    <HelpCircle className="w-4 h-4" />
                    Need Help?
                  </Link>
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="transition-colors hover:text-foreground/80 text-muted-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">(123) 456-7890</span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <nav className="hidden md:block border-t border-border/40">
        <div className="container max-w-screen-2xl">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-between items-center h-12">
              {secondaryNavItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {megaMenuData[item.title as keyof typeof megaMenuData] ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[80vw] max-w-screen-xl grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 p-8">
                          {megaMenuData[item.title as keyof typeof megaMenuData].map((column) => (
                            <div key={column.title}>
                              <h3 className="font-headline font-semibold text-foreground mb-4">{column.title}</h3>
                              <ul className="space-y-3">
                                {column.links.map((link) => (
                                   <li key={link.title}>
                                      <ListItem href={link.href} title={link.title} />
                                   </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent")}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-muted-foreground hover:text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground/80">{children}</p>
        </a>
      </NavigationMenuLink>
    );
  }
);
ListItem.displayName = 'ListItem';
