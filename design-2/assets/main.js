
document.querySelector('.pill .x').addEventListener('click',function(){document.querySelector('.pill').style.display='none'});
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
var sidenavLinks=document.querySelectorAll('.sidenav nav a[href^="#"]');
window.addEventListener('scroll',function(){
  var y=window.scrollY+140,current='home';
  document.querySelectorAll('section[id]').forEach(function(s){
    if(s.offsetTop<=y)current=s.id;
  });
  sidenavLinks.forEach(function(a){
    a.classList.toggle('active',a.getAttribute('href')==='#'+current);
  });
});

