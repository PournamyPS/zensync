export default async function handler(req, res) {
  // Allow requests from your GitHub Pages site
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { system, user } = req.body;
  if (!system || !user) return res.status(400).json({ error: 'Missing system or user' });

  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_KEY}`  // ← stored in Vercel dashboard, never in code
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1000,
      temperature: 0.4,
      messages: [
        { role: 'system', content: system },
        { role: 'user',   content: user   }
      ]
    })
  });

  const data = await groqRes.json();
  if (!groqRes.ok) return res.status(groqRes.status).json({ error: data?.error?.message || 'Groq error' });

  return res.status(200).json({ result: data.choices?.[0]?.message?.content || '' });
}
