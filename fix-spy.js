const fs = require('fs');

const SPY1 = `
var slides=document.querySelectorAll('.hero .slide'),cur=0;
setInterval(function(){slides[cur].classList.remove('active');cur=(cur+1)%slides.length;slides[cur].classList.add('active');document.querySelectorAll('.dots span').forEach(function(d,i){d.classList.toggle('active',i===cur)})},6000);
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
var ax=document.querySelector('.announce .x');
if(ax)ax.addEventListener('click',function(){document.querySelector('.announce').style.display='none'});
var spyLinks=document.querySelectorAll('.header nav a[href^="#"]');
window.addEventListener('scroll',function(){
  var y=window.scrollY+140,cur='home';
  document.querySelectorAll('section[id]').forEach(function(s){if(s.offsetTop<=y)cur=s.id;});
  spyLinks.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+cur);});
});
`;

const SPY2 = `
document.querySelector('.pill .x').addEventListener('click',function(){document.querySelector('.pill').style.display='none'});
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
var spyLinks=document.querySelectorAll('.sidenav nav a[href^="#"]');
window.addEventListener('scroll',function(){
  var y=window.scrollY+140,cur='home';
  document.querySelectorAll('section[id]').forEach(function(s){if(s.offsetTop<=y)cur=s.id;});
  spyLinks.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+cur);});
});
`;

function fixTail(file, spy) {
  let c = fs.readFileSync(file, 'utf8');
  const bodyEnd = c.lastIndexOf('</body>');
  if (bodyEnd < 0) { console.log(file + ' ERR: no body'); return; }
  const scriptStart = c.lastIndexOf('<script>', bodyEnd);
  const head = c.slice(0, scriptStart);
  const newTail = head + '<script>' + spy + '</script>\n</body>\n</html>';
  fs.writeFileSync(file, '\uFEFF' + newTail, 'utf8');
  console.log(file + ' fixed');
}

fixTail('designs/design-1/index.html', SPY1);
fixTail('designs/design-2/index.html', SPY2);