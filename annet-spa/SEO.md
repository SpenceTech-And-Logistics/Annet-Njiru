# SEO: Annet Wanjiku Njiru website

Living SEO record for the site. Update it every time SEO changes: tick items off, add a line to the change log.

## How the SEO works
- **One file to edit:** `src/seo/site.js` holds the page title, description, keywords, social preview image, Google structured data (her roles, organisations, expertise), email, phone, social links and the Google verification code.
- **Live address:** `.env.production` (`VITE_SITE_URL`). Set it, then rebuild.
- **Build step:** `seo-plugin.js` runs during `npm run build`. It writes the `<head>` tags into `dist/index.html`, and creates `dist/robots.txt` and, once the address is set, `dist/sitemap.xml`.
- **Social preview image:** `public/og-image.jpg` (1200 x 630).

## Current settings
| Item | Value |
|---|---|
| Live address | Not set yet |
| Title | Annet Wanjiku Njiru \| CEO, Big Win Agencies & Healing Balm Founder |
| Description | Annet Wanjiku Njiru is CEO of Big Win Agencies and Founder of Healing Balm Herbal Clinic in Kenya, with 20+ years in marketing, mediation and consultancy. |
| Main search terms | Annet Wanjiku Njiru; Annet Njiru; Big Win Agencies; Healing Balm Herbal Clinic; herbal clinic Kenya; alternative medicine Kenya; holistic wellness Kenya; indigenous medicinal plants Kenya; marketing executive Kenya; ADR mediator Kenya; business consultant Kenya |
| Structured data | Person (roles, organisations, expertise), ProfilePage, WebSite, Organization (Healing Balm Herbal Clinic, with Annet as founder) |
| Sitemap | /sitemap.xml (home page + portrait), generated once the live address is set |
| robots.txt | Allow all; points to the sitemap once the live address is set |

## Done
- [x] Title, description, keywords, author
- [x] Social previews: Open Graph and X card tags, with a 1200 x 630 image
- [x] Google structured data
- [x] Text fallback for crawlers without JavaScript (`<noscript>` in `index.html`)
- [x] Favicon
- [x] One `<h1>` (her name, now read with spaces between the words), `lang="en"`, alt text on the photo

## To do
- [ ] Set `VITE_SITE_URL` in `.env.production` and rebuild. This turns on the canonical link, social image address, ProfilePage, WebSite and sitemap. Social previews will not show the image until this is done.
- [ ] Add her email and phone to `src/seo/site.js` (and `src/content.js` for the contact section)
- [ ] Add her profile links to `sameAs` in `src/seo/site.js` (LinkedIn, Instagram, Facebook, Big Win Agencies, Healing Balm Herbal Clinic)
- [ ] Add the clinic's town and address if she wants it found in local searches
- [ ] Google Search Console: add the site, paste the verification code into `googleVerification`, rebuild, verify, then submit `/sitemap.xml`
- [ ] Bing Webmaster Tools: import from Search Console
- [ ] Ask Big Win Agencies, Healing Balm Herbal Clinic and her clients to link to the site
- [ ] Check the preview with the LinkedIn Post Inspector and the Facebook Sharing Debugger after each change to the image or title
- [ ] Test with Google's Rich Results Test and PageSpeed Insights once live

## Change log
- **2026-11-03:** SEO set up, including Healing Balm Herbal Clinic. Added `src/seo/site.js`, `seo-plugin.js`, `.env.production`, `public/og-image.jpg`, `<noscript>` text, favicon and robots.txt. Tested with a sample address: all tags, structured data and the sitemap generate correctly.
