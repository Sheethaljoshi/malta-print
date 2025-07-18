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
        { title: 'Saddle Stitched', href: '/design' },
        { title: 'Perfect Binding', href: '/design' },
        { title: 'Paperback Books', href: '/design' },
        { title: 'Books', href: '/design' },
        { title: 'Booklets', href: '/design' },
        { title: 'Catalogs', href: '/design' },
        { title: 'Magazines', href: '/design' },
        { title: 'Zines', href: '/design' },
        { title: 'Journals', href: '/design' },
        { title: 'Manuals', href: '/design' },
      ],
    },
    {
      title: 'Marketing Materials',
      links: [
        { title: 'Flyers', href: '/design' },
        { title: 'Club Flyers', href: '/design' },
        { title: 'Brochures', href: '/design' },
        { title: 'Take-out Menus', href: '/design' },
        { title: 'Postcards and Invitations', href: '/design' },
      ],
    },
    {
      title: 'Stationery',
      links: [
        { title: 'Envelopes', href: '/design' },
        { title: 'Bookmarks', href: '/design' },
        { title: 'Hang Tags', href: '/design' },
        { title: 'Door hangers', href: '/design' },
      ],
    },
     {
      title: 'Business Cards',
      links: [
        { title: 'Standard business cards', href: '/design' },
        { title: 'Square Business Cards', href: '/design' },
        { title: 'Glossy Business Cards', href: '/design' },
        { title: 'Matte Business Cards', href: '/design' },
        { title: 'Rounded Corner Business Cards', href: '/design' },
        { title: 'Loyalty Cards', href: '/design' },
        { title: 'Appointment Cards', href: '/design' },
      ],
    },
    {
      title: 'Signs & Banners',
      links: [
        { title: 'Banners', href: '/design' },
        { title: 'Rigid Signs', href: '/design' },
        { title: 'Corrugated A-Frame Signs', href: '/design' },
        { title: 'Retractable Banners', href: '/design' },
      ],
    },
    {
      title: 'Stickers and Labels',
      links: [
        { title: 'Die-Cut Stickers', href: '/design' },
        { title: 'Round Stickers', href: '/design' },
        { title: 'Rectangular Stickers', href: '/design' },
        { title: 'Custom Shape Stickers', href: '/design' },
        { title: 'Oval Stickers', href: '/design' },
        { title: 'Square Stickers', href: '/design' },
        { title: 'Custom Roll labels', href: '/design' },
      ],
    },
  ],
  'Magazines, Books & Catalogs': [
    {
      title: 'Binding Options',
      links: [
        { title: 'Saddle Stitched', href: '/design' },
        { title: 'Perfect Binding', href: '/design' },
        { title: 'Spiral Bound', href: '/design' },
        { title: 'Wire-O Binding', href: '/design' },
      ],
    },
    {
      title: 'Publication Types',
      links: [
        { title: 'Magazines', href: '/design' },
        { title: 'Catalogs', href: '/design' },
        { title: 'Lookbooks', href: '/design' },
        { title: 'Manuals & Reports', href: '/design' },
      ],
    },
    {
        title: 'Featured',
        links: [
            { title: 'Photo Books', href: '/design' },
            { title: 'Comic Books', href: '/design' },
            { title: 'Coloring Books', href: '/design' },
        ]
    }
  ],
  'Marketing Materials': [
    {
        title: 'Flyers & Brochures',
        links: [
            { title: 'Flyers', href: '/design' },
            { title: 'Club Flyers', href: '/design' },
            { title: 'Brochures', href: '/design' },
            { title: 'Leaflets', href: '/design' },
        ]
    },
    {
        title: 'Cards & Menus',
        links: [
            { title: 'Postcards', href: '/design' },
            { title: 'Invitations', href: '/design' },
            { title: 'Take-out Menus', href: '/design' },
            { title: 'Rack Cards', href: '/design' },
        ]
    },
    {
        title: 'Promotional Items',
        links: [
            { title: 'Bookmarks', href: '/design' },
            { title: 'Hang Tags', href: '/design' },
            { title: 'Door Hangers', href: '/design' },
            { title: 'Table Tents', href: '/design' },
        ]
    }
  ],
  'Business Cards': [
    {
        title: 'By Paper Type',
        links: [
            { title: 'Standard Matte', href: '/design' },
            { title: 'Premium Glossy', href: '/design' },
            { title: 'Recycled Paper', href: '/design' },
            { title: 'Ultra Thick', href: '/design' },
        ]
    },
    {
        title: 'By Shape & Corner',
        links: [
            { title: 'Standard', href: '/design' },
            { title: 'Square', href: '/design' },
            { title: 'Rounded Corner', href: '/design' },
            { title: 'Slim', href: '/design' },
        ]
    },
    {
        title: 'Specialty Cards',
        links: [
            { title: 'Loyalty Cards', href: '/design' },
            { title: 'Appointment Cards', href: '/design' },
            { title: 'NFC Business Cards', href: '/design' },
            { title: 'Plastic Business Cards', href: '/design' },
        ]
    }
  ],
  'Invitations & Stationery': [
    {
        title: 'Invitations',
        links: [
            { title: 'Wedding Invitations', href: '/design' },
            { title: 'Party Invitations', href: '/design' },
            { title: 'Baby Shower Invitations', href: '/design' },
            { title: 'Graduation Announcements', href: '/design' },
        ]
    },
    {
        title: 'Stationery',
        links: [
            { title: 'Letterheads', href: '/design' },
            { title: 'Envelopes', href: '/design' },
            { title: 'Notepads', href: '/design' },
            { title: 'Thank You Cards', href: '/design' },
        ]
    },
    {
        title: 'Greeting Cards',
        links: [
            { title: 'Holiday Cards', href: '/design' },
            { title: 'Birthday Cards', href: '/design' },
            { title: 'Custom Greeting Cards', href: '/design' },
        ]
    }
  ],
  'Stickers & Labels': [
    {
        title: 'Stickers by Shape',
        links: [
            { title: 'Die-Cut Stickers', href: '/design' },
            { title: 'Round Stickers', href: '/design' },
            { title: 'Rectangular Stickers', href: '/design' },
            { title: 'Square Stickers', href: '/design' },
            { title: 'Oval Stickers', href: '/design' },
        ]
    },
    {
        title: 'Labels',
        links: [
            { title: 'Roll Labels', href: '/design' },
            { title: 'Sheet Labels', href: '/design' },
            { title: 'Product Labels', href: '/design' },
            { title: 'Mailing Labels', href: '/design' },
        ]
    },
    {
        title: 'Specialty',
        links: [
            { title: 'Bumper Stickers', href: '/design' },
            { title: 'Window Clings', href: '/design' },
            { title: 'Holographic Stickers', href: '/design' },
            { title: 'Clear Stickers', href: '/design' },
        ]
    }
  ],
  'Signs & Banners': [
    {
        title: 'Banners',
        links: [
            { title: 'Vinyl Banners', href: '/design' },
            { title: 'Mesh Banners', href: '/design' },
            { title: 'Fabric Banners', href: '/design' },
            { title: 'Retractable Banners', href: '/design' },
        ]
    },
    {
        title: 'Rigid Signs',
        links: [
            { title: 'Foam Board Signs', href: '/design' },
            { title: 'Corrugated Plastic Signs', href: '/design' },
            { title: 'Aluminum Signs', href: '/design' },
            { title: 'Yard Signs', href: '/design' },
        ]
    },
    {
        title: 'Large Format',
        links: [
            { title: 'Posters', href: '/design' },
            { title: 'Wall Decals', href: '/design' },
            { title: 'Window Graphics', href: '/design' },
            { title: 'Backlit Posters', href: '/design' },
        ]
    }
  ]
};

export default function Header() {
  const secondaryNavItems = [
    { title: 'All Products', href: '/design'},
    { title: 'Magazines, Books & Catalogs', href: '/design'},
    { title: 'Marketing Materials', href: '/design'},
    { title: 'Business Cards', href: '/design'},
    { title: 'Invitations & Stationery', href: '/design'},
    { title: 'Stickers & Labels', href: '/design'},
    { title: 'Signs & Banners', href: '/design'},
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
            <NavigationMenuList className="group flex flex-1 list-none items-center justify-start space-x-6">
              {secondaryNavItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {megaMenuData[item.title as keyof typeof megaMenuData] ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary focus:text-primary transition-colors">
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
