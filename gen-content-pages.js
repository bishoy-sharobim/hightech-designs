/* Generates content pages (departments, study, about, chairman, dean) for all 3 designs. */
const fs = require('fs');
const path = require('path');
const C = require('./content.js');

const ROOT = __dirname;
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, c) => fs.writeFileSync(path.join(ROOT, p), '\uFEFF' + c, 'utf8');

/* ---------- per-design chrome extraction ---------- */
function extractD1() {
  const home = read('design-1/index.html');
  const css = home.match(/<style>([\s\S]*?)<\/style>/)[1];
  const head = home.slice(home.indexOf('<body>') + 6, home.indexOf('<main'));
  const footer = home.slice(home.indexOf('<footer'), home.indexOf('<script>'));
  const waStart = home.indexOf('<a class="wa"');
  const wa = home.slice(waStart, home.indexOf('</a>', waStart) + 4);
  const nav = home.match(/(<nav>[\s\S]*?<\/nav>)/)[1];
  const subNav = (active) => nav
    .replace(/class="active"/g, '')
    .replace(new RegExp('href="' + (active === 'index' ? '#home' : active === 'study' ? 'index.html#study' : active + '.html') + '"'), 'href="' + (active === 'index' ? '#home' : active === 'study' ? 'index.html#study' : active + '.html') + '" class="active"');
  return { css, head, footer, wa, nav, subNav };
}

function extractD2() {
  const home = read('design-2/index.html');
  const css = home.match(/<style>([\s\S]*?)<\/style>/)[1];
  // head = sidenav + <div class="main"> + topbar (body content)
  const sidenav = home.slice(home.indexOf('<aside class="sidenav">'), home.indexOf('</aside>') + 8);
  const topbar = home.slice(home.indexOf('<header class="topbar">'), home.indexOf('</header>') + 9);
  const head = sidenav + '\n<div class="main">\n' + topbar;
  const footer = home.slice(home.indexOf('<footer'), home.indexOf('</footer>') + 9);
  const waStart = home.indexOf('<a class="wa"');
  const wa = home.slice(waStart, home.indexOf('</a>', waStart) + 4);
  const nav = home.match(/(<nav class="side-links">[\s\S]*?<\/nav>)/)[1];
  const subNav = (active) => {
    let n = nav.replace(/class="active"/g, '');
    const key = active === 'index' ? '#home' : active === 'study' ? 'index.html#study' : active + '.html';
    n = n.replace('href="' + key + '"', 'href="' + key + '" class="active"');
    return n;
  };
  return { css, head, footer, wa, nav, subNav, hasMainWrap: true };
}

function extractD3() {
  const home = read('design-3/index.html');
  const css = home.match(/<style>([\s\S]*?)<\/style>/)[1];
  const head = home.slice(home.indexOf('<body>') + 6, home.indexOf('<section class="hero"'));
  const footer = home.slice(home.indexOf('<footer'), home.indexOf('<a class="wa"'));
  const waStart = home.indexOf('<a class="wa"');
  const wa = home.slice(waStart, home.indexOf('</a>', waStart) + 4);
  const nav = home.match(/(<nav class="navbar">[\s\S]*?<\/nav>)/)[1];
  const subNav = (active) => {
    let n = nav.replace(/class="active"/g, '');
    const key = active === 'index' ? '#home' : active === 'study' ? 'index.html#study' : active + '.html';
    n = n.replace('href="' + key + '"', 'href="' + key + '" class="active"');
    return n;
  };
  return { css, head, footer, wa, nav, subNav };
}

