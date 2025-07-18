import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  href: string;
  aiHint: string;
}

export default function FeatureSection({
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition = 'right',
  href,
  aiHint
}: FeatureSectionProps) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="container mx-auto px-4 py-16">
      <div className={cn(
        "grid md:grid-cols-2 gap-12 items-center"
      )}>
        <div className={cn(
          "flex flex-col justify-center",
          isImageLeft ? "md:col-start-2" : ""
        )}>
          <h2 className="font-headline text-3xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8 text-lg">{description}</p>
          <div className="flex">
            <Button asChild size="lg">
              <Link href={href}>
                Discover More
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className={cn(
          "relative aspect-square",
          isImageLeft ? "md:col-start-1" : ""
        )}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={aiHint}
          />
        </div>
      </div>
    </section>
  );
}
