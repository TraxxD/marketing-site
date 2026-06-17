# DS Marketing — Landing Page

A single-page marketing website built with **Vite + React + TypeScript + Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Contact Form Setup (Web3Forms)

The form uses [Web3Forms](https://web3forms.com) — free, no backend needed.

1. Go to [web3forms.com](https://web3forms.com) and enter your email
2. You'll receive an access key
3. Create a `.env` file (copy from `.env.example`):
   ```
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
4. Restart the dev server

Web3Forms handles both the notification to you and an auto-reply to the lead.

### Alternative: Resend API (serverless)

A serverless `/api/contact.ts` is included for Vercel deployment with the Resend API. To use it:

1. Set `RESEND_API_KEY` and `CONTACT_EMAIL` as environment variables in Vercel
2. Update the fetch URL in `ContactForm.tsx` from the Web3Forms URL to `/api/contact`

## Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist/` folder to Netlify
```

## Customization

- **Colors & design tokens:** `src/index.css` (Tailwind `@theme` block)
- **Content:** Edit each component in `src/components/`
- **Analytics:** Uncomment the GA snippet in `index.html` and the conversion event in `ContactForm.tsx`
- **Social links:** Uncomment and fill in the links in `Footer.tsx`
- **Images:** Replace placeholders in `Hero.tsx` and `About.tsx`
