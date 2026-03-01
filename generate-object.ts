import { generateText, Output  } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';


// -- generate object -- 
const result = await generateText({
    model: google('gemini-2.5-flash'),
    output: Output.object({
        schema: z.object({ 
            name: z.string(),
            superpowers: z.array(z.string()), 
            weaknesses: z.array(z.string()), 
            backstory: z.string(),
            isHero: z.boolean(),
            isVillian: z.boolean()
        }),
    }),
    prompt: 'Who is the most powerful comic book character?',
  
});

console.log('message:', result.text);
// console.log('message:', result.output);
// console.log('message:', result.output.name);


