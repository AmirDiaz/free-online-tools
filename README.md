# Free Online Tools — 10-in-1 SaaS Starter Kit

**10 production-ready micro-SaaS tools in one Next.js 14 codebase.** Stripe checkout and webhooks pre-wired in every tool. Deploy once, own the whole suite.

No signup walls, no tracking, no bloat — just tools that work. Clone it, deploy it to Vercel, and you have a live product in an afternoon.

## The 10 Tools

| Tool | What's inside |
|---|---|
| **AI Tools** | Code explainer, grammar fixer, summarizer, tone changer, translator |
| **Color Tools** | Contrast checker (WCAG), CSS converter, gradient maker, palette generator, picker |
| **Dev Tools** | Base64, hash generator, JSON formatter, JWT decoder, regex tester |
| **Email Tools** | Validator, inbox preview, spam checker, subject line tester |
| **Image Tools** | Compress, convert, crop, resize, background removal |
| **PDF Tools** | Compress, merge, rotate, PDF↔image conversion |
| **QR Tools** | Basic + batch generation, custom colors, logo embed, analytics |
| **SEO Tools** | Keyword density, meta generator, robots.txt, sitemap, SERP preview |
| **Text Tools** | Case convert, diff, find & replace, lorem ipsum, reverse |
| **Time Tools** | Age calculator, countdown, date diff, meeting planner, timezone converter |

## Why this kit

- **Next.js 14 App Router** — modern, fast, SEO-friendly out of the box
- **Stripe ready** — `/api/checkout` + `/api/webhooks/stripe` in every tool; add your keys and you're selling
- **Zero backend lock-in** — static-first pages; add auth/payments only where you want them
- **10 landing pages** — each tool has its own shareable URL and its own index page
- **One deploy** — `vercel deploy` runs the whole suite on your domain

## Quick start

```bash
git clone https://github.com/AmirDiaz/free-online-tools.git
cd free-online-tools/saas/ai-tools   # or any other tool
npm install
npm run dev
```

Deploy each tool as its own site, or merge the folders into a single app — the structure is identical across all ten.

## Sell it your way

The kit ships with Stripe checkout stubs in every tool. Wire your product IDs:

1. Create products in your Stripe dashboard
2. Set `STRIPE_SECRET_KEY` in `.env`
3. Point the checkout route at your price IDs
4. Done — each tool can have its own free tier and paid tier

## Monetization ideas

- Host the tools free with ads, sell an ad-free pro pass
- Sell the whole kit as a template to other indie builders
- Pick one tool, polish it, and launch it as a standalone product

## Support

If this kit saved you a weekend of boilerplate:

- **GitHub Sponsors** — Sponsor button above
- **USDC (Base)** — `0x3906E8C9551F26411D23411c9Db817ec9a724D5C`

## License

MIT — commercial use allowed. Selling derivatives is allowed. Attribution appreciated.
