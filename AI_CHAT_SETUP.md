# AI chat — setup

The portfolio has an "Ask my AI" section that talks to Claude through a Vercel
serverless function. Follow these steps to make it work in production.

## 1. Get an Anthropic API key
1. Go to https://console.anthropic.com
2. Sign up / log in, add some credits (this chat costs cents — Haiku is cheap).
3. Create an API key (starts with `sk-ant-...`). Copy it.

## 2. Add the key to Vercel
1. Push this repo to GitHub (already on `Inzi123/portfolio`).
2. In Vercel → import the repo as a project (if not already).
3. Project → **Settings → Environment Variables** → add:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your `sk-ant-...` key
   - Apply to Production (and Preview if you want).
4. **Redeploy** so the function picks up the variable.

That's it — the key stays on the server, never in the browser.

## 3. How it works
- Frontend: the `#chat` section in `index.html` + its JS (sends the
  conversation to `/api/chat`, streams the reply into the bubble).
- Backend: `api/chat.js` — a Vercel serverless function that holds the system
  prompt (built from your context doc) and calls Claude with streaming.
- Model: `claude-haiku-4-5-20251001` (fast + cheap). Change it in `api/chat.js`
  if you want a smarter/pricier tier.

## 4. Editing what the AI says
The AI's knowledge + personality live in the `SYSTEM_PROMPT` string at the top
of `api/chat.js`. Edit that text to update facts, tone, or rules, then redeploy.

## 5. Local testing
Plain `file://` won't run the function. Use the Vercel CLI:
```
npm i -g vercel
vercel dev
```
Create a local `.env` (NOT committed) with `ANTHROPIC_API_KEY=sk-ant-...`.

## Notes
- If the key is missing or the API fails, the chat shows a friendly fallback
  message pointing visitors to the contact form — it never breaks the page.
- Conversation history is kept client-side only (last ~10 turns sent per call).
