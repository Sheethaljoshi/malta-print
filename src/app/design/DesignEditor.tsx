'use client';

import { useState } from 'react';
import type { ChangeEvent } from 'react';
import Image from 'next/image';
import { AlertCircle, Check, Loader2, Sparkles, UploadCloud } from 'lucide-react';
import type { DesignImprovementOutput } from '@/ai/flows/design-improvement-suggestions';
import { getDesignSuggestionsAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function DesignEditor() {
  const [designImage, setDesignImage] = useState<string | null>(null);
  const [productType, setProductType] = useState('Business Card');
  const [designDescription, setDesignDescription] = useState('A modern and clean business card for a tech startup.');
  const [aiSuggestions, setAiSuggestions] = useState<DesignImprovementOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDesignImage(reader.result as string);
        setAiSuggestions(null); // Reset suggestions on new image upload
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGetSuggestions = async () => {
    if (!designImage) {
      toast({
        variant: 'destructive',
        title: 'No design uploaded',
        description: 'Please upload a design image first.',
      });
      return;
    }
    setIsLoading(true);
    setAiSuggestions(null);
    try {
      const result = await getDesignSuggestionsAction({
        designDataUri: designImage,
        productType,
        designDescription,
      });
      setAiSuggestions(result);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error getting suggestions',
        description: error instanceof Error ? error.message : 'An unknown error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Preview Column */}
      <div className="flex flex-col gap-4">
        <h2 className="font-headline text-2xl font-bold text-foreground">Live Preview</h2>
        <Card className="aspect-[1.618] w-full max-w-lg mx-auto flex items-center justify-center bg-card sticky top-24">
          <div className="relative w-[90%] h-[90%]">
            {designImage ? (
              <Image src={designImage} alt="Uploaded design" layout="fill" objectFit="contain" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <UploadCloud className="w-16 h-16 mb-4" />
                <p>Your design will appear here</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Controls Column */}
      <div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Customize Your Design</CardTitle>
            <CardDescription>Upload your file and get AI-powered feedback instantly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="design-upload">Upload Your Design</Label>
              <Input id="design-upload" type="file" accept="image/*" onChange={handleFileChange} className="file:text-primary file:font-semibold"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="product-type">Product Type</Label>
              <Input id="product-type" value={productType} onChange={(e) => setProductType(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="design-description">Design Description</Label>
              <Textarea id="design-description" value={designDescription} onChange={(e) => setDesignDescription(e.target.value)} placeholder="e.g., A minimalist business card for a photographer."/>
            </div>

            <Button onClick={handleGetSuggestions} disabled={isLoading || !designImage} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              Get AI Feedback
            </Button>

            {aiSuggestions && (
              <div className="pt-4">
                <h3 className="font-headline text-lg font-semibold mb-2">Design Analysis Results</h3>
                <Accordion type="single" collapsible defaultValue="suggestions">
                  <AccordionItem value="suggestions">
                    <AccordionTrigger>Improvement Suggestions</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {aiSuggestions.suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="reasoning">
                    <AccordionTrigger>AI Reasoning</AccordionTrigger>
                    <AccordionContent>
                      <p>{aiSuggestions.reasoning}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
            
            <Separator />
            
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">Printing Options</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paper-type">Paper Type</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="paper-type">
                      <SelectValue placeholder="Select paper" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Matte (16-pt)</SelectItem>
                      <SelectItem value="premium">Premium Glossy (18-pt)</SelectItem>
                      <SelectItem value="recycled">Recycled Matte (14-pt)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" type="number" defaultValue={250} />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                    <span className="font-headline text-lg font-semibold">Total</span>
                    <span className="font-headline text-2xl font-bold text-primary">$49.99</span>
                </div>
                <p className="text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            </div>
            
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
