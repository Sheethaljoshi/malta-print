// src/components/RequestQuoteForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const itemSchema = z.object({
  item: z.string().min(1, 'Please select an item.'),
  size: z.string().min(1, 'Size is required.'),
  customSize: z.string().optional(),
  material: z.string().min(1, 'Material is required.'),
  customMaterial: z.string().optional(),
  quantity: z.string().min(1, 'Quantity is required.'),
  customQuantity: z.string().optional(),
  colors: z.string().min(1, 'Colors are required.'),
  customColors: z.string().optional(),
  sides: z.string().min(1, 'Sides are required.'),
  customSides: z.string().optional(),
  design: z.enum(['SUPPLIED', 'UNIPRINT']),
  comments: z.string().optional(),
});

const formSchema = z.object({
  items: z.array(itemSchema).min(1, 'Please add at least one item.'),
  contactPerson: z.string().min(1, 'Contact person is required.'),
  mobileNumber: z.string().min(1, 'Mobile number is required.'),
  telephoneNumber: z.string().optional(),
  address: z.string().min(1, 'Address is required.'),
  vatNumber: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function RequestQuoteForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [
        {
          item: '',
          size: '',
          material: '',
          quantity: '',
          colors: '',
          sides: '',
          design: 'SUPPLIED',
          comments: '',
        },
      ],
      contactPerson: '',
      mobileNumber: '',
      telephoneNumber: '',
      address: '',
      vatNumber: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const watchItems = form.watch('items');

  const onSubmit = (data: FormValues) => {
    console.log(data); // Replace with backend submission logic
    toast({
      title: 'Quote Request Submitted!',
      description: 'We have received your request and will get back to you shortly.',
    });
    form.reset();
  };
  
  const dropdownOptions = {
      items: ["Business Cards", "Flyers", "Posters", "Banners", "Brochures", "Stickers"],
      size: ["A6", "A5", "A4", "A3", "A2", "A1", "CUSTOM"],
      material: ["VINYL G", "VINYL M", "CANVAS", "GREY BACK", "PHOTO", "ARTBOARD", "CUSTOM"],
      quantity: ["100", "250", "500", "1000", "1500", "2500", "CUSTOM"],
      colors: ["1 COLOR", "2 COLOR", "3 COLOR", "4 COLOR", "CUSTOM"],
      sides: ["1 SIDE", "BOTH", "CUSTOM"],
  }

  return (
    <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-3xl font-bold text-center mb-2">Make a Request</h2>
        <p className="text-muted-foreground text-center mb-8">Fill out the form below and we'll get back to you with a quote.</p>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h3 className="font-headline text-2xl font-semibold mb-4">Your Request</h3>
            <div className="space-y-6">
              {fields.map((field, index) => (
                <Card key={field.id} className="bg-muted/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name={`items.${index}.item`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Choose Your Item/s</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an item..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {dropdownOptions.items.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`items.${index}.size`}
                        render={({ field }) => (
                           <FormItem>
                            <FormLabel>Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a size..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {dropdownOptions.size.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                              </SelectContent>
                            </Select>
                            {watchItems[index]?.size === 'CUSTOM' && (
                               <FormField
                                control={form.control}
                                name={`items.${index}.customSize`}
                                render={({ field }) => (
                                    <Input {...field} placeholder="Enter custom size" className="mt-2" />
                                )} />
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`items.${index}.material`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Material</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a material..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 {dropdownOptions.material.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                              </SelectContent>
                            </Select>
                             {watchItems[index]?.material === 'CUSTOM' && (
                               <FormField
                                control={form.control}
                                name={`items.${index}.customMaterial`}
                                render={({ field }) => (
                                    <Input {...field} placeholder="Enter custom material" className="mt-2" />
                                )} />
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`items.${index}.quantity`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a quantity..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {dropdownOptions.quantity.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                              </SelectContent>
                            </Select>
                             {watchItems[index]?.quantity === 'CUSTOM' && (
                               <FormField
                                control={form.control}
                                name={`items.${index}.customQuantity`}
                                render={({ field }) => (
                                    <Input {...field} type="number" placeholder="Enter custom quantity" className="mt-2" />
                                )} />
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`items.${index}.colors`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Colours</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select colors..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {dropdownOptions.colors.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                              </SelectContent>
                            </Select>
                             {watchItems[index]?.colors === 'CUSTOM' && (
                               <FormField
                                control={form.control}
                                name={`items.${index}.customColors`}
                                render={({ field }) => (
                                    <Input {...field} placeholder="Enter custom colours" className="mt-2" />
                                )} />
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`items.${index}.sides`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sides</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select sides..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {dropdownOptions.sides.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                              </SelectContent>
                            </Select>
                            {watchItems[index]?.sides === 'CUSTOM' && (
                               <FormField
                                control={form.control}
                                name={`items.${index}.customSides`}
                                render={({ field }) => (
                                    <Input {...field} placeholder="Enter custom sides" className="mt-2" />
                                )} />
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`items.${index}.design`}
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Design</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex items-center space-x-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="SUPPLIED" />
                                  </FormControl>
                                  <FormLabel className="font-normal">Supplied</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="UNIPRINT" />
                                  </FormControl>
                                  <FormLabel className="font-normal">Uniprint</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name={`items.${index}.comments`}
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormLabel>Your Comments</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Add any special requirements or comments..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => remove(index)}
                        className="mt-4"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove Item
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
             <Button
                type="button"
                variant="outline"
                onClick={() => append({ item: '', size: '', material: '', quantity: '', colors: '', sides: '', design: 'SUPPLIED', comments: '' })}
                className="mt-4"
                >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add More Items
            </Button>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-headline text-2xl font-semibold mb-4">Your Details</h3>
             <Card className="bg-muted/50">
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="contactPerson"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Contact Person</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Mobile Number</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="e.g., (123) 456-7890" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telephoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Telephone Number (Optional)</FormLabel>
                                <FormControl>
                                    <Input type="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="vatNumber"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>VAT Number (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter VAT number" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="md:col-span-2">
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="123 Print St, Design City, PC 12345" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </CardContent>
             </Card>
          </div>
          
          <div className="text-center">
             <Button type="submit" size="lg" className="w-full max-w-sm bg-accent text-accent-foreground hover:bg-accent/90">
                Submit to Get Your Quote
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
