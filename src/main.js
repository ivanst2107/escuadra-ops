import { ja } from './ja.js';

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
  'demo.title': 'Reconciliation · October',
  'demo.meta': 'BBVA ···4821 · 312 movements',
  'demo.rule': 'Rule',
  'demo.ai': 'AI suggests',
  'demo.norep': 'Missing REP',
  'demo.flag': 'Review',
  'demo.foot': 'Illustrative example · sample data',
  'demo.replay': 'Replay',
  'how.eyebrow': 'How it works',
  'goals.g1': 'of operations automated',
  'goals.g2': 'of review per company each month',
  'goals.g3': 'manual data entry',
  'goals.note': 'Our goals, not promises: we measure every pilot against them.',
  'founder.q': '“At my job I automated almost all my tasks: reconciliations, reclasses, intercompany. If a large company can run like that, a small one can too.”',
  'founder.role': 'Founder · Accountant with experience in Mexico and Canada',
  'faq.eyebrow': 'Questions',
  'faq.title': 'What people ask us most.',
  'faq.q1': 'Do I have to change my accounting system?',
  'faq.a1': 'No. We work from your bank statements and invoice files, and give you a file ready to import into your system.',
  'faq.q2': 'What if the AI gets it wrong?',
  'faq.a2': 'AI only suggests. Nothing counts as reconciled without a proven rule or your approval.',
  'faq.q3': 'Is my data safe?',
  'faq.a3': 'We ask only for read access, never your tax signing credentials. Files are stored encrypted and deleted on the schedule we agree.',
  'faq.q4': 'How much does it cost?',
  'faq.a4': 'A monthly fee based on your transaction volume. Pilot companies get preferred terms.',
  'footer.forming': '(in formation)',
};

const nodes = [...document.querySelectorAll('[data-i18n]')];
const es = Object.fromEntries(nodes.map((n) => [n.dataset.i18n, n.textContent]));
const meta = { es: { title: document.title }, en: { title: 'Escuadra Ops | Companies that run themselves' }, ja: { title: 'Escuadra Ops | ひとりでに回る会社へ' } };

function setLang(lang) {
  const dict = { en, ja, es }[lang] || es;
  nodes.forEach((n) => { if (dict[n.dataset.i18n]) n.textContent = dict[n.dataset.i18n]; });
  document.documentElement.lang = lang;
  document.title = meta[lang].title;
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('lang', lang); } catch {}
}

document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('lang'); } catch {}
const nav = (navigator.language || 'es').toLowerCase();
const initial = saved || (nav.startsWith('ja') ? 'ja' : nav.startsWith('en') ? 'en' : 'es');
if (initial !== 'es') setLang(initial);

// Hide the phone sticky CTA while the pilot section is on screen.
const sticky = document.querySelector('.sticky-cta');
const pilot = document.getElementById('piloto');
if (sticky && pilot && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => sticky.classList.toggle('is-hidden', e.isIntersecting), { threshold: 0.2 }).observe(pilot);
}

// Scroll reveal
const revealTargets = document.querySelectorAll('[data-reveal], .steps li, .cards .card, .road__item, .section > h2');
revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-in'));
}

// Hero demo: plays when the card scrolls into view, replays on re-entry or tap.
const rows = [...document.querySelectorAll('.demo .row')];
const pct = document.getElementById('pct');
const bar = document.getElementById('bar');
const demo = document.querySelector('.demo');
const steps = [24, 47, 71, 86, 92];
let timers = [];
function reset() {
  timers.forEach(clearTimeout); timers = [];
  rows.forEach((r) => r.classList.remove('is-on'));
  pct.textContent = '0'; bar.style.width = '0';
}
function showRow(i) {
  rows[i].classList.add('is-on');
  const from = i ? steps[i - 1] : 0, to = steps[i];
  bar.style.width = to + '%';
  if (reduce) { pct.textContent = to; return; }
  const t0 = performance.now();
  const tick = (t) => {
    const k = Math.min(1, (t - t0) / 500);
    pct.textContent = Math.round(from + (to - from) * k);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function play() {
  reset();
  if (reduce) { rows.forEach((_, i) => showRow(i)); return; }
  rows.forEach((_, i) => timers.push(setTimeout(() => showRow(i), 400 + i * 700)));
}
if (rows.length && pct && bar && demo) {
  document.getElementById('replay')?.addEventListener('click', play);
  if ('IntersectionObserver' in window) {
    let visible = false;
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !visible) { visible = true; play(); }
      else if (!e.isIntersecting && visible) { visible = false; reset(); }
    }, { threshold: 0.45 }).observe(demo);
  } else play();
}
