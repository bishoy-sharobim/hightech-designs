const fs = require('fs');
const f = 'designs/design-3-portal-style.html';
let c = fs.readFileSync(f, 'utf8');

// 1. Reorder sections: DEPARTMENTS block moves AFTER OBJECTIVES block
const deptStart = c.indexOf('<!-- ============ DEPARTMENTS (schedule-style) ============ -->');
const deptEnd = c.indexOf('<!-- ============ ABOUT ============ -->');
const objStart = c.indexOf('<!-- ============ OBJECTIVES (GPA-style cards) ============ -->');
const objEnd = c.indexOf('<!-- ============ RESULTS ============ -->');

if (deptStart < 0 || deptEnd < 0 || objStart < 0 || objEnd < 0) {
  console.error('Boundary not found');
  process.exit(1);
}
const deptBlock = c.slice(deptStart, deptEnd);
const objBlock = c.slice(objStart, objEnd);

let body = c.slice(0, deptStart) + c.slice(deptEnd);      // remove departments (about stays)
body = body.replace(objBlock, '');                          // remove objectives

const resultsStart = body.indexOf('<!-- ============ RESULTS ============ -->');
body = body.slice(0, resultsStart) + objBlock + '\n' + deptBlock + '\n' + body.slice(resultsStart);

// 2. Results CTA -> portal link
body = body.replace('href="index.html#results"', 'href="https://htiahs.pythonanywhere.com" target="_blank" rel="noopener"');

// 3. Footer QR: insert into the تواصل معنا column of footer (after its ul)
const footQr = `
  <div class="foot-qr">
    <img class="foot-qr__img" src="../assets/qr.png" alt="QR Code للموقع">
    <p class="foot-qr__text"><b>امسح الكود لمعرفة الموقع على الخريطة</b></p>
    <a class="foot-qr__btn" href="https://www.google.com/maps?q=%D9%83%D9%8036+%D8%B7%D8%B1%D9%8A%D9%82+%D9%85%D8%B5%D8%B1+%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B5%D8%AD%D8%B1%D8%A7%D9%88%D9%89+%D9%82%D8%B1%D9%8A%D8%A9+%D8%B9%D8%B3%D8%A7%D9%83%D8%B1+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9" target="_blank" rel="noopener">فتح في خرائط جوجل ←</a>
  </div>`;

if (!body.includes('foot-qr')) {
  const footerUl = body.lastIndexOf('</ul>');
  body = body.slice(0, footerUl) + footQr + body.slice(footerUl);
}

// 4. Add foot-qr CSS
if (!body.includes('.foot-qr')) {
  const cssClose = body.lastIndexOf('</style>');
  const css = `
.foot-qr{margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,.1);text-align:center}
.foot-qr__img{width:110px;margin:0 auto 8px;border-radius:10px;background:#fff;padding:5px}
.foot-qr__text{font-size:.78rem;color:rgba(255,255,255,.75);margin-bottom:8px}
.foot-qr__btn{display:inline-block;color:#93c5fd;font-weight:700;font-size:.8rem}
.foot-qr__btn:hover{color:#fff}
`;
  body = body.slice(0, cssClose) + css + body.slice(cssClose);
}

fs.writeFileSync(f, body);
console.log('d3 source: reordered, portal CTA, footer QR + CSS added');