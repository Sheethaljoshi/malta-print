import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Award, Users, Truck, Star } from 'lucide-react';
import FeatureSection from '@/components/FeatureSection';
import RequestQuoteForm from '@/components/RequestQuoteForm';

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

const features = [
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: 'Unbeatable Quality',
    description: 'We use the latest printing technology and premium materials to ensure your prints are always perfect.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Expert Support',
    description: 'Our friendly team of print experts is here to help you every step of the way, from design to delivery.',
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: 'Fast & Reliable Delivery',
    description: 'Get your prints when you need them with our speedy and dependable shipping options.',
  },
];

const testimonials = [
    {
        quote: "The quality of the business cards was outstanding, and the customer service was second to none. I'll definitely be coming back!",
        name: "Sarah L.",
        role: "Marketing Manager, TechCorp"
    },
    {
        quote: "I was on a tight deadline for our event flyers, and PrintPerfect delivered with incredible speed and quality. Highly recommended!",
        name: "David M.",
        role: "Event Organizer"
    }
]

const featureSections = [
  {
    title: "Magazines, Books, and Catalogs",
    description: "Describe your brand, tell your story, or showcase all your products in style. Choose the size, material, and binding that suit you, and customize magazines, books and catalogs quickly and easily—just the way you like.",
    imageUrl: "https://placehold.co/800x800.png",
    imageAlt: "A collection of beautifully printed magazines and books.",
    imagePosition: "right" as const,
    href: "/design",
    aiHint: "magazines books"
  },
  {
    title: "Business Cards for Every Profession",
    description: "Make a lasting first impression with our wide range of business cards. From classic matte to luxurious ultra-thick cards, we have the perfect option to represent your brand identity. Upload your design or create one with our AI assistant.",
    imageUrl: "https://placehold.co/800x800.png",
    imageAlt: "A stack of modern business cards.",
    imagePosition: "left" as const,
    href: "/design",
    aiHint: "business cards"
  },
  {
    title: "Powerful Marketing Materials",
    description: "Promote your business effectively with high-impact flyers, brochures, and posters. Our vibrant printing ensures your message stands out and grabs attention, whether on a bulletin board or in a direct mail campaign.",
    imageUrl: "https://placehold.co/800x800.png",
    imageAlt: "A person handing out a flyer.",
    imagePosition: "right" as const,
    href: "/design",
    aiHint: "flyers marketing"
  }
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
        <h2 className="font-headline text-3xl font-bold text-center mb-10">Our Best Sellers</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.name} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Link href="/design">
                    <ProductCard
                      name={product.name}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      aiHint={product.aiHint}
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {featureSections.map((section, index) => (
         <FeatureSection key={index} {...section} imagePosition={index % 2 === 0 ? 'right' : 'left'}/>
      ))}
      
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <RequestQuoteForm />
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold">Why Choose PrintPerfect?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We're more than just a printing company. We're your partner in bringing your creative visions to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-headline text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold">What Our Customers Say</h2>
            <p className="text-muted-foreground mt-2">We've helped thousands of businesses and individuals make a great impression.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
                <Card key={testimonial.name}>
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                                ))}
                            </div>
                            <blockquote className="text-lg italic text-foreground mb-4">"{testimonial.quote}"</blockquote>
                        </div>
                        <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
