# For You — a missing-you website

A two-step site:
1. An iPhone-style lock screen. Correct passcode: **1999**
2. After unlock, a romantic "missing you" page for your wife with a photo
   clothesline, a letter, and a little "send a heart" interaction.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Customize

- **Passcode**: change `CORRECT_PIN` in `app/components/LockScreen.tsx`
- **Her name / message**: edit `WIFE_NAME`, `OPENING_LINE`, `LETTER`,
  `SIGN_OFF`, `SIGNATURE` at the top of `app/components/MissingYouPage.tsx`
- **Photos**: replace the files in `public/photos/01.jpg` ... `06.jpg` with
  your own photos (keep the same filenames, or update the `photos` array in
  `MissingYouPage.tsx` if you rename them). Portrait-ish photos (4:5) look best.
- **Captions**: edit the `caption` field for each photo in the same `photos` array.

## Deploy

Easiest option is [Vercel](https://vercel.com): push this folder to a GitHub
repo and import it on vercel.com, or run `npx vercel` from this folder.
