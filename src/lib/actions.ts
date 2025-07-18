'use server';

import {
  designImprovementSuggestions,
  type DesignImprovementInput,
  type DesignImprovementOutput,
} from '@/ai/flows/design-improvement-suggestions';

export async function getDesignSuggestionsAction(
  input: DesignImprovementInput
): Promise<DesignImprovementOutput> {
  try {
    const output = await designImprovementSuggestions(input);
    return output;
  } catch (error) {
    console.error('Error in designImprovementSuggestions flow:', error);
    throw new Error('Failed to get design suggestions from AI. Please try again.');
  }
}
