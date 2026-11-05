# SEO: Annet Wanjiku Njiru website

Living SEO record for the site. Update it every time SEO changes: tick items off, add a line to the change log.

## How the SEO works
- **Name search:** the build writes the whole page into `dist/index.html`, so crawlers read it as plain HTML. The Questions section (`faq` in `src/content.js`) carries the phrases people search for and also feeds Google's FAQ data.
- **One file to edit:** `src/seo/site.js` holds the page title, description, keywords, social preview image, Google structured data (her roles, organisations, expertise), email, phone, social links and the Google verification code.
- **Live address:** `.env.production` (`VITE_SITE_URL`). Change it if the domain changes, then rebuild.
- **Build step:** `seo-plugin.js` runs during `npm run build`. It writes the `<head>` tags into `dist/index.html`, and creates `dist/sitemap.xml` and `dist/robots.txt`.
- **Social preview image:** `public/og-image.jpg` (1200 x 630).

## Current settings
| Item | Value |
|---|---|
| Live address | https://annetnjiru.com (hosted on Cloudflare) |
| Title | Annet Wanjiku Njiru \| CEO, Big Win Agencies & Healing Balm Founder |
| Description | Annet Wanjiku Njiru is CEO of Big Win Agencies and Founder of Healing Balm Herbal Clinic in Kenya, with 20+ years in marketing, mediation and consultancy. |
| Main search terms | Annet Wanjiku Njiru; Annet Njiru; Annet Njiru Kenya; Annet Wanjiku Njiru CEO; Annet Njiru Big Win Agencies; Annet Njiru Healing Balm; CEO of Big Win Agencies; Founder of Healing Balm Herbal Clinic; Big Win Agencies; Healing Balm Herbal Clinic; herbal clinic Kenya; alternative medicine Kenya; alternative healing consultant Kenya; energy healing Kenya; holistic wellness Kenya; indigenous medicinal plants Kenya; marketing executive Kenya; ADR mediator Kenya; business consultant Kenya |
| Structured data | Person (roles, organisations, expertise, other name forms), ProfilePage, WebSite, Organization (Healing Balm Herbal Clinic, with Annet as founder), FAQPage |
| Sitemap | /sitemap.xml (home page + portrait) |
| robots.txt | Allow all, points to sitemap |

## Done
- [x] Title, description, keywords, author, canonical link
- [x] Social previews: Open Graph and X card tags, with a 1200 x 630 image
- [x] Google structured data
- [x] sitemap.xml and robots.txt generated on every build
- [x] Live address set to annetnjiru.com
- [x] Page text in the HTML itself (prerendered at build)
- [x] Questions section with her name in the forms people search
- [x] Text fallback for crawlers without JavaScript (`<noscript>` in `index.html`)
- [x] Favicon
- [x] One `<h1>` (her name, now read with spaces between the words), `lang="en"`, alt text on the photo

## To do
- [ ] Add her email and phone to `src/seo/site.js` (and `src/content.js` for the contact section)
- [x] LinkedIn and Facebook added to `sameAs` in `src/seo/site.js` and to the Contact section
- [ ] Add Instagram and the Big Win Agencies and Healing Balm Herbal Clinic websites to `sameAs`, if they exist
- [ ] Put https://annetnjiru.com on her LinkedIn and Facebook profiles, so the links run both ways
- [ ] Add the clinic's town and address if she wants it found in local searches
- [ ] **Top priority:** Google Search Console: add the site, paste the verification code into `googleVerification`, rebuild, verify, then submit `/sitemap.xml`
- [ ] Bing Webmaster Tools: import from Search Console
- [ ] Ask Big Win Agencies, Healing Balm Herbal Clinic and her clients to link to the site
- [ ] Check the preview with the LinkedIn Post Inspector and the Facebook Sharing Debugger after each change to the image or title
- [ ] Test with Google's Rich Results Test and PageSpeed Insights once live

## Change log
- **2026-11-03:** SEO set up, including Healing Balm Herbal Clinic. Added `src/seo/site.js`, `seo-plugin.js`, `.env.production`, `public/og-image.jpg`, `<noscript>` text, favicon and robots.txt. Tested with a sample address: all tags, structured data and the sitemap generate correctly.
- **2026-11-03:** Live address set to https://annetnjiru.com.
- **2026-11-04:** Prerendered the page into the HTML, added the Questions section and FAQ data, `alternateName`, more name phrases and a fuller photo description. Her name did not appear in web search checks on this date.
- **2026-11-05:** Added her LinkedIn and Facebook to `sameAs` and the Contact section.