/* ---------- content builders ---------- */
function deptsContent() {
  return `
<div class="subpage-head"><h1>أقسام المعهد</h1><p>ثلاثة أقسام علمية متخصصة — بكالوريوس معتمد من وزارة التعليم العالي</p></div>
<div class="dept-cards">
  <article class="dept-card">
    <div class="dept-media"><img src="../assets/dep-radio.jpg" alt="قسم علوم الأشعة"><span class="dept-no">01</span></div>
    <div class="dept-body">
      <h2>قسم علوم الأشعة <small>Radiology Sciences</small></h2>
      <p>${C.DEPT_RAD}</p>
    </div>
  </article>
  <article class="dept-card">
    <div class="dept-media"><img src="../assets/dep-labs.jpg" alt="قسم المختبرات الطبية"><span class="dept-no">02</span></div>
    <div class="dept-body">
      <h2>قسم المختبرات الطبية <small>Medical Laboratory</small></h2>
      <p>${C.DEPT_LAB}</p>
    </div>
  </article>
  <article class="dept-card">
    <div class="dept-media"><img src="../assets/dep-dental.jpg" alt="قسم تركيبات الأسنان"><span class="dept-no">03</span></div>
    <div class="dept-body">
      <h2>قسم تركيبات الأسنان <small>Dental Laboratory</small></h2>
      <p>${C.DEPT_DEN}</p>
    </div>
  </article>
</div>`;
}

function studyContent() {
  let html = `
<div class="subpage-head"><h1>الدراسة بالمعهد</h1><p>نظام الساعات المعتمدة — لائحة الدراسة والامتحانات</p></div>
<div class="study-wrap">`;
  C.STUDY_SECTIONS.forEach((s, i) => {
    const num = String(i + 1).padStart(2, '0');
    if (s.type === 'para') {
      html += `
  <section class="study-sec">
    <h2><span class="sec-num">${num}</span> ${s.title}</h2>
    ${s.items.map(t => `<p>${t}</p>`).join('')}
  </section>`;
    } else {
      html += `
  <section class="study-sec">
    <h2><span class="sec-num">${num}</span> ${s.title}</h2>
    <ul>
      ${s.items.map(t => `<li>${t}</li>`).join('')}
    </ul>
  </section>`;
    }
  });
  html += '</div>';
  return html;
}

function aboutContent() {
  return `
<div class="subpage-head"><h1>عن المعهد</h1><p>تعرف على المعهد التكنولوچى العالى للعلوم الصحية التطبيقية</p></div>
<div class="about-wrap">
  <p class="about-intro">${C.ABOUT_INTRO}</p>
  <div class="about-cols">
    ${C.ABOUT_COLS.map(c => `
    <div class="about-col">
      <div class="about-icon">${c.icon}</div>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </div>`).join('')}
  </div>
  <div class="about-links">
    <a class="about-link" href="chairman.html"><img src="../assets/Nashaat2.jpg" alt=""><b>كلمة رئيس مجلس الإدارة</b><small>أ.د. نشأت عبد الله عبده زين الدين</small></a>
    <a class="about-link" href="dean.html"><img src="../assets/dean.jpg" alt=""><b>كلمة عميد المعهد</b><small>أ.د. محمد فتحي عزازي</small></a>
  </div>
</div>`;
}

function wordPageContent(kind) {
  if (kind === 'chairman') {
    return `
<div class="subpage-head"><h1>كلمة رئيس مجلس الإدارة</h1><p>أ.د. نشأت عبد الله عبده زين الدين</p></div>
<div class="word-wrap">
  <div class="word-portrait"><img src="../assets/Nashaat2.jpg" alt="رئيس مجلس الإدارة"></div>
  <div class="word-body">
    ${C.CHAIRMAN_WORD.map(p => `<p>${p}</p>`).join('')}
    <div class="word-sign">
      <b>${C.CHAIRMAN_SIGN}</b>
      <span>${C.CHAIRMAN_ROLE}</span>
    </div>
  </div>
</div>`;
  }
  return `
<div class="subpage-head"><h1>كلمة عميد المعهد</h1><p>أ.د. محمد فتحي عزازي</p></div>
<div class="word-wrap">
  <div class="word-portrait"><img src="../assets/dean.jpg" alt="عميد المعهد"></div>
  <div class="word-body">
    <h2>${C.DEAN_TITLE}</h2>
    <p class="word-role">${C.DEAN_ROLE}</p>
    ${C.DEAN_WORD.map(p => `<p>${p}</p>`).join('')}
    <div class="word-sign">
      <b>${C.DEAN_SIGN}</b>
      <span>عميد المعهد</span>
    </div>
  </div>
</div>`;
}

