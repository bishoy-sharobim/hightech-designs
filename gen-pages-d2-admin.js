/* Generates design-2 (admin portal style) subpages: album, jobs, location, contact.
   Source: design-2-admin-source.html (the complete admin-styled home page). */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, c) => fs.writeFileSync(path.join(ROOT, p), '\uFEFF' + c, 'utf8');

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

const MAP_QUERY = 'https://www.google.com/maps?q=%D9%83%D9%8036+%D8%B7%D8%B1%D9%8A%D9%82+%D9%85%D8%B5%D8%B1+%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B5%D8%AD%D8%B1%D8%A7%D9%88%D9%89+%D9%82%D8%B1%D9%8A%D8%A9+%D8%B9%D8%B3%D8%A7%D9%83%D8%B1+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9';

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

const CONTENT = {
  album: `
<div class="subpage-head"><h1>ألبوم الصور</h1><p>لقطات من داخل المعهد والمعامل والأنشطة التعليمية</p></div>
${albumGrid(GALLERY_IMAGES.slice(0, 12), 'ألبوم الصور الأول')}
${albumGrid(GALLERY_IMAGES.slice(12, 17), 'ألبوم الصور الثاني')}
${albumGrid(GALLERY_IMAGES.slice(17, 20), 'ألبوم الصور الثالث')}
`,
  jobs: `
<div class="subpage-head"><h1>وظائف خالية</h1><p>أعلن المعهد عن الوظائف الشاغرة التالية — للتفاصيل يرجى التواصل مع الإدارة</p></div>
<div class="subpage-grid">
  <figure class="subpage-item"><img src="../assets/jobs/announcement.png" alt="إعلان وظائف" loading="lazy"></figure>
  <figure class="subpage-item"><img src="../assets/jobs/announcement-2.png" alt="إعلان وظائف 2" loading="lazy"></figure>
</div>
<p style="color:var(--ink-muted);text-align:center;margin-top:28px">لمعرفة الشروط والتفاصيل الكاملة يرجى التواصل مع إدارة المعهد على الأرقام التالية: <b>01068376154</b> / <b>01064234560</b></p>
`,
  contact: `
<div class="subpage-head"><h1>تواصل معنا</h1><p>سواء كان لديك استفسار أو تعليق أو تحتاج إلى المساعدة، فنحن هنا لمساعدتك — نحن نقدر أفكارك ونتطلع إلى التواصل معك.</p></div>
<div class="contact-wrap">
  <form class="contact-form" onsubmit="return false">
    <label>الاسم <input type="text" placeholder="اكتب اسمك هنا" required></label>
    <label>البريد الإلكترونى <input type="email" placeholder="example@mail.com" required></label>
    <label>محتوى الرسالة <textarea rows="5" placeholder="اكتب رسالتك هنا" required></textarea></label>
    <button class="btn-primary" type="submit" style="width:auto">إرسال</button>
  </form>
  <div class="contact-info">
    <h3>معلومات التواصل</h3>
    <p>ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
    <p><a href="tel:01068376154">📞 01068376154</a></p>
    <p><a href="tel:01064234560">📞 01064234560</a></p>
    <p><a href="tel:01110229695">📞 01110229695</a></p>
    <p><a href="mailto:Info@HighTech-AHS.edu.eg">✉ Info@HighTech-AHS.edu.eg</a></p>
  </div>
</div>
<div class="loc-wrap">
  <div class="loc-map"><iframe src="${MAP_QUERY}&output=embed" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy"></iframe></div>
  <div class="loc-side">
    <img class="loc-qr" src="../assets/qr.png" alt="QR Code للموقع">
    <p><b>امسح الكود لمعرفة الموقع على الخريطة</b></p>
    <p style="color:var(--ink-muted)">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
    <a class="btn-primary" href="${MAP_QUERY}" target="_blank" rel="noopener">فتح في خرائط جوجل ←</a>
  </div>
</div>
${FOOTER_QR}
`
};

const home = read('design-2-admin-source.html');

const css = home.match(/<style>([\s\S]*?)<\/style>/)[1];

