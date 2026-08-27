/* Generates multi-page demo sites for design-1 and design-2.
   Each design gets: index (home), album, jobs, location, contact.
   Shared header/footer come from the home page markup. */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, c) => fs.writeFileSync(path.join(ROOT, p), '\uFEFF' + c, 'utf8');

/* ---------- shared page content (both designs) ---------- */
const GALLERY_IMAGES = [
  'IMG_5443.JPG','IMG_5445.JPG','IMG_5447.JPG','IMG_5450.JPG','IMG_5451.JPG',
  'IMG_5455.JPG','IMG_5456.JPG','IMG_5457.JPG','IMG_5471.JPG','IMG_5474.JPG',
  'IMG_5489.JPG','IMG_5490.JPG','IMG_5550.JPG','IMG_5551.JPG','IMG_5553.JPG',
  'IMG_5555.JPG','IMG_5560.JPG','IMG_5510.JPG','IMG_5516.JPG','IMG_5535.JPG'
];
const albumGrid = (files, title) =>
  `<h3 class="subpage-title">${title}</h3>` +
  '<div class="subpage-grid">' +
  files.map(f => `<figure class="subpage-item"><img src="../assets/gallery/${f}" alt="" loading="lazy"></figure>`).join('') +
  '</div>';

const PAGE_ALBUM = `
<div class="subpage-head"><h1>Ø£Ù„Ø¨ÙˆÙ… Ø§Ù„ØµÙˆØ±</h1><p>Ù„Ù‚Ø·Ø§Øª Ù…Ù† Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø¹Ù‡Ø¯ ÙˆØ§Ù„Ù…Ø¹Ø§Ù…Ù„ ÙˆØ§Ù„Ø£Ù†Ø´Ø·Ø© Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ©</p></div>
${albumGrid(GALLERY_IMAGES.slice(0, 12), 'Ø£Ù„Ø¨ÙˆÙ… Ø§Ù„ØµÙˆØ± Ø§Ù„Ø£ÙˆÙ„')}
${albumGrid(GALLERY_IMAGES.slice(12, 17), 'Ø£Ù„Ø¨ÙˆÙ… Ø§Ù„ØµÙˆØ± Ø§Ù„Ø«Ø§Ù†ÙŠ')}
${albumGrid(GALLERY_IMAGES.slice(17, 20), 'Ø£Ù„Ø¨ÙˆÙ… Ø§Ù„ØµÙˆØ± Ø§Ù„Ø«Ø§Ù„Ø«')}
`;

const PAGE_JOBS = `
<div class="subpage-head"><h1>ÙˆØ¸Ø§Ø¦Ù Ø®Ø§Ù„ÙŠØ©</h1><p>Ø£Ø¹Ù„Ù† Ø§Ù„Ù…Ø¹Ù‡Ø¯ Ø¹Ù† Ø§Ù„ÙˆØ¸Ø§Ø¦Ù Ø§Ù„Ø´Ø§ØºØ±Ø© Ø§Ù„ØªØ§Ù„ÙŠØ© â€” Ù„Ù„ØªÙØ§ØµÙŠÙ„ ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©</p></div>
<div class="subpage-grid">
  <figure class="subpage-item"><img src="../assets/jobs/announcement.png" alt="Ø¥Ø¹Ù„Ø§Ù† ÙˆØ¸Ø§Ø¦Ù" loading="lazy"></figure>
  <figure class="subpage-item"><img src="../assets/jobs/announcement-2.png" alt="Ø¥Ø¹Ù„Ø§Ù† ÙˆØ¸Ø§Ø¦Ù 2" loading="lazy"></figure>
</div>
<p style="color:var(--muted);text-align:center;margin-top:28px">Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„Ø´Ø±ÙˆØ· ÙˆØ§Ù„ØªÙØ§ØµÙŠÙ„ Ø§Ù„ÙƒØ§Ù…Ù„Ø© ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø¹Ù‡Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø±Ù‚Ø§Ù… Ø§Ù„ØªØ§Ù„ÙŠØ©: <b>01068376154</b> / <b>01064234560</b></p>
`;

