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