/* Extract sidenav + topbar + footer */
const sidenav = home.slice(home.indexOf('<aside class="sidenav">'), home.indexOf('</aside>') + 8);
const topbar = home.slice(home.indexOf('<header class="topbar">'), home.indexOf('</header>') + 9);
const footer = home.slice(home.indexOf('<footer class="footer">'), home.indexOf('</footer>') + 9);
const wa = home.slice(home.indexOf('<a class="wa"'), home.indexOf('</a>') + 4);

const NAV_KEYS = ['index','about','study','departments','album','jobs','portal','contact'];
const NAV_ICONS = {
  index: '🏠', about: '🏛️', study: '📚', departments: '🎓',
  album: '📷', jobs: '💼', portal: '🖥️', contact: '✉️'
};
const NAV_LABELS = {
  index: 'الرئيسية', about: 'عن المعهد', study: 'الدراسة بالمعهد', departments: 'أقسام المعهد',
  album: 'ألبوم الصور', jobs: 'وظائف خالية', portal: 'بوابة الطالب', contact: 'تواصل معنا'
};
const PORTAL_URL = 'https://htiahs.pythonanywhere.com';

function navHref(key, mode) {
  if (key === 'index') return mode === 'home' ? '#home' : 'index.html';
  if (key === 'portal') return PORTAL_URL;
  if (['album','jobs','contact','about','study','departments'].includes(key)) return key + '.html';
  return mode === 'home' ? '#' + key : 'index.html#' + key;
}

function makeNav(active, mode) {
  let items = '';
  NAV_KEYS.forEach((k, i) => {
    const cls = k === active ? ' class="active"' : '';
    const num = String(i + 1).padStart(2, '0');
    const ext = k === 'portal' ? ' target="_blank" rel="noopener"' : '';
    items += `    <a href="${navHref(k, mode)}"${cls}${ext}><span class="ic">${NAV_ICONS[k]}</span> ${NAV_LABELS[k]}<span class="num">${num}</span></a>\n`;
  });
  return `<nav class="side-links">\n${items}  </nav>`;
}

