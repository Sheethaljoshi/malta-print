import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    name: 'Business Cards',
    description: 'Professional, high-quality cards',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'business card'
  },
  {
    name: 'Flyers & Leaflets',
    description: 'Promote your events and offers',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'flyer event'
  },
  {
    name: 'Posters',
    description: 'Large format prints that stand out',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'poster concert'
  },
  {
    name: 'Stickers & Labels',
    description: 'Custom shapes and sizes',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'sticker design'
  },
  {
    name: 'Brochures',
    description: 'Folded leaflets for detailed info',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'brochure corporate'
  },
  {
    name: 'Banners & PVC',
    description: 'Durable outdoor advertising',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'banner advertising'
  },
  {
    name: 'Invitations',
    description: 'For weddings, parties, and events',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'invitation wedding'
  },
  {
    name: 'T-shirts & Clothing',
    description: 'Custom apparel printing',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'tshirt design'
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground mb-4">
          Create Your Perfect Print
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          From business cards to banners, get high-quality prints with our easy-to-use design tools and AI-powered assistance.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href="/design" key={product.name}>
              <ProductCard
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                aiHint={product.aiHint}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