/* ---------- shared subpage CSS ---------- */
function subpageCss() {
  return `
.subpage-head{background:linear-gradient(120deg,#0e3a57,#1b5e8a);color:#fff;padding:60px 0 52px;text-align:center;margin-bottom:42px}
.subpage-head h1{color:#fff;font-size:2rem}
.subpage-head p{color:rgba(255,255,255,.85);max-width:640px;margin:8px auto 0}
.subpage-title{font-size:1.2rem;margin:34px 0 16px;border-right:4px solid #a6192e;padding-right:14px}
/* departments */
.dept-cards{display:grid;gap:26px}
.dept-card{background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 14px 40px rgba(14,58,87,.12);display:grid;grid-template-columns:1fr 1.2fr;border:1px solid #e3e9ef}
.dept-media{position:relative;min-height:260px}
.dept-media img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}
.dept-no{position:absolute;top:16px;right:16px;background:rgba(14,58,87,.85);color:#fff;font-family:monospace;font-weight:900;padding:6px 14px;border-radius:10px;font-size:15px}
.dept-body{padding:30px 28px}
.dept-body h2{font-size:1.4rem;margin-bottom:4px}
.dept-body h2 small{display:block;color:#a6192e;font-weight:700;font-size:.85rem;margin-top:4px}
.dept-body p{color:#5b6b78;font-size:15.5px}
/* study */
.study-wrap{max-width:900px;margin:0 auto}
.study-sec{background:#fff;border-radius:16px;padding:26px 28px;margin-bottom:18px;box-shadow:0 8px 26px rgba(14,58,87,.07);border:1px solid #e3e9ef}
.study-sec h2{font-size:1.15rem;display:flex;align-items:center;gap:12px;margin-bottom:14px}
.study-sec .sec-num{background:#1b5e8a;color:#fff;font-family:monospace;font-size:.85rem;padding:4px 12px;border-radius:8px;flex-shrink:0}
.study-sec p{color:#5b6b78;font-size:15px;margin-bottom:10px}
.study-sec p:last-child{margin-bottom:0}
.study-sec ul{padding-right:1.2em;color:#5b6b78;font-size:15px}
.study-sec ul li{margin-bottom:9px}
.study-sec ul li:last-child{margin-bottom:0}
/* about */
.about-wrap{max-width:900px;margin:0 auto}
.about-intro{background:#fff;border-radius:16px;padding:24px 28px;box-shadow:0 8px 26px rgba(14,58,87,.07);border:1px solid #e3e9ef;color:#5b6b78;font-size:16px;line-height:2;margin-bottom:26px}
.about-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:30px}
.about-col{background:#fff;border-radius:16px;padding:26px 22px;text-align:center;box-shadow:0 8px 26px rgba(14,58,87,.07);border:1px solid #e3e9ef}
.about-icon{font-size:2rem;margin-bottom:10px}
.about-col h3{font-size:1.1rem;margin-bottom:10px;color:#1b5e8a}
.about-col p{color:#5b6b78;font-size:14px;line-height:1.9}
.about-links{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.about-link{display:flex;align-items:center;gap:16px;background:#fff;border-radius:16px;padding:18px 20px;box-shadow:0 8px 26px rgba(14,58,87,.07);border:1px solid #e3e9ef;transition:.25s}
.about-link:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(14,58,87,.14)}
.about-link img{width:70px;height:70px;border-radius:50%;object-fit:cover;border:3px solid rgba(27,94,138,.2);flex-shrink:0}
.about-link b{display:block;color:#1b5e8a;font-size:1rem}
.about-link small{color:#5b6b78;font-size:.8rem}
/* words */
.word-wrap{max-width:900px;margin:0 auto;display:grid;grid-template-columns:.7fr 1.3fr;gap:30px;align-items:start}
.word-portrait{background:#fff;border-radius:16px;padding:20px;box-shadow:0 8px 26px rgba(14,58,87,.07);border:1px solid #e3e9ef;position:sticky;top:100px;text-align:center}
.word-portrait img{width:100%;border-radius:12px;margin-bottom:12px}
.word-body{background:#fff;border-radius:16px;padding:30px 28px;box-shadow:0 8px 26px rgba(14,58,87,.07);border:1px solid #e3e9ef}
.word-body h2{font-size:1.3rem;margin-bottom:4px;text-align:center}
.word-body .word-role{color:#a6192e;font-weight:700;text-align:center;margin-bottom:20px}
.word-body p{color:#5b6b78;font-size:15.5px;line-height:2;margin-bottom:14px;text-align:center}
.word-body p:last-of-type{margin-bottom:20px}
.word-sign{border-top:1px solid #e3e9ef;padding-top:18px;text-align:center}
.word-sign b{display:block;color:#1b5e8a;font-size:1.05rem}
.word-sign span{color:#5b6b78;font-size:.9rem}
@media(max-width:900px){.dept-card{grid-template-columns:1fr}.dept-media{min-height:220px}.about-cols,.about-links{grid-template-columns:1fr}.word-wrap{grid-template-columns:1fr}.word-portrait{position:static}}
`;
}

