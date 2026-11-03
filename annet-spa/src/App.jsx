import { useEffect, useState } from 'react'
import { person, roles, contact, facts, highlights, expertise, clients, healing, gallery } from './content.js'

const nav = [['profile', 'Profile'], ['highlights', 'Highlights'], ['expertise', 'Expertise'], ['clients', 'Clientele'], ['holistic-health', 'Holistic Health']]

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  useEffect(() => {
    const f = () => setSc(window.scrollY > 30)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={'hdr' + (sc ? ' sc' : '')}>
      <a href="#top" className="mono" onClick={() => setOpen(false)}>A<span>W</span>N</a>
      <nav className={open ? 'open' : ''}>
        {nav.map(([id, l]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#contact" className="pill" onClick={() => setOpen(false)}>Contact</a>
      </nav>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-l">
        <p className="kicker">{person.title}</p>
        <h1>
          <span>{person.first}</span>{' '}
          <span className="i">{person.middle}</span>{' '}
          <span>{person.last}</span>
        </h1>
        <p className="tag">{person.tagline}</p>
        <div className="cta">
          <a href="#expertise" className="btn dark">View expertise</a>
          <a href="#contact" className="btn line">Get in touch</a>
        </div>
      </div>
      <div className="hero-r">
        <img src={person.portrait} alt="Annet Wanjiku Njiru" fetchPriority="high" />
        <div className="chip"><b>CEO</b><span>Big Win Agencies</span></div>
      </div>
    </section>
  )
}

function Ticker() {
  const row = [...roles, ...roles]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">{row.concat(row).map((r, i) => <span key={i}>{r}<em>✦</em></span>)}</div>
    </div>
  )
}

function Profile() {
  return (
    <section id="profile" className="sec profile">
      <div className="pl rv">
        <p className="eyebrow">Profile</p>
        <h2>Commercial insight, built on relationships.</h2>
      </div>
      <div className="pr rv">
        <p className="big">{person.intro}</p>
        <div className="facts">
          {facts.map((f) => <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>)}
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  return (
    <section id="highlights" className="sec hl">
      <p className="eyebrow">Key career highlights</p>
      <h2 className="rv">Two decades, many sectors.</h2>
      <div className="hgrid">
        {highlights.map((h, i) => (
          <article className="hcard rv" key={h} style={{ transitionDelay: i * 90 + 'ms' }}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <p>{h}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Expertise() {
  const [a, setA] = useState(0)
  const e = expertise[a]
  return (
    <section id="expertise" className="sec ex">
      <p className="eyebrow">Professional expertise</p>
      <h2 className="rv">Five disciplines, one practice.</h2>
      <div className="exw rv">
        <ul className="tabs" role="tablist">
          {expertise.map((x, i) => (
            <li key={x.role}>
              <button role="tab" aria-selected={i === a} className={i === a ? 'on' : ''} onClick={() => setA(i)} onMouseEnter={() => setA(i)}>
                <span>{String(i + 1).padStart(2, '0')}</span>{x.role}
              </button>
            </li>
          ))}
        </ul>
        <div className="panel" key={e.role}>
          <h3>{e.role}</h3>
          <ul>{e.focus.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section id="clients" className="sec cl">
      <p className="eyebrow">Selected clientele</p>
      <h2 className="rv">Trusted by leading organisations.</h2>
      <ul className="cgrid">
        {clients.map((c, i) => <li className="rv" key={c} style={{ transitionDelay: i * 60 + 'ms' }}>{c}</li>)}
      </ul>
    </section>
  )
}

// Leaf pairs set along the stem of the botanical drawing.
const LEAF = 'M0 0C28-30 92-36 136 0C92 32 28 32 0 0Z'
const sprig = [
  [300, 690, 1.15], [282, 610, 1.12], [272, 530, 1.06], [272, 450, 0.98],
  [282, 372, 0.88], [302, 298, 0.76], [330, 232, 0.62], [364, 176, 0.46],
].flatMap(([x, y, s], i) => [
  { x, y, s, r: -38 - i * 2 },
  { x, y, s, r: 218 + i * 2 },
])

function Botanical() {
  return (
    <svg className="heal-art" viewBox="0 0 640 800" aria-hidden="true">
      <g className="sway">
        <path className="stem" d="M340 800C286 640 244 470 284 330C304 262 344 200 404 130" />
        {sprig.map((l, i) => (
          <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
            <path className="leaf" d={LEAF} />
            <path className="rib" d="M6 0H124" />
          </g>
        ))}
        <g transform="translate(404 130) rotate(-52) scale(.4)">
          <path className="leaf" d={LEAF} />
          <path className="rib" d="M6 0H124" />
        </g>
      </g>
    </svg>
  )
}

function Rich({ text }) {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

function Healing() {
  return (
    <section id="holistic-health" className="heal" aria-labelledby="heal-title">
      {healing.image
        ? <div className="heal-bg" style={{ backgroundImage: `url(${healing.image})` }} aria-hidden="true" />
        : <Botanical />}
      <div className="heal-in">
        <p className="eyebrow rv">{healing.eyebrow}</p>
        <h2 id="heal-title" className="heal-name rv">{healing.clinic}</h2>
        <p className="heal-sub rv">{healing.title}</p>
        {healing.body.map((p) => <p className="heal-tx rv" key={p}><Rich text={p} /></p>)}
      </div>
    </section>
  )
}

function Gallery() {
  if (!gallery.length) return null
  return (
    <section className="sec gal">
      <p className="eyebrow">Gallery</p>
      <div className="ggrid">{gallery.map((g) => <figure key={g.src}><img src={g.src} alt={g.caption || ''} loading="lazy" />{g.caption && <figcaption>{g.caption}</figcaption>}</figure>)}</div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const links = [['Email', contact.email && 'mailto:' + contact.email, contact.email], ['Phone', contact.phone && 'tel:' + contact.phone.replace(/\s/g, ''), contact.phone], ['LinkedIn', contact.linkedin, 'LinkedIn'], ['Instagram', contact.instagram, 'Instagram'], ['Facebook', contact.facebook, 'Facebook']].filter((l) => l[1])
  async function submit(ev) {
    ev.preventDefault()
    const d = new FormData(ev.target)
    if (contact.formspree) {
      await fetch('https://formspree.io/f/' + contact.formspree, { method: 'POST', body: d, headers: { Accept: 'application/json' } })
      setSent(true)
    } else if (contact.email) {
      location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Enquiry from ' + d.get('name'))}&body=${encodeURIComponent(d.get('message') + '\n\n' + d.get('name') + ' (' + d.get('email') + ')')}`
    } else setSent(true)
  }
  return (
    <section id="contact" className="sec ct">
      <div className="cl-l rv">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something valuable.</h2>
        <p>Consultancy, mediation, partnership and speaking enquiries are welcome.</p>
        <ul>
          {contact.location && <li><span>Based in</span>{contact.location}</li>}
          {links.map(([l, h, t]) => <li key={l}><span>{l}</span><a href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{t}</a></li>)}
        </ul>
      </div>
      <form className="rv" onSubmit={submit}>
        {sent ? <p className="ok">Thank you. Your message has been received.</p> : (<>
          <label>Name<input name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn amber" type="submit">Send message</button>
        </>)}
      </form>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main><Hero /><Ticker /><Profile /><Highlights /><Expertise /><Clients /><Healing /><Gallery /><Contact /></main>
      <footer className="ft"><span>© {new Date().getFullYear()} Annet Wanjiku Njiru</span><span>Built by SpenceTecH &amp; Logistics Ltd</span></footer>
    </>
  )
}
