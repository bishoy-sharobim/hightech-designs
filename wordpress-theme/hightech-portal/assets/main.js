/* HighTech AHS — Design 2 shared JS (design-2/assets/main.js) */
(function () {
  'use strict';

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      var t = document.querySelector(href);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var rev = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          var d = parseInt(e.target.getAttribute('data-reveal-delay') || '0', 10);
          setTimeout(function () { e.target.classList.add('revealed'); }, d);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .12 });
    rev.forEach(function (el) { obs.observe(el); });
  } else {
    rev.forEach(function (el) { el.classList.add('revealed'); });
  }

  /* ---------- Animated counters for [data-count] ---------- */
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var cobs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { runCounter(e.target); cobs.unobserve(e.target); }
      });
    }, { threshold: .4 });
    counters.forEach(function (el) { cobs.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  /* ---------- Mobile sidebar drawer ---------- */
  var nav = document.querySelector('.sidenav');
  var toggle = document.querySelector('.menu-toggle');
  var overlay = document.querySelector('.drawer-overlay');
  function closeDrawer() {
    if (nav) nav.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    if (toggle) toggle.textContent = '☰';
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show', open);
      toggle.textContent = open ? '✕' : '☰';
    });
  }
  if (overlay) overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeDrawer); });
  }

  /* ---------- Scroll-spy (sidebar links matching page sections) ---------- */
  var spyLinks = document.querySelectorAll('.side-links a[href^="#"]');
  if (spyLinks.length) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY + 140, cur = 'home';
      document.querySelectorAll('section[id]').forEach(function (s) {
        if (s.offsetTop <= y) cur = s.id;
      });
      spyLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
      });
    }, { passive: true });
  }
})();