/* ---------- page assembly ---------- */
function buildPage(css, extraCss, head, footer, wa, navHtml, title, content, hasMainWrap) {
  const mainClose = hasMainWrap ? '\n</div><!-- /main -->' : '';
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
${subpageCss()}
${extraCss}
</style>
</head>
<body>

${head.replace(/(<nav[\s\S]*?<\/nav>)/, navHtml)}

<main class="section" style="padding-top:10px">
  <div class="container">${content}</div>
</main>

${footer.replace(/(<nav[\s\S]*?<\/nav>)/, navHtml)}
${mainClose}

${wa}
</body>
</html>`;
}

/* ---------- generate for each design ---------- */
const designs = [
  { name: 'design-1', chrome: extractD1() },
  { name: 'design-2', chrome: extractD2() },
  { name: 'design-3', chrome: extractD3() }
];

designs.forEach(d => {
  const { css, head, footer, wa, nav, hasMainWrap } = d.chrome;
  const extraCss = d.name === 'design-2'
    ? '.subpage-head{background:linear-gradient(140deg,#0f172a,#1e3a8a)}.sec-num{background:var(--primary)}.dept-body h2 small,.word-body .word-role{color:var(--primary)}'
    : d.name === 'design-3'
    ? '.subpage-head{background:linear-gradient(140deg,#0f172a,#1e3a8a)}.sec-num{background:var(--primary)}.dept-body h2 small,.word-body .word-role{color:var(--primary)}'
    : '';

  const pages = [
    ['departments.html', 'أقسام المعهد', 'departments', deptsContent()],
    ['study.html', 'الدراسة بالمعهد', 'study', studyContent()],
    ['about.html', 'عن المعهد', 'about', aboutContent()],
    ['chairman.html', 'كلمة رئيس مجلس الإدارة', 'about', wordPageContent('chairman')],
    ['dean.html', 'كلمة عميد المعهد', 'about', wordPageContent('dean')]
  ];

  pages.forEach(([file, title, active, content]) => {
    const navHtml = makeSubNav(d.name, nav, active);
    write(path.join(d.name, file), buildPage(css, extraCss, head, footer, wa, navHtml, title, content, hasMainWrap));
  });
  console.log(d.name + ': departments/study/about/chairman/dean generated');
});

function makeSubNav(design, nav, active) {
  let n = nav.replace(/class="active"/g, '');
  let key;
  if (active === 'index') key = '#home';
  else if (active === 'study' || active === 'about' || active === 'departments' ||
           active === 'album' || active === 'jobs' || active === 'contact') key = active + '.html';
  else key = active + '.html';
  n = n.replace(new RegExp('href="' + key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"'), 'href="' + key + '" class="active"');
  return n;
}