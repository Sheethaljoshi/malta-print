import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { productsData, type Product, getAllProducts } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProductCard from '@/components/ProductCard';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts(productsData).find((p) => p.slug === slug);
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const allProducts = getAllProducts(productsData);
  const relatedProducts = allProducts.filter(p => p.slug !== product.slug).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image Slideshow Column */}
        <div className="sticky top-24">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={image.src}
                        alt={`${product.title} - view ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={image.aiHint}
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Product Description Column */}
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{product.shortDescription}</p>

          <div className="prose prose-lg text-foreground max-w-none mb-8">
            <p>{product.longDescription}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="w-full md:w-auto">
            <Link href="/design">
              Customize Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-24">
        <h2 className="font-headline text-3xl font-bold text-center mb-10">Related Products</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {relatedProducts.map((relatedProduct) => (
              <CarouselItem key={relatedProduct.slug} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Link href={`/products/${relatedProduct.slug}`}>
                    <ProductCard
                      name={relatedProduct.title}
                      description={relatedProduct.shortDescription}
                      imageUrl={relatedProduct.images[0].src}
                      aiHint={relatedProduct.images[0].aiHint}
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const allProducts = getAllProducts(productsData);
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}