const MAP_QUERY = 'https://www.google.com/maps?q=%D9%83%D9%8036+%D8%B7%D8%B1%D9%8A%D9%82+%D9%85%D8%B5%D8%B1+%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B5%D8%AD%D8%B1%D8%A7%D9%88%D9%89+%D9%82%D8%B1%D9%8A%D8%A9+%D8%B9%D8%B3%D8%A7%D9%83%D8%B1+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9';

const PAGE_LOCATION = `
<div class="subpage-head"><h1>ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§</h1><p>Ø§Ù…Ø³Ø­ Ø§Ù„ÙƒÙˆØ¯ Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¹Ù„Ù‰ Ø§Ù„Ø®Ø±ÙŠØ·Ø©</p></div>
<div class="loc-wrap">
  <div class="loc-map">
    <iframe src="${MAP_QUERY}&output=embed" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy"></iframe>
  </div>
  <div class="loc-side">
    <img class="loc-qr" src="../assets/qr.png" alt="QR Code Ù„Ù„Ù…ÙˆÙ‚Ø¹">
    <p><b>Ø§Ù…Ø³Ø­ Ø§Ù„ÙƒÙˆØ¯ Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¹Ù„Ù‰ Ø§Ù„Ø®Ø±ÙŠØ·Ø©</b></p>
    <p>ÙƒÙ£Ù¦ Ø·Ø±ÙŠÙ‚ Ù…ØµØ± Ø§Ù„Ø¥Ø³Ù…Ø§Ø¹ÙŠÙ„ÙŠØ© Ø§Ù„ØµØ­Ø±Ø§ÙˆÙ‰ â€“ Ù‚Ø±ÙŠØ© Ø¹Ø³Ø§ÙƒØ± â€“ Ø£Ù…Ø§Ù… Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„Ø´Ø±ÙˆÙ‚ â€“ Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©</p>
    <a class="btn btn-red" href="${MAP_QUERY}" target="_blank" rel="noopener">ÙØªØ­ ÙÙŠ Ø®Ø±Ø§Ø¦Ø· Ø¬ÙˆØ¬Ù„ â†</a>
  </div>
</div>
`;

const FOOTER_QR = `
  <div class="foot-qr">
    <div class="foot-qr__card">
      <img class="foot-qr__img" src="../assets/qr.png" alt="QR Code للموقع">
      <div class="foot-qr__info">
        <p class="foot-qr__text"><b>امسح الكود لمعرفة الموقع على الخريطة</b></p>
        <p class="foot-qr__addr">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
        <a class="foot-qr__btn" href="${MAP_QUERY}" target="_blank" rel="noopener">فتح في خرائط جوجل ←</a>
      </div>
    </div>
  </div>`;

const PAGE_CONTACT = `
<div class="subpage-head"><h1>ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§</h1><p>Ø³ÙˆØ§Ø¡ ÙƒØ§Ù† Ù„Ø¯ÙŠÙƒ Ø§Ø³ØªÙØ³Ø§Ø± Ø£Ùˆ ØªØ¹Ù„ÙŠÙ‚ Ø£Ùˆ ØªØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©ØŒ ÙÙ†Ø­Ù† Ù‡Ù†Ø§ Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ â€” Ù†Ø­Ù† Ù†Ù‚Ø¯Ø± Ø£ÙÙƒØ§Ø±Ùƒ ÙˆÙ†ØªØ·Ù„Ø¹ Ø¥Ù„Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹Ùƒ.</p></div>
<div class="contact-wrap">
  <form class="contact-form" onsubmit="return false">
    <label>Ø§Ù„Ø§Ø³Ù… <input type="text" placeholder="Ø§ÙƒØªØ¨ Ø§Ø³Ù…Ùƒ Ù‡Ù†Ø§" required></label>
    <label>Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†Ù‰ <input type="email" placeholder="example@mail.com" required></label>
    <label>Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø±Ø³Ø§Ù„Ø© <textarea rows="5" placeholder="Ø§ÙƒØªØ¨ Ø±Ø³Ø§Ù„ØªÙƒ Ù‡Ù†Ø§" required></textarea></label>
    <button class="btn btn-red" type="submit">Ø¥Ø±Ø³Ø§Ù„</button>
  </form>
  <div class="contact-info">
    <h3>Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙˆØ§ØµÙ„</h3>
    <p>ÙƒÙ£Ù¦ Ø·Ø±ÙŠÙ‚ Ù…ØµØ± Ø§Ù„Ø¥Ø³Ù…Ø§Ø¹ÙŠÙ„ÙŠØ© Ø§Ù„ØµØ­Ø±Ø§ÙˆÙ‰ â€“ Ù‚Ø±ÙŠØ© Ø¹Ø³Ø§ÙƒØ± â€“ Ø£Ù…Ø§Ù… Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„Ø´Ø±ÙˆÙ‚ â€“ Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©</p>
    <p><a href="tel:01068376154">ðŸ“ž 01068376154</a></p>
    <p><a href="tel:01064234560">ðŸ“ž 01064234560</a></p>
    <p><a href="tel:01110229695">ðŸ“ž 01110229695</a></p>
    <p><a href="mailto:Info@HighTech-AHS.edu.eg">âœ‰ Info@HighTech-AHS.edu.eg</a></p>
  </div>
</div>
${FOOTER_QR}
`;

