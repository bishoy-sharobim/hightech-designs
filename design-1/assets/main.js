
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

