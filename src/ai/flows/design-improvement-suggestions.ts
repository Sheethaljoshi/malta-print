// src/ai/flows/design-improvement-suggestions.ts
'use server';

/**
 * @fileOverview Provides design improvement suggestions for uploaded designs.
 *
 * - designImprovementSuggestions - A function that suggests design improvements.
 * - DesignImprovementInput - The input type for the designImprovementSuggestions function.
 * - DesignImprovementOutput - The return type for the designImprovementSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignImprovementInputSchema = z.object({
  designDataUri: z
    .string()
    .describe(
      "The user's design as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  productType: z.string().describe('The type of product the design is for (e.g., business card, flyer).'),
  designDescription: z.string().describe('A description of the design and its purpose.'),
});
export type DesignImprovementInput = z.infer<typeof DesignImprovementInputSchema>;

const DesignImprovementOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('A specific suggestion for improving the design.')
  ).describe('A list of design improvement suggestions.'),
  reasoning: z.string().describe('The AI bot reasoning for why it is making the suggested changes.')
});
export type DesignImprovementOutput = z.infer<typeof DesignImprovementOutputSchema>;

export async function designImprovementSuggestions(input: DesignImprovementInput): Promise<DesignImprovementOutput> {
  return designImprovementSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designImprovementPrompt',
  input: {schema: DesignImprovementInputSchema},
  output: {schema: DesignImprovementOutputSchema},
  prompt: `You are an expert design assistant specializing in providing feedback to improve designs for print.

  Based on the design, the product type, and the design description, provide a list of specific and actionable suggestions for improving the design.
  Explain your reasoning for each suggestion.

  Product Type: {{{productType}}}
  Design Description: {{{designDescription}}}
  Design: {{media url=designDataUri}}

  Respond in JSON format.
  `,
});

const designImprovementSuggestionsFlow = ai.defineFlow(
  {
    name: 'designImprovementSuggestionsFlow',
    inputSchema: DesignImprovementInputSchema,
    outputSchema: DesignImprovementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
