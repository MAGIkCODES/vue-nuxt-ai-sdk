import { generateText } from 'ai';
import { google } from '@ai-sdk/google';


// -- image input prompt -- 
const result = await generateText({
  model: google('gemini-2.5-flash'),
    system: 'Address the user by name.',
    messages: [
        { role: 'user', 
            content: [
                {
                    type: 'image',
                    image: 'https://github.com/vercel/ai/blob/main/examples/ai-functions/data/comic-cat.png?raw=true'
                },
                {
                    type: 'text',
                    text: 'Describe the image, Be concise'
                }
            ]
        },
    ] 
});

console.log('message:', result.text);