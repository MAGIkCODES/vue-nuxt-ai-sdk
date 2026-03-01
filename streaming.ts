import { streamText, Output  } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';


// --  streaming -- 
const { partialOutputStream } =  streamText({
    model: google('gemini-2.5-flash'),
    output: Output.array({
        element: z.object({ 
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
    prompt: 'Give a list of 5 comic book character?',
  
});

for await ( const text of partialOutputStream) {
console.log('message:', text);

}



