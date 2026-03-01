import { generateText } from 'ai';
import { google } from '@ai-sdk/google';


const story = `Justice wasn’t the loudest engineer on the team, but she was the one everyone pinged when production felt “strange.”

She was a senior web developer at a fast-growing fintech startup. On paper, her job was simple: build APIs, maintain the frontend, ship features. In reality, she spent most of her time solving invisible problems — the kind that didn’t show up in sprint demos but determined whether the system scaled or collapsed.

One Monday morning, customer support reported something odd. Users were seeing outdated account balances for a few seconds after logging in. Not always. Not consistently. Just enough to create doubt.

Lena traced the issue through the stack.

The frontend was built with Vue. The backend ran on Node.js with a Redis caching layer in front of a PostgreSQL database. To improve performance, they had introduced aggressive response caching for balance endpoints. It worked beautifully in load tests.

Until it didn’t.

The bug wasn’t in the database. It wasn’t in the business logic. It was in the cache invalidation strategy.

When a transaction completed, the system updated the database immediately. But cache invalidation was queued asynchronously. Under high load, the invalidation lagged behind writes by a few hundred milliseconds.

To most users, that delay was invisible.
To users checking money? It was everything.

Lena redesigned the flow.

Instead of time-based expiration alone, she implemented event-driven cache invalidation. Every successful transaction emitted a domain event. The balance cache key was invalidated synchronously before returning a response.

She also introduced structured logging around cache hits vs. misses and added tracing to measure cache coherence lag.

Within a week:

* Stale balance complaints dropped to zero.
* API latency remained low.
* Observability improved across the board.

At the next engineering meeting, someone called her a “10x developer.”

She disagreed.

“I didn’t write more code,” she said.
“I just removed uncertainty from the system.”

Because real web development isn’t about shipping features fast.

It’s about designing systems that behave predictably — even under stress.
`


// -- prompt caching -- 
const result = await generateText({
  model: google('gemini-2.5-flash'),
  prompt: `<story>${story}</story> Summarize the story in 30 words or less`,
  
});

const result2 = await generateText({
  model: google('gemini-2.5-flash'),
  prompt: `<story>${story}</story> Write a haiku about the story`,
  
});

console.log('message:', result.text);
console.log('message:', result.usage);

console.log('message:', result2.text);
console.log('message:', result2.usage);