const extraCss = `
/* subpages (admin portal style) */
.subpage-head{
  background:
    radial-gradient(900px 420px at 88% -12%, rgba(37,99,235,.5), transparent 60%),
    radial-gradient(700px 380px at 8% 112%, rgba(245,158,11,.3), transparent 55%),
    linear-gradient(140deg,#0f172a 0%,#1e3a8a 60%,#172554 100%);
  color:#fff;padding:60px 0 52px;text-align:center;margin-bottom:40px;position:relative;overflow:hidden;
}
.subpage-head::before{
  content:'';position:absolute;inset:0;
  background:
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.5), transparent),
    radial-gradient(2px 2px at 70% 20%, rgba(255,255,255,.4), transparent),
    radial-gradient(3px 3px at 40% 80%, rgba(255,255,255,.35), transparent);
  background-size:220px 220px,300px 300px,260px 260px;
  pointer-events:none;opacity:.3;
}
.subpage-head h1{color:#fff;font-size:2rem;position:relative;z-index:1}
.subpage-head p{color:rgba(255,255,255,.8);max-width:640px;margin:8px auto 0;position:relative;z-index:1}
.subpage-title{
  font-size:1.15rem;color:var(--primary-darker);margin:32px 0 14px;
  border-right:4px solid var(--primary);padding-right:14px;
}
.subpage-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:18px}
.subpage-item{
  margin:0;border-radius:12px;overflow:hidden;border:1.5px solid var(--border);
  box-shadow:var(--shadow);transition:all .22s;background:#fff;
}
.subpage-item:hover{border-color:var(--primary);box-shadow:0 10px 24px rgba(37,99,235,.14);transform:translateY(-3px)}
.subpage-item img{width:100%;aspect-ratio:4/3;object-fit:cover;transition:.4s}
.subpage-item:hover img{transform:scale(1.04)}
.loc-wrap{display:grid;grid-template-columns:1.6fr 1fr;gap:24px;align-items:start}
.loc-map{aspect-ratio:4/3;border-radius:16px;overflow:hidden;box-shadow:var(--shadow-lg);border:4px solid rgba(37,99,235,.3)}
.loc-side{background:#fff;border:1px solid var(--border);border-radius:14px;padding:24px;box-shadow:var(--shadow);text-align:center}
.loc-qr{width:170px;margin:0 auto 10px;border-radius:10px}
.contact-wrap{display:grid;grid-template-columns:1.4fr 1fr;gap:24px;align-items:start}
.contact-form{background:#fff;border:1px solid var(--border);border-radius:14px;padding:26px;box-shadow:var(--shadow);display:grid;gap:14px}
.contact-form label{font-weight:700;color:var(--ink);display:grid;gap:6px;font-size:.95rem}
.contact-form input,.contact-form textarea{
  padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-family:inherit;font-size:.95rem;
  background:#f8fafc;transition:all .22s;
}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--primary);background:#fff;box-shadow:0 0 0 4px rgba(37,99,235,.12)}
.contact-info{background:#fff;border:1px solid var(--border);border-radius:14px;padding:24px;box-shadow:var(--shadow)}
.contact-info h3{color:var(--primary-darker);margin-bottom:12px}
.contact-info p{color:var(--ink-soft);margin-bottom:8px}
.contact-info p a{font-weight:700}
.foot-qr{background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.1);padding:20px 0}
.foot-qr__card{display:flex;align-items:center;gap:18px;justify-content:center;max-width:620px;margin:0 auto;text-align:right}
.foot-qr__img{width:96px;border-radius:10px;background:#fff;padding:5px;flex-shrink:0}
.foot-qr__text{font-size:.92rem;color:#fff;margin-bottom:2px}
.foot-qr__addr{font-size:.78rem;color:rgba(255,255,255,.6);margin-bottom:6px}
.foot-qr__btn{display:inline-block;color:#93c5fd;font-weight:700;font-size:.84rem;border:1px solid rgba(255,255,255,.2);padding:5px 16px;border-radius:8px;transition:.2s}
.foot-qr__btn:hover{background:rgba(255,255,255,.12);color:#fff}
@media(max-width:640px){.foot-qr__card{flex-direction:column;text-align:center}}
@media(max-width:900px){.subpage-grid{grid-template-columns:repeat(2,1fr)}.loc-wrap,.contact-wrap{grid-template-columns:1fr}}
@media(max-width:640px){.subpage-grid{grid-template-columns:1fr}}
`;

function buildPage(title, active, content) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} | المعهد التكنولوچى العالى للعلوم الصحية التطبيقية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
${css}
${extraCss}
</style>
</head>
<body>

${sidenav.replace(home.slice(home.indexOf('<nav class="side-links">'), home.indexOf('</nav>') + 6), makeNav(active, 'sub'))}

<div class="main">

${topbar}

<main class="section" style="padding-top:10px">
  <div class="container">${content}</div>
</main>

${footer.includes('foot-qr') ? footer : footer.replace('    <div class="bottom">', FOOTER_QR + '\n    <div class="bottom">')}
</div>

${wa}
</body>
</html>`;
}

/* Write home = source (with home-mode nav) */
const homeNav = home.slice(home.indexOf('<nav class="side-links">'), home.indexOf('</nav>') + 6);
const homeNew = home.replace(homeNav, makeNav('index', 'home'));
fs.mkdirSync(path.join(ROOT, 'design-2'), { recursive: true });
write('design-2/index.html', homeNew.includes('foot-qr') ? homeNew : homeNew.replace('    <div class="bottom">', FOOTER_QR + '\n    <div class="bottom">'));
write('design-2/album.html', buildPage('ألبوم الصور', 'album', CONTENT.album));
write('design-2/jobs.html', buildPage('وظائف خالية', 'jobs', CONTENT.jobs));
write('design-2/contact.html', buildPage('تواصل معنا', 'contact', CONTENT.contact));

console.log('Generated design-2 (admin style): index/album/jobs/contact');