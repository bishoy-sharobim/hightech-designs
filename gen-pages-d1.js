/* Generates design-1 (classic academic) pages. Source: design-1-source.html */
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
<p style="color:var(--muted);text-align:center;margin-top:28px">لمعرفة الشروط والتفاصيل الكاملة يرجى التواصل مع إدارة المعهد على الأرقام التالية: <b>01068376154</b> / <b>01064234560</b></p>
`,
  contact: `
<div class="subpage-head"><h1>تواصل معنا</h1><p>سواء كان لديك استفسار أو تعليق أو تحتاج إلى المساعدة، فنحن هنا لمساعدتك — نحن نقدر أفكارك ونتطلع إلى التواصل معك.</p></div>
<div class="contact-wrap">
  <form class="contact-form" onsubmit="return false">
    <label>الاسم <input type="text" placeholder="اكتب اسمك هنا" required></label>
    <label>البريد الإلكترونى <input type="email" placeholder="example@mail.com" required></label>
    <label>محتوى الرسالة <textarea rows="5" placeholder="اكتب رسالتك هنا" required></textarea></label>
    <button class="btn" type="submit" style="width:auto">إرسال</button>
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
    <p style="color:var(--muted)">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
    <a class="btn" href="${MAP_QUERY}" target="_blank" rel="noopener">فتح في خرائط جوجل ←</a>
  </div>
</div>
`
};

const home = read('design-1-source.html');
const css = home.match(/<style>([\s\S]*?)<\/style>/)[1];

/* Extract header (topbar + announce + header) and footer */
const header = home.slice(home.indexOf('<div class="topbar">'), home.indexOf('</header>') + 9);
const footer = home.slice(home.indexOf('<footer class="footer">'), home.indexOf('<a class="wa"'));
const wa = home.slice(home.indexOf('<a class="wa"'), home.indexOf('</a>') + 4);
const nav = home.match(/(<nav>[\s\S]*?<\/nav>)/)[1];

const NAV_KEYS = ['index','about','study','departments','album','jobs','portal','contact'];
const NAV_LABELS = {
  index: 'الرئيسية', about: 'عن المعهد', study: 'الدراسة بالمعهد', departments: 'أقسام المعهد',
  album: 'ألبوم الصور', jobs: 'وظائف خالية', portal: 'بوابة الطالب', contact: 'تواصل معنا'
};
const PORTAL_URL = 'https://htiahs.pythonanywhere.com';

function navHref(key, mode) {
  if (key === 'index') return mode === 'home' ? '#home' : 'index.html';
  if (key === 'portal') return PORTAL_URL;
  if (['about','study','departments','album','jobs','contact'].includes(key)) return key + '.html';
  return mode === 'home' ? '#' + key : 'index.html#' + key;
}

function makeNav(active, mode) {
  let items = '';
  NAV_KEYS.forEach(k => {
    const cls = k === active ? ' class="active"' : '';
    const ext = k === 'portal' ? ' target="_blank" rel="noopener"' : '';
    items += `        <li><a href="${navHref(k, mode)}"${cls}${ext}>${NAV_LABELS[k]}</a></li>\n`;
  });
  return `<nav>\n      <ul>\n${items}      </ul>\n    </nav>`;
}

const extraCss = `
/* subpages (classic style) */
.subpage-head{background:linear-gradient(120deg,#13294b,#1c3a68);color:#fff;padding:60px 0 52px;text-align:center;margin-bottom:42px}
.subpage-head h1{color:#fff;font-size:2rem}
.subpage-head p{color:rgba(255,255,255,.85);max-width:640px;margin:8px auto 0}
.subpage-title{font-size:1.2rem;color:var(--navy);margin:34px 0 16px;border-right:4px solid var(--gold);padding-right:14px}
.subpage-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}
.subpage-item{margin:0;border-radius:10px;overflow:hidden;box-shadow:var(--shadow);transition:.3s;background:#fff}
.subpage-item:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(19,41,75,.18)}
.subpage-item img{width:100%;aspect-ratio:4/3;object-fit:cover;transition:.4s}
.subpage-item:hover img{transform:scale(1.05)}
.loc-wrap{display:grid;grid-template-columns:1.6fr 1fr;gap:24px;align-items:start}
.loc-map{aspect-ratio:4/3;border-radius:14px;overflow:hidden;box-shadow:var(--shadow);border:4px solid var(--gold)}
.loc-side{background:#fff;border-radius:14px;padding:26px;box-shadow:var(--shadow);text-align:center}
.loc-qr{width:170px;margin:0 auto 10px;border-radius:8px}
.contact-wrap{display:grid;grid-template-columns:1.4fr 1fr;gap:24px;align-items:start}
.contact-form{background:#fff;border-radius:14px;padding:28px;box-shadow:var(--shadow);display:grid;gap:14px}
.contact-form label{font-weight:700;color:var(--ink);display:grid;gap:6px}
.contact-form input,.contact-form textarea{padding:12px 14px;border:1px solid var(--line);border-radius:8px;font-family:inherit;font-size:15px}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--gold)}
.contact-info{background:#fff;border-radius:14px;padding:26px;box-shadow:var(--shadow)}
.contact-info h3{color:var(--navy);margin-bottom:14px}
.contact-info p{color:var(--muted);margin-bottom:8px}
.foot-qr{background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.1);padding:20px 0}
.foot-qr__card{display:flex;align-items:center;gap:18px;justify-content:center;max-width:620px;margin:0 auto;text-align:right}
.foot-qr__img{width:96px;border-radius:10px;background:#fff;padding:5px;flex-shrink:0}
.foot-qr__text{font-size:.92rem;color:#fff;margin-bottom:2px}
.foot-qr__addr{font-size:.78rem;color:rgba(255,255,255,.6);margin-bottom:6px}
.foot-qr__btn{display:inline-block;color:var(--gold-light);font-weight:700;font-size:.84rem;border:1px solid rgba(255,255,255,.2);padding:5px 16px;border-radius:8px;transition:.2s}
.foot-qr__btn:hover{background:rgba(255,255,255,.12);color:#fff}
@media(max-width:900px){.subpage-grid{grid-template-columns:repeat(2,1fr)}.loc-wrap,.contact-wrap{grid-template-columns:1fr}}
@media(max-width:640px){.subpage-grid{grid-template-columns:1fr}.foot-qr__card{flex-direction:column;text-align:center}}
`;

function buildPage(title, active, content) {
  const footerFixed = footer
    .replace('</div>\n  </div>\n  <div class="bottom">', '</div>\n' + FOOTER_QR + '\n  </div>\n  <div class="bottom">');
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

${header.replace(nav, makeNav(active, 'sub'))}

<main class="section" style="padding-top:20px">
  <div class="container">${content}</div>
</main>

${footerFixed.replace(nav, makeNav(active, 'sub'))}

${wa}
</body>
</html>`;
}

fs.mkdirSync(path.join(ROOT, 'design-1'), { recursive: true });
const homeFixed = home
  .replace(nav, makeNav('index', 'home'))
  .replace('</div>\n  </div>\n  <div class="bottom">', '</div>\n' + FOOTER_QR + '\n  </div>\n  <div class="bottom">');
write('design-1/index.html', homeFixed);
write('design-1/album.html', buildPage('ألبوم الصور', 'album', CONTENT.album));
write('design-1/jobs.html', buildPage('وظائف خالية', 'jobs', CONTENT.jobs));
write('design-1/contact.html', buildPage('تواصل معنا', 'contact', CONTENT.contact));

console.log('Generated design-1 (classic): index/album/jobs/contact');