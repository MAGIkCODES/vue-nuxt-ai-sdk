import { generateText, stepCountIs, tool  } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';
import fs from 'node:fs'


const getFileContentsTool = tool({
            description: 'Get the content of the file',
            inputSchema: z.object({
                filePath: z.string(),
            }),
            execute: async ({ filePath }) => {
                const fileContents = fs.readFileSync(filePath, 'utf8');
                return fileContents;
            }
        })

// -- tools pattern to read system files -- 
const result = await generateText({
    model: google('gemini-2.5-flash'),
    prompt: 'What is the code in usage.ts doing?',
    stopWhen: stepCountIs(2),
    tools: {
        getFileContentsTool: getFileContentsTool,
    }
  
});

console.log('message:', result.content);



