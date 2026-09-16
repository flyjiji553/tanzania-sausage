# AFRINOVA FOOD LIMITED — Tanzania Sausage Marketing Site

Official single-page marketing website for **AFRINOVA FOOD LIMITED**.

Built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS v4**.

> This is the real AFRINOVA brand site. Do not replace company name, TIN/VRN, WhatsApp lines, or bank details with fictional placeholders.

## Site structure (wireframe)

| Nav | Anchor | Content |
|-----|--------|---------|
| Home | `#home` | Hero image, slogan, feature chips, product highlights |
| Products · Bidhaa | `#products` | Product cards + 5 WhatsApp consultation lines |
| Services | `#services` | Delivery areas / fees / agent regions + complaints |
| Contact · Wasiliana nasi | `#contact` | Company intro, legal contacts, payment, agent form |

Also includes a floating WhatsApp FAB (bottom-right).

## Local development

```bash
cd /workspace/tanzania-sausage   # or your clone path
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Where to edit placeholders

All business data is centralized:

### Real contacts (already filled) — `src/lib/contacts.ts`

- Company name, TIN, VRN, TEL, P.O. Box, address
- Product WhatsApp × 5
- Complaint / agent line: `+255 750 476 666`
- Lipa number + NMB bank account

### Still editable samples — same file

| Export | Purpose |
|--------|---------|
| `deliveryAreasPlaceholder` | Delivery coverage zones |
| `deliveryFeesPlaceholder` | Fee table rows |
| `agentAreasPlaceholder` | Agent region status |

### Products catalogue — `src/lib/products.ts`

English names (Chinese secondary), descriptions, Unsplash image URLs, badges, price labels.

### Agent application form — `src/components/AgentForm.tsx`

Client-side only: opens WhatsApp with a prefilled message, or a local `mailto:` draft. **No backend.**

## Design notes

- Palette: cream / ivory, AFRINOVA green `#118C3E`, warm paprika/gold accents, charcoal
- English primary UI, light Swahili (`Karibu`, `Bidhaa`, `Wasiliana nasi`); Chinese kept as secondary copy
- Header logo: `/brand/afrinova-horizontal.jpeg` · app icon: AFRINOVA star mark
- Mobile-first sticky nav: Home · Products · Services · Contact

## Deploy

Static-friendly Next.js app. Typical options:

- [Vercel](https://vercel.com) — import this GitHub repo
- Any Node host: `npm run build && npm start`

## Repository

https://github.com/flyjiji553/tanzania-sausage
