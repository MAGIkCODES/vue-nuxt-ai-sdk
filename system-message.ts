import { generateText } from 'ai';
import { google } from '@ai-sdk/google';


// -- system & message prompt -- 
const result = await generateText({
  model: google('gemini-2.5-flash'),
    // -- takes instruction
      // system: 
      // 'You are a helpful assistance that answers questions concisely and in markdown format. IMPORTANT: ALWAYS be concise. ',
      // prompt: 'Who is the most powerful super hero and why? Be verbose',

    // -- does not take instruction
      system: 
      'You are a helpful assistance that answers questions in markdown format.',
      prompt: 'Who is the most powerful super hero and why? Be verbose',

    // system: 'Address the user by name.',
    // messages: [
    //     { role: 'user', content: 'Hi, my name is justice'},
    //     { role: 'assistant', content: 'Hello Justice, How can i help you?'},
    //     { role: 'user', content: 'Who is the most powerful super hero and why'}
    // ]
});

console.log('message:', result.text);