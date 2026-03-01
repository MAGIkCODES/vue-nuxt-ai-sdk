import { generateImage  } from 'ai';
import { google } from '@ai-sdk/google';
import fs from 'node:fs';
import crypto from 'node:crypto'


// -- image generation -- 
const result = await  generateImage({
    model: google.image('imagen-4.0-fast-generate-001'),

    // Image Size:
    // aspect ratio and size differ from models
    aspectRatio: '16:9', // 1:1, 3:4, 4:3, 9:16, 16:9
    // size: '1024x1024', // not support by google  imagen

    // what to generate
    prompt: 'Generate an image for superhero cat',

    // How many image
    n: 4, // will make 2 calls of image each
});

for (const image of result.images) {
    const imageId = crypto.randomUUID();
    if (!fs.existsSync('images/imagen')) {
        fs.mkdirSync('images/imagen', {recursive: true})
    }
    const filename = `images/imagen/${imageId}.png`;
    fs.writeFileSync(filename, image.uint8Array);
    console.log('Generated image:', filename)
}