/* ---------- nav builders ---------- */
/* active: 'index'|'about'|'departments'|'study'|'album'|'jobs'|'location'|'contact'|'results' */
/* mode: 'home' => plain #anchors (scroll-spy), 'sub' => index.html#anchors */

const NAV_KEYS = ['index','about','study','departments','album','jobs','portal','contact'];
const NAV_LABELS = {
  index: 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©', about: 'Ø¹Ù† Ø§Ù„Ù…Ø¹Ù‡Ø¯', study: 'Ø§Ù„Ø¯Ø±Ø§Ø³Ø© Ø¨Ø§Ù„Ù…Ø¹Ù‡Ø¯', departments: 'Ø£Ù‚Ø³Ø§Ù… Ø§Ù„Ù…Ø¹Ù‡Ø¯',
  album: 'Ø£Ù„Ø¨ÙˆÙ… Ø§Ù„ØµÙˆØ±', jobs: 'ÙˆØ¸Ø§Ø¦Ù Ø®Ø§Ù„ÙŠØ©', portal: 'Ø¨ÙˆØ§Ø¨Ø© Ø§Ù„Ø·Ø§Ù„Ø¨', contact: 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§'
};
const PORTAL_URL = 'https://htiahs.pythonanywhere.com';

function navHref(key, mode) {
  if (key === 'index') return mode === 'home' ? '#home' : 'index.html';
  if (key === 'portal') return PORTAL_URL;
  if (key === 'album' || key === 'jobs' || key === 'contact' || key === 'about' || key === 'study' || key === 'departments') return key + '.html';
  return mode === 'home' ? '#' + key : 'index.html#' + key;
}

function makeNav1(active, mode) {
  let items = '';
  NAV_KEYS.forEach(k => {
    const cls = k === active ? ' class="active"' : '';
    const ext = k === 'portal' ? ' target="_blank" rel="noopener"' : '';
    items += `        <li><a href="${navHref(k, mode)}"${cls}${ext}>${NAV_LABELS[k]}</a></li>\n`;
  });
  return `<nav>\n      <ul>\n${items}      </ul>\n    </nav>`;
}

function makeNav2(active, mode) {
  let items = '';
  NAV_KEYS.forEach((k, i) => {
    const cls = k === active ? ' class="active"' : '';
    items += `    <a href="${navHref(k, mode)}"${cls}><span>${NAV_LABELS[k]}</span><em>0${i + 1}</em></a>\n`;
  });
  return `<nav>\n${items}  </nav>`;
}

