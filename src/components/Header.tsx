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
import type { Product, ProductCategory } from '@/lib/products';
import { productsData } from '@/lib/products';

const megaMenuData = productsData;


export default function Header() {
  const secondaryNavItems = Object.keys(megaMenuData);

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
                      key={item}
                      href={`/products/${megaMenuData[item as keyof typeof megaMenuData][0].links[0].slug}`}
                      className="transition-colors hover:text-foreground/80 text-muted-foreground"
                    >
                      {item}
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
            <NavigationMenuList className="justify-between">
              {secondaryNavItems.map((category) => (
                <NavigationMenuItem key={category} className="px-12">
                  {megaMenuData[category as keyof typeof megaMenuData] ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-primary focus:text-primary transition-colors">
                        {category}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[80vw] max-w-screen-xl grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 p-8">
                          {megaMenuData[category as keyof typeof megaMenuData].map((column) => (
                            <div key={column.title}>
                              <h3 className="font-headline font-semibold text-foreground mb-4">{column.title}</h3>
                              <ul className="space-y-3">
                                {column.links.map((link) => (
                                   <li key={link.title}>
                                      <ListItem href={`/products/${link.slug}`} title={link.title} />
                                   </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={`/products/${megaMenuData[category as keyof typeof megaMenuData][0].links[0].slug}`} legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent")}>
                        {category}
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
            'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted group',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-muted-foreground group-hover:text-primary transition-colors">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground/80">{children}</p>
        </a>
      </NavigationMenuLink>
    );
  }
);
ListItem.displayName = 'ListItem';
