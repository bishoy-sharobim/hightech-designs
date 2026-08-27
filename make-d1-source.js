const fs = require('fs');

const c = fs.readFileSync('designs/design-2/index.html', 'utf8');
let c1 = c
  .replace(/design-2/g, 'design-1')
  .replace(/side-grad/g, 'navy')
  .replace(/side-links/g, 'nav')
  .replace(/class="sidenav"/g, 'class="header"')
  .replace(/side-brand/g, 'brand')
  .replace(/side-links/g, 'nav')
  .replace(/side-foot/g, 'footer')
  .replace(/class="side-links"/g, 'class="nav"')
  .replace(/class="sidenav"/g, 'class="header"')
  .replace(/class="main"/g, 'class="container"')
  .replace(/class="dash-card"/g, 'class="dash-card"')
  .replace(/class="side-foot"/g, 'class="footer"')
  .replace(/class="topbar"/g, 'class="topbar"')
  .replace(/class="brand"/g, 'class="brand"')
  .replace(/class="cta"/g, 'class="cta"')
  .replace(/class="dash-stat"/g, 'class="stat-card"')
  .replace(/class="dash-grid"/g, 'class="stats-grid"')
  .replace(/class="dash-stat"/g, 'class="stat-card"')
  .replace(/class="dash-row"/g, '')
  .replace(/class="dash-head"/g, '')
  .replace(/class="dash-grid"/g, '')
  .replace(/class="dash-card"/g, '')
  .replace(/class="dash-head"/g, '')
  .replace(/class="dash-grid"/g, '')
  .replace(/class="dash-head"/g, '')
  .replace(/class="dash-grid"/g, '')
  .replace(/class="dash-head"/g, '')
  .replace(/class="dash-grid"/g, '')
  .replace(/class="dash-head"/g, '')
  .replace(/class="dash-grid"/g, '')
  .replace(/class="dash-head"/g, '')
  .replace('dash-card', '')
  .replace('dash-head', '')
  .replace('dash-grid', '')
  .replace('dash-head', '')
  .replace('dash-grid', '')
  .replace('dash-head', '');

fs.writeFileSync('designs/design-1/index.html', '\uFEFF' + c1, 'utf8');
console.log('Created design-1/index.html');