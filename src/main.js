const en = {
  'nav.step': 'Step 1',
  'nav.who': 'Who it’s for',
  'nav.road': 'Roadmap',
  'hero.eyebrow': 'Our vision',
  'hero.title': 'Companies that run themselves, 90% of the way.',
  'hero.lead': 'We combine scripts and AI to automate everyday administrative work. Fewer errors, faster closes, and a team focused on decisions.',
  'hero.cta': 'Join the pilot',
  'hero.cta2': 'How it works',
  'hero.chip1': 'Scripts + AI',
  'hero.chip2': 'Built by accountants',
  'hero.chip3': 'Mexico and Canada',
  'mission.eyebrow': 'Our mission',
  'mission.text': 'Automate day-to-day work, one task at a time, until operations run on their own.',
  'step.eyebrow': 'Step 1',
  'step.title': 'Your bank reconciliation closes itself.',
  'step.sub': 'Bank statements matched to invoices every month, with no manual data entry.',
  'step.s1t': 'You send your files',
  'step.s1p': 'Bank statements plus your invoices: issued, received and payment records (CFDI XMLs in Mexico).',
  'step.s2t': 'Scripts do the matching',
  'step.s2p': 'Amounts, dates, tax IDs, partial payments and one payment for several invoices. AI only suggests the unclear cases.',
  'step.s3t': 'You approve the exceptions',
  'step.s3p': 'You get the finished reconciliation and a risk report: missing payment records, cancelled invoices and non-deductible expenses.',
  'how.title': 'The right tool for each job.',
  'how.c1t': 'Scripts for the repetitive',
  'how.c1p': 'Rules that give the same answer every time. Fast, cheap and auditable.',
  'how.c2t': 'AI for the ambiguous',
  'how.c2p': 'Vague references, partial payments, free text. AI suggests; it never posts on its own.',
  'how.c3t': 'People to decide',
  'how.c3p': 'Your team reviews only what matters. Every repeated fix becomes a new rule.',
  'who.eyebrow': 'Who it’s for',
  'who.title': 'Built for the people who keep the numbers.',
  'who.c1t': 'Accounting firms',
  'who.c1p': 'Serve twice the clients with the same team.',
  'who.c2t': 'Companies and subsidiaries',
  'who.c2p': 'Clean, auditable tax compliance every month.',
  'who.c3t': 'Contractors in Canada',
  'who.c3p': 'Fewer bookkeeping hours, plus inventory and job-cost control.',
  'road.eyebrow': 'Roadmap',
  'road.title': 'Toward the company that runs itself.',
  'road.live': 'Pilot open',
  'road.soon': 'Coming soon',
  'road.r1': 'Bank reconciliation against invoices',
  'road.r2': 'Accounts payable and suppliers',
  'road.r3': 'Intercompany and cost plus',
  'road.r4': 'Inventory and job costing',
  'pilot.title': 'We’re looking for 3 pilot companies.',
  'pilot.p': 'Preferred terms in exchange for your feedback. We start with one month of your history and show you the result.',
  'pilot.cta': 'I want to be a pilot',
  'pilot.share': 'Share on WhatsApp',
  'footer.forming': '(in formation)',
};

const nodes = [...document.querySelectorAll('[data-i18n]')];
const es = Object.fromEntries(nodes.map((n) => [n.dataset.i18n, n.textContent]));
const meta = { es: { title: document.title }, en: { title: 'Escuadra Ops | Companies that run themselves' } };

function setLang(lang) {
  const dict = lang === 'en' ? en : es;
  nodes.forEach((n) => { if (dict[n.dataset.i18n]) n.textContent = dict[n.dataset.i18n]; });
  document.documentElement.lang = lang;
  document.title = meta[lang].title;
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('lang', lang); } catch {}
}

document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('lang'); } catch {}
const initial = saved || ((navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es');
if (initial === 'en') setLang('en');

// Hide the phone sticky CTA while the pilot section is on screen.
const sticky = document.querySelector('.sticky-cta');
const pilot = document.getElementById('piloto');
if (sticky && pilot && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => sticky.classList.toggle('is-hidden', e.isIntersecting), { threshold: 0.2 }).observe(pilot);
}
