import { generateText, Output  } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';


// -- describe object -- 
const result = await generateText({
    model: google('gemini-2.5-flash'),
    output: Output.object({
        schema: z.object({ 
            name: z.string(),
            superpowers: z
                .array(z.string())
                .max(3)
                .describe('The characters superpowers. maximum 3.'), 
            weaknesses: z.array(z.string()), 
            backstory: z
                .string()
                .describe('A short paragraph about how the character got their powers, and what they and what they are known for.'),
                alignment: z.enum(['good', 'evil', 'neutral']),
            isHero: z.boolean(),
            isVillian: z.boolean()
        }),
    }),
    prompt: 'Who is the most powerful comic book character?',
  
});

console.log('message:', result.output);

// Access the structured object here
// console.log('Structured Result:', JSON.stringify(result.object, null, 2));