/* ---------- design 1 (classic) ---------- */
const d1Css = read('design-1/assets/main.css');
const extraCss1 = `
/* subpages */
.subpage-head{background:var(--navy);color:#fff;padding:56px 0 48px;text-align:center;margin-bottom:44px}
.subpage-head h1{color:#fff;font-size:2rem}
.subpage-head p{color:rgba(255,255,255,.8);max-width:640px;margin:8px auto 0}
.subpage-title{font-size:1.25rem;color:var(--navy);margin:34px 0 16px;border-right:4px solid var(--gold);padding-right:14px}
.subpage-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}
.subpage-item{margin:0;border-radius:10px;overflow:hidden;box-shadow:var(--shadow)}
.subpage-item img{width:100%;aspect-ratio:4/3;object-fit:cover;transition:.4s}
.subpage-item:hover img{transform:scale(1.05)}
.loc-wrap{display:grid;grid-template-columns:1.6fr 1fr;gap:28px;align-items:start}
.loc-map{aspect-ratio:4/3;border-radius:14px;overflow:hidden;box-shadow:var(--shadow);border:4px solid var(--gold)}
.loc-side{background:#fff;border-radius:14px;padding:26px;box-shadow:var(--shadow);text-align:center}
.loc-qr{width:170px;margin:0 auto 12px;border-radius:8px}
.contact-wrap{display:grid;grid-template-columns:1.4fr 1fr;gap:28px;align-items:start}
.contact-form{background:#fff;border-radius:14px;padding:28px;box-shadow:var(--shadow);display:grid;gap:14px}
.contact-form label{font-weight:700;color:var(--ink);display:grid;gap:6px}
.contact-form input,.contact-form textarea{padding:12px 14px;border:1px solid var(--line);border-radius:8px;font-family:inherit;font-size:15px}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--gold)}
.contact-info{background:#fff;border-radius:14px;padding:26px;box-shadow:var(--shadow)}
.contact-info h3{color:var(--navy);margin-bottom:14px}
.contact-info p{color:var(--muted);margin-bottom:8px}
.foot-qr{background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.1);padding:22px 0}
.foot-qr__card{display:flex;align-items:center;gap:20px;justify-content:center;max-width:640px;margin:0 auto;text-align:right}
.foot-qr__img{width:100px;border-radius:10px;background:#fff;padding:6px;flex-shrink:0}
.foot-qr__text{font-size:.95rem;color:#fff;margin-bottom:2px}
.foot-qr__addr{font-size:.8rem;color:rgba(255,255,255,.65);margin-bottom:6px}
.foot-qr__btn{display:inline-block;color:var(--gold-light);font-weight:700;font-size:.85rem;border:1px solid rgba(255,255,255,.2);padding:5px 16px;border-radius:8px;transition:.2s}
.foot-qr__btn:hover{background:rgba(255,255,255,.12);color:#fff}
@media(max-width:640px){.foot-qr__card{flex-direction:column;text-align:center}}
@media(max-width:900px){.subpage-grid{grid-template-columns:repeat(2,1fr)}.loc-wrap,.contact-wrap{grid-template-columns:1fr}}
@media(max-width:640px){.subpage-grid{grid-template-columns:1fr}}
`;

/* ---------- design 1 (classic) ---------- */
/* Source of truth: the generated home page (complete). If missing, error clearly. */
const d1Home = read('design-1/index.html');
const d1FooterStart = d1Home.indexOf('<footer class="footer">');
const d1Footer = d1Home.slice(d1FooterStart, d1Home.indexOf('<script>') >= 0 ? d1Home.indexOf('<script>') : d1Home.indexOf('</body>'));
const d1FooterWithQR = d1Footer.includes('foot-qr') ? d1Footer : d1Footer.replace('</div>\n  </div>\n  <div class="bottom">', '</div>\n' + FOOTER_QR + '\n  </div>\n  <div class="bottom">');
const d1Script = '<script src="assets/main.js"></script>';

const injectSpy = (html, spy) => html.includes('spyLinks') ? html : html.replace('</script>\n</body>', spy + '\n</script>\n</body>');

