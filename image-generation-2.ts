import { generateText  } from 'ai';
import { google } from '@ai-sdk/google';
import fs from 'node:fs';


// image generation with multiModal LLM e.g Nano banana 
const result = await  generateText({
    model: google('gemini-3.1-flash-image-preview'),
    prompt: 'Generate an image for superhero cat',
});

for (const file of result.files) {
    if (file.mediaType.startsWith('image/')) {
        const imageId = crypto.randomUUID();
        if (!fs.existsSync('images/gemini')) {
            fs.mkdirSync('images/gemini', {recursive: true})
        }
        const filename = `images/gemini/${imageId}.png`;
        fs.writeFileSync(`images/gemini/${imageId}.png`, file.uint8Array);
        console.log('Generated image:', filename)
    }
    
}




