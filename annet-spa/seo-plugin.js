// Build-time SEO for the single-page site.
//
// After `vite build` this writes the real <head> tags (title, description,
// social preview, structured data) into dist/index.html, plus sitemap.xml and
// robots.txt, so Google, WhatsApp and LinkedIn can read them without running
// JavaScript. All text comes from src/seo/site.js.
//
// It needs the live address, set in .env.production:
//   VITE_SITE_URL=https://your-domain.com
// Without it the build still works, but the canonical link, social image
// address and sitemap are skipped.

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const esc = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

export default function seoPlugin() {
  let root = ''
  let outDir = ''
  let siteUrl = ''

  return {
    name: 'awn-seo',
    apply: 'build',

    configResolved(config) {
      root = config.root
      outDir = path.resolve(config.root, config.build.outDir)
      siteUrl = String(config.env?.VITE_SITE_URL || '').replace(/\/+$/, '')
    },

    async closeBundle() {
      const indexPath = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexPath)) return

      const { SITE } = await import(`${pathToFileURL(path.resolve(root, 'src/seo/site.js')).href}?t=${Date.now()}`)
      const template = fs.readFileSync(indexPath, 'utf8')
      const block = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/
      if (!block.test(template)) {
        console.warn('[seo] index.html has no seo:start / seo:end block; skipped.')
        return
      }

      const url = siteUrl ? siteUrl + '/' : null
      const image = siteUrl ? siteUrl + SITE.image : null
      const personId = url ? url + '#person' : undefined

      const person = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        ...(personId && { '@id': personId }),
        name: SITE.name,
        jobTitle: SITE.jobTitle,
        description: SITE.description,
        ...(url && { url }),
        ...(image && { image }),
        ...(SITE.email && { email: SITE.email }),
        ...(SITE.telephone && { telephone: SITE.telephone }),
        address: { '@type': 'PostalAddress', addressCountry: SITE.country },
        worksFor: SITE.worksFor.map((o) => ({ '@type': 'Organization', name: o.name })),
        hasOccupation: SITE.worksFor.map((o) => ({ '@type': 'Occupation', name: `${o.role}, ${o.name}` })),
        knowsAbout: SITE.knowsAbout,
        ...(SITE.sameAs.length && { sameAs: SITE.sameAs }),
      }

      const tags = [
        `<title>${esc(SITE.title)}</title>`,
        `<meta name="description" content="${esc(SITE.description)}" />`,
        `<meta name="keywords" content="${esc(SITE.keywords.join(', '))}" />`,
        `<meta name="author" content="${esc(SITE.name)}" />`,
        `<meta name="robots" content="index, follow, max-image-preview:large" />`,
        `<meta name="theme-color" content="${SITE.themeColor}" />`,
        SITE.googleVerification && `<meta name="google-site-verification" content="${esc(SITE.googleVerification)}" />`,
        url && `<link rel="canonical" href="${url}" />`,
        `<meta property="og:type" content="profile" />`,
        `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
        `<meta property="og:locale" content="${SITE.locale}" />`,
        `<meta property="og:title" content="${esc(SITE.title)}" />`,
        `<meta property="og:description" content="${esc(SITE.description)}" />`,
        url && `<meta property="og:url" content="${url}" />`,
        image && `<meta property="og:image" content="${image}" />`,
        image && `<meta property="og:image:width" content="${SITE.imageWidth}" />`,
        image && `<meta property="og:image:height" content="${SITE.imageHeight}" />`,
        image && `<meta property="og:image:alt" content="${esc(SITE.imageAlt)}" />`,
        `<meta property="profile:first_name" content="${esc(SITE.name.split(' ')[0])}" />`,
        `<meta property="profile:last_name" content="${esc(SITE.name.split(' ').slice(1).join(' '))}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(SITE.title)}" />`,
        `<meta name="twitter:description" content="${esc(SITE.description)}" />`,
        image && `<meta name="twitter:image" content="${image}" />`,
        image && `<meta name="twitter:image:alt" content="${esc(SITE.imageAlt)}" />`,
        jsonLd(person),
        url &&
          jsonLd({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            name: SITE.title,
            url,
            mainEntity: { '@id': personId },
          }),
        url && jsonLd({ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url }),
        ...SITE.founded.map((name) =>
          jsonLd({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name,
            ...(personId ? { founder: { '@id': personId } } : { founder: { '@type': 'Person', name: SITE.name } }),
          }),
        ),
      ]

      fs.writeFileSync(
        indexPath,
        template.replace(block, () => `<!-- seo:start -->\n    ${tags.filter(Boolean).join('\n    ')}\n    <!-- seo:end -->`),
      )

      const robots = ['User-agent: *', 'Allow: /']
      if (siteUrl) {
        robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`)
        const today = new Date().toISOString().slice(0, 10)
        fs.writeFileSync(
          path.join(outDir, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <image:image><image:loc>${siteUrl}/images/portrait.jpg</image:loc></image:image>\n  </url>\n</urlset>\n`,
        )
      } else {
        console.warn('[seo] VITE_SITE_URL is not set: skipping sitemap.xml, canonical link and social image URL.')
      }
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots.join('\n') + '\n')
    },
  }
}
