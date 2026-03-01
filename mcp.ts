import { createMCPClient } from '@ai-sdk/mcp';
import { generateText, stepCountIs, tool  } from 'ai';
import { google } from '@ai-sdk/google';
import fs from 'node:fs'


const mcpClient = await createMCPClient({
  transport: {
    type: 'http',
    url: 'https://ui.nuxt.com/mcp',

    // optional: configure HTTP headers
    // headers: { Authorization: 'Bearer my-api-key' },

    // optional: provide an OAuth client provider for automatic authorization
    // authProvider: myOAuthClientProvider,
  },
});

const tools = await mcpClient.tools();


// -- mcp  -- 
const result = await generateText({
    model: google('gemini-2.5-flash'),
    prompt: 'List 10 Nuxt Ui component with markdown formatting.',  
    tools,
    stopWhen: stepCountIs(2),
    onFinish: async () => {
        await mcpClient.close();
    }
});

fs.writeFileSync('mcp-result.json', JSON.stringify(result, null, 2))
console.log('Message:', result.text)