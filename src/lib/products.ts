
export type Product = {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  images: {
    src: string;
    aiHint: string;
  }[];
};

export type ProductCategory = {
  title: string;
  links: Product[];
};

export type ProductsData = {
  [key: string]: ProductCategory[];
};

export const productsData: ProductsData = {
  'All Products': [
    {
      title: 'Most Popular',
      links: [
        {
          title: 'Saddle Stitch Binding',
          slug: 'saddle-stitch-binding',
          shortDescription: 'Ideal for booklets, catalogs, and magazines with fewer pages.',
          longDescription: 'Saddle stitching is a popular binding method for creating professional-looking booklets, magazines, and catalogs. It involves folding sheets of paper and stapling them through the center fold, creating a simple yet durable bind. This method is cost-effective and perfect for documents up to about 80 pages, offering a clean, flat-lying finish.',
          features: [
            'Cost-effective for short runs',
            'Lies flat when open',
            'Fast turnaround time',
            'Perfect for magazines, catalogs, and event programs'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'saddle-stitched booklet' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'magazine binding' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'open catalog' },
          ]
        },
        {
          title: 'Standard Matte Business Cards',
          slug: 'standard-matte-business-cards',
          shortDescription: 'Classic, non-glossy cards for a professional look.',
          longDescription: 'Our Standard Matte Business Cards are a timeless choice for professionals. Printed on high-quality 16-pt cardstock, they offer a smooth, non-reflective surface that\'s easy to write on. This classic finish provides a sophisticated and elegant feel, ensuring you make a great first impression.',
          features: [
            'Smooth, non-glossy matte finish',
            'Durable 16-pt cardstock',
            'Easy to write on',
            'Full-color printing on one or both sides'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'matte business card' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'stack of business cards' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'person holding card' },
          ]
        },
        {
          title: 'Event Flyers',
          slug: 'event-flyers',
          shortDescription: 'Promote your events with eye-catching flyers.',
          longDescription: 'Generate buzz for your concert, conference, or party with our high-quality event flyers. Available in a variety of sizes and paper stocks, our flyers are printed with vibrant colors to ensure your message gets noticed. Hand them out, post them up, or leave them on counters to reach your target audience effectively.',
          features: [
            'Full-color, high-resolution printing',
            'Multiple sizes and paper options',
            'Glossy or matte finishes available',
            'Great for promotions and announcements'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'event flyer design' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'concert flyer' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'stack of flyers' },
          ]
        },
      ],
    },
    {
      title: 'Marketing & Promo',
      links: [
        {
          title: 'Tri-Fold Brochures',
          slug: 'trifold-brochures',
          shortDescription: 'Classic and versatile for detailed information.',
          longDescription: 'The tri-fold brochure is a classic marketing tool for a reason. Its six panels provide ample space to tell your story, showcase products, and provide detailed information in a compact format. We offer various paper weights and finishes to create a professional and informative brochure for your business.',
          features: [
            'Six panels for comprehensive content',
            'Folds to a convenient, portable size',
            'Available in multiple paper stocks and finishes',
            'Ideal for price lists, menus, and service descriptions'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'trifold brochure' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'corporate brochure' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'brochure layout' },
          ]
        },
        {
          title: 'Custom Die-Cut Stickers',
          slug: 'die-cut-stickers',
          shortDescription: 'Stickers cut to any custom shape you want.',
          longDescription: 'Unleash your creativity with die-cut stickers! We can cut your stickers to the exact shape of your design, creating a unique and memorable product. Made from durable, waterproof vinyl, they are perfect for branding, promotions, or just for fun. Upload your logo or artwork, and we\'ll handle the rest.',
          features: [
            'Cut to any custom shape',
            'Durable and waterproof vinyl',
            'Matte or gloss laminate options',
            'Perfect for laptops, water bottles, and packaging'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'die-cut sticker' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'sticker sheet' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'logo sticker' },
          ]
        },
      ],
    },
    {
      title: 'Signage',
      links: [
        {
          title: 'Indoor Posters',
          slug: 'indoor-posters',
          shortDescription: 'High-resolution posters for indoor displays.',
          longDescription: 'Decorate your office, retail space, or trade show booth with our stunning indoor posters. Printed on high-quality paper with sharp, vibrant colors, these posters are perfect for making a big impact. Choose from a range of sizes to fit any space and showcase your brand, products, or artwork.',
          features: [
            'Photo-quality printing',
            'Ideal for framing or mounting',
            'Available in standard and custom sizes',
            'Perfect for retail, offices, and events'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'poster on wall' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'art print poster' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'large format printing' },
          ]
        },
        {
          title: 'Outdoor Banners',
          slug: 'outdoor-banners',
          shortDescription: 'Durable, weather-resistant vinyl banners.',
          longDescription: 'Advertise your business or event loud and proud with our durable outdoor banners. Made from weather-resistant vinyl and printed with fade-resistant UV inks, these banners are built to withstand the elements. They come with grommets for easy hanging, making them perfect for storefronts, events, and job sites.',
          features: [
            'Durable, weather-resistant vinyl',
            'Fade-resistant UV inks',
            'Grommets included for easy installation',
            'Great for grand openings, sales, and events'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'outdoor vinyl banner' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'storefront banner' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'event banner' },
          ]
        },
      ]
    },
    {
      title: 'Labels & Packaging',
      links: [
        {
          title: 'Premium Glossy Business Cards',
          slug: 'premium-glossy-business-cards',
          shortDescription: 'Shiny, reflective cards that make colors pop.',
          longDescription: 'Make a statement with our Premium Glossy Business Cards. The high-gloss UV coating makes your colors appear richer and more vibrant, instantly grabbing attention. Printed on thick 18-pt cardstock, these cards have a substantial feel and a striking look that’s perfect for businesses that want to stand out.',
          features: [
            'High-gloss, reflective finish',
            'Thick and durable 18-pt cardstock',
            'Enhances color vibrancy',
            'Excellent for image-heavy designs'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'glossy business card' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'vibrant color cards' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'creative business card' },
          ]
        },
        {
          title: 'Spot UV Business Cards',
          slug: 'spot-uv-business-cards',
          shortDescription: 'Highlight specific areas with a glossy finish.',
          longDescription: 'Spot UV business cards add a touch of luxury and sophistication by applying a high-gloss finish to specific areas of your design. This creates a stunning contrast between the matte card surface and the shiny, raised elements. Use it to highlight your logo, name, or other key details to create a memorable tactile experience.',
          features: [
            'Targeted high-gloss application',
            'Creates a tactile and visual contrast',
            'Adds a luxurious, premium feel',
            'Perfect for highlighting logos and text'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'spot uv logo' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'luxury business card' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'design detail card' },
          ]
        },
      ],
    },
  ],
  'Magazines, Books & Catalogs': [
    {
      title: 'Binding Options',
      links: [
        {
          title: 'Saddle Stitch Binding',
          slug: 'saddle-stitch-binding',
          shortDescription: 'Ideal for booklets, catalogs, and magazines with fewer pages.',
          longDescription: 'Saddle stitching is a popular binding method for creating professional-looking booklets, magazines, and catalogs. It involves folding sheets of paper and stapling them through the center fold, creating a simple yet durable bind. This method is cost-effective and perfect for documents up to about 80 pages, offering a clean, flat-lying finish.',
          features: [
            'Cost-effective for short runs',
            'Lies flat when open',
            'Fast turnaround time',
            'Perfect for magazines, catalogs, and event programs'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'saddle-stitched booklet' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'magazine binding' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'open catalog' },
          ]
        },
        {
          title: 'Perfect Binding',
          slug: 'perfect-binding',
          shortDescription: 'Professional adhesive binding for thicker books and reports.',
          longDescription: 'Perfect binding uses a strong adhesive to bind pages together with a cardstock cover, creating a clean, flat spine. This method is commonly used for paperback books, corporate reports, and thicker catalogs. It provides a high-end, polished look and allows for printing on the spine, making it easy to identify on a shelf.',
          features: [
            'Professional, high-end appearance',
            'Printable square spine',
            'Durable and long-lasting',
            'Ideal for paperbacks, manuals, and thick brochures'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'perfect bound book' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'book spine' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'stack of reports' },
          ]
        },
      ],
    },
     {
      title: 'Publication Types',
      links: [
        {
          title: 'Magazines',
          slug: 'magazines',
          shortDescription: 'High-quality printing for magazines of all types.',
          longDescription: 'From glossy fashion magazines to niche trade publications, we offer a range of paper stocks, finishes, and binding options to bring your magazine to life. Our vibrant color printing ensures your photography and articles look their best, capturing your readers\' attention from cover to cover.',
          features: [
            'Vibrant full-color printing',
            'Choice of glossy, matte, or uncoated paper',
            'Saddle stitch or perfect binding options',
            'Custom sizes available'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'stack of magazines' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'fashion magazine' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'magazine layout' },
          ]
        },
         {
          title: 'Books',
          slug: 'books',
          shortDescription: 'Professional book printing for authors and publishers.',
          longDescription: 'Bring your story to life with our professional book printing services. We cater to self-publishers and established authors alike, offering both paperback and hardcover options. Choose from various paper types, cover finishes, and binding styles to create a book you can be proud of. Our attention to detail ensures a final product that feels great in your readers\' hands.',
          features: [
            'Paperback and hardcover options',
            'Variety of trim sizes available',
            'High-quality paper for text and images',
            'Durable binding for a long-lasting book'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'stack of books' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'person reading book' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'book cover design' },
          ]
        },
      ]
    }
  ],
  'Business Cards': [
     {
      title: 'By Paper Type',
      links: [
        {
          title: 'Standard Matte Business Cards',
          slug: 'standard-matte-business-cards',
          shortDescription: 'Classic, non-glossy cards for a professional look.',
          longDescription: 'Our Standard Matte Business Cards are a timeless choice for professionals. Printed on high-quality 16-pt cardstock, they offer a smooth, non-reflective surface that\'s easy to write on. This classic finish provides a sophisticated and elegant feel, ensuring you make a great first impression.',
          features: [
            'Smooth, non-glossy matte finish',
            'Durable 16-pt cardstock',
            'Easy to write on',
            'Full-color printing on one or both sides'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'matte business card' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'stack of business cards' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'person holding card' },
          ]
        },
        {
          title: 'Premium Glossy Business Cards',
          slug: 'premium-glossy-business-cards',
          shortDescription: 'Shiny, reflective cards that make colors pop.',
          longDescription: 'Make a statement with our Premium Glossy Business Cards. The high-gloss UV coating makes your colors appear richer and more vibrant, instantly grabbing attention. Printed on thick 18-pt cardstock, these cards have a substantial feel and a striking look that’s perfect for businesses that want to stand out.',
          features: [
            'High-gloss, reflective finish',
            'Thick and durable 18-pt cardstock',
            'Enhances color vibrancy',
            'Excellent for image-heavy designs'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'glossy business card' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'vibrant color cards' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'creative business card' },
          ]
        },
      ],
    },
     {
      title: 'By Feature',
      links: [
        {
          title: 'Spot UV Business Cards',
          slug: 'spot-uv-business-cards',
          shortDescription: 'Highlight specific areas with a glossy finish.',
          longDescription: 'Spot UV business cards add a touch of luxury and sophistication by applying a high-gloss finish to specific areas of your design. This creates a stunning contrast between the matte card surface and the shiny, raised elements. Use it to highlight your logo, name, or other key details to create a memorable tactile experience.',
          features: [
            'Targeted high-gloss application',
            'Creates a tactile and visual contrast',
            'Adds a luxurious, premium feel',
            'Perfect for highlighting logos and text'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'spot uv logo' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'luxury business card' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'design detail card' },
          ]
        },
      ],
    },
  ],
  'Marketing Materials': [
    {
      title: 'Flyers & Leaflets',
      links: [
        {
          title: 'Event Flyers',
          slug: 'event-flyers',
          shortDescription: 'Promote your events with eye-catching flyers.',
          longDescription: 'Generate buzz for your concert, conference, or party with our high-quality event flyers. Available in a variety of sizes and paper stocks, our flyers are printed with vibrant colors to ensure your message gets noticed. Hand them out, post them up, or leave them on counters to reach your target audience effectively.',
          features: [
            'Full-color, high-resolution printing',
            'Multiple sizes and paper options',
            'Glossy or matte finishes available',
            'Great for promotions and announcements'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'event flyer design' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'concert flyer' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'stack of flyers' },
          ]
        },
      ],
    },
    {
      title: 'Brochures',
      links: [
        {
          title: 'Tri-Fold Brochures',
          slug: 'trifold-brochures',
          shortDescription: 'Classic and versatile for detailed information.',
          longDescription: 'The tri-fold brochure is a classic marketing tool for a reason. Its six panels provide ample space to tell your story, showcase products, and provide detailed information in a compact format. We offer various paper weights and finishes to create a professional and informative brochure for your business.',
          features: [
            'Six panels for comprehensive content',
            'Folds to a convenient, portable size',
            'Available in multiple paper stocks and finishes',
            'Ideal for price lists, menus, and service descriptions'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'trifold brochure' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'corporate brochure' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'brochure layout' },
          ]
        },
      ],
    },
  ],
  'Posters & Banners': [
     {
      title: 'Large Format',
      links: [
        {
          title: 'Indoor Posters',
          slug: 'indoor-posters',
          shortDescription: 'High-resolution posters for indoor displays.',
          longDescription: 'Decorate your office, retail space, or trade show booth with our stunning indoor posters. Printed on high-quality paper with sharp, vibrant colors, these posters are perfect for making a big impact. Choose from a range of sizes to fit any space and showcase your brand, products, or artwork.',
          features: [
            'Photo-quality printing',
            'Ideal for framing or mounting',
            'Available in standard and custom sizes',
            'Perfect for retail, offices, and events'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'poster on wall' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'art print poster' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'large format printing' },
          ]
        },
        {
          title: 'Outdoor Banners',
          slug: 'outdoor-banners',
          shortDescription: 'Durable, weather-resistant vinyl banners.',
          longDescription: 'Advertise your business or event loud and proud with our durable outdoor banners. Made from weather-resistant vinyl and printed with fade-resistant UV inks, these banners are built to withstand the elements. They come with grommets for easy hanging, making them perfect for storefronts, events, and job sites.',
          features: [
            'Durable, weather-resistant vinyl',
            'Fade-resistant UV inks',
            'Grommets included for easy installation',
            'Great for grand openings, sales, and events'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'outdoor vinyl banner' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'storefront banner' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'event banner' },
          ]
        },
      ]
    }
  ],
  'Stickers & Labels': [
    {
      title: 'Sticker Types',
      links: [
        {
          title: 'Custom Die-Cut Stickers',
          slug: 'die-cut-stickers',
          shortDescription: 'Stickers cut to any custom shape you want.',
          longDescription: 'Unleash your creativity with die-cut stickers! We can cut your stickers to the exact shape of your design, creating a unique and memorable product. Made from durable, waterproof vinyl, they are perfect for branding, promotions, or just for fun. Upload your logo or artwork, and we\'ll handle the rest.',
          features: [
            'Cut to any custom shape',
            'Durable and waterproof vinyl',
            'Matte or gloss laminate options',
            'Perfect for laptops, water bottles, and packaging'
          ],
          images: [
            { src: 'https://placehold.co/800x800.png', aiHint: 'die-cut sticker' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'sticker sheet' },
            { src: 'https://placehold.co/800x800.png', aiHint: 'logo sticker' },
          ]
        },
      ],
    },
  ],
};

export function getAllProducts(data: ProductsData): Product[] {
  const allProducts: Product[] = [];
  for (const category in data) {
    data[category].forEach((subCategory) => {
      allProducts.push(...subCategory.links);
    });
  }
  // Simple deduplication based on slug
  const uniqueProducts = new Map<string, Product>();
  allProducts.forEach(p => uniqueProducts.set(p.slug, p));
  return Array.from(uniqueProducts.values());
}
