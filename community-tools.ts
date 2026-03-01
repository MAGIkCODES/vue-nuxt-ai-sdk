import { generateText, stepCountIs, tool  } from 'ai';
import { google } from '@ai-sdk/google';
import fs from 'node:fs'



// -- community tools -- 
const result = await generateText({
    model: google('gemini-2.5-flash'),
    tools: {
        google_search: google.tools.googleSearch({})
    },
    stopWhen: stepCountIs(3),
    prompt: 'I live in Nigeria, Rivers State. Port Harcourt, what should i do this weekend?',  
});

fs.writeFileSync('community-tools-result.jsson', JSON.stringify(result, null, 2))
console.log('Message:', result.text)