const fixAssetPaths = (html) => html.replace(/(href|src)="(?!\.\.\/)assets\//g, '$1="../assets/');

/* Scroll-spy: highlight nav link of the section currently in view (home pages) */
const SCROLL_SPY_D1 = `
var spyLinks=document.querySelectorAll('.header nav a[href^="#"]');
window.addEventListener('scroll',function(){
  var y=window.scrollY+140,cur='home';
  document.querySelectorAll('section[id]').forEach(function(s){if(s.offsetTop<=y)cur=s.id;});
  spyLinks.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+cur);});
});`;

const SCROLL_SPY_D2 = `
var spyLinks=document.querySelectorAll('.sidenav nav a[href^="#"]');
window.addEventListener('scroll',function(){
  var y=window.scrollY+140,cur='home';
  document.querySelectorAll('section[id]').forEach(function(s){if(s.offsetTop<=y)cur=s.id;});
  spyLinks.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+cur);});
});`;

/* Rewrite d1 home: swap nav, fix assets, point buttons to internal pages */
const d1HomeNew = d1Home
  .replace(d1Home.slice(d1Home.indexOf('<nav>'), d1Home.indexOf('</nav>') + 6), makeNav1('index', 'home'))
  .replace(/href="assets\//g, 'href="../assets/')
  .replace(/src="assets\//g, 'src="../assets/')
  .replace(/href="https:\/\/hightech-ahs\.edu\.eg\/%d8%a3%d9%84%d8%a8%d9%88%d9%85-%d8%a7%d9%84%d8%b5%d9%88%d8%b1\/"[^>]*>/g, 'href="album.html">')
  .replace(/href="https:\/\/hightech-ahs\.edu\.eg\/%d9%88%d8%b8%d8%a7%d8%a6%d9%81-%d8%ae%d8%a7%d9%84%d9%8a%d8%a9\/"[^>]*>/g, 'href="jobs.html">')
  .replace(/href="https:\/\/hightech-ahs\.edu\.eg\/%d8%a7%d9%84%d9%86%d8%aa%d9%8a%d8%ac%d8%a9\/"[^>]*>/g, 'href="https://htiahs.pythonanywhere.com" target="_blank" rel="noopener">')
  .replace(/href="https:\/\/hightech-ahs\.edu\.eg\/%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%b9%d9%86%d8%a7\/"[^>]*>/g, 'href="#contact">')
  .replace(/href="https:\/\/hightech-ahs\.edu\.eg\/%d8%a3%d9%82%d8%b3%d8%a7%d9%85-%d8%a7%d9%84%d9%85%d8%b9%d9%87%d8%af\/"[^>]*>/g, 'href="#departments">')
  .replace(/target="_blank" rel="noopener"/g, '')
  .replace(/href="index\.html#/g, 'href="#')
  .replace(/<a class="more" href="#departments">/g, '<a class="more" href="departments.html">')
  .replace(/href="#results"[^>]*>/g, 'href="https://htiahs.pythonanywhere.com" target="_blank" rel="noopener">');

fs.mkdirSync(path.join(ROOT, 'design-1'), { recursive: true });
const d1HomeFinal = d1HomeNew.includes('foot-qr') ? d1HomeNew : d1HomeNew.replace('</div>\n  </div>\n  <div class="bottom">', '</div>\n' + FOOTER_QR + '\n  </div>\n  <div class="bottom">');
write('design-1/index.html', injectSpy(d1HomeFinal, SCROLL_SPY_D1));

const d1Head = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${'%TITLE%'} | Ø§Ù„Ù…Ø¹Ù‡Ø¯ Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆÚ†Ù‰ Ø§Ù„Ø¹Ø§Ù„Ù‰ Ù„Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„ØµØ­ÙŠØ© Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ÙŠØ©</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
${d1Css}
${extraCss1}
</style>
</head>`;

const d1HeaderBase = d1Home.slice(0, d1Home.indexOf('</header>') + 9);

const d1Body = (title, active, content) => `<body>

${d1HeaderBase
  .replace(d1Home.slice(d1Home.indexOf('<nav>'), d1Home.indexOf('</nav>') + 6), makeNav1(active, 'sub'))
  .replace(/href="assets\//g, 'href="../assets/')
  .replace(/src="assets\//g, 'src="../assets/')
  .replace(/href="#contact">/g, 'href="contact.html">')}

<main class="section" style="padding-top:20px">
  <div class="container">${content}</div>
</main>

${fixAssetPaths(d1FooterWithQR)}

${d1Script}
</body>
</html>`;

write('design-1/album.html', d1Head.replace('%TITLE%', 'Ø£Ù„Ø¨ÙˆÙ… Ø§Ù„ØµÙˆØ±') + d1Body('Ø£Ù„Ø¨ÙˆÙ… Ø§Ù„ØµÙˆØ±', 'album', PAGE_ALBUM));
write('design-1/jobs.html', d1Head.replace('%TITLE%', 'ÙˆØ¸Ø§Ø¦Ù Ø®Ø§Ù„ÙŠØ©') + d1Body('ÙˆØ¸Ø§Ø¦Ù Ø®Ø§Ù„ÙŠØ©', 'jobs', PAGE_JOBS));
write('design-1/contact.html', d1Head.replace('%TITLE%', 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§') + d1Body('ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§', 'contact', PAGE_CONTACT));

