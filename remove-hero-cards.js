const fs = require('fs');

// --- Design 2: remove hero dash-card block ---
let d2 = fs.readFileSync('designs/design-2-admin-source.html', 'utf8');
const d2Start = d2.indexOf('<div class="dash-card">');
if (d2Start >= 0) {
  // The hero .inner is a grid; dash-card is the second column. Remove it and the actions still remain.
  // Find matching close: count depth from dash-card
  let depth = 0, i = d2Start, end = -1;
  for (; i < d2.length; i++) {
    if (d2.startsWith('<div class="dash-card">', i) || d2.startsWith('<div class="dash-head">', i) ||
        d2.startsWith('<div class="dash-grid">', i) || d2.startsWith('<div class="dash-stat', i) ||
        d2.startsWith('<div class="dash-table">', i) || d2.startsWith('<div class="dash-row">', i) ||
        d2.startsWith('<div class="num">', i) || d2.startsWith('<div class="label">', i)) {
      depth++;
    }
    if (d2.startsWith('</div>', i)) {
      depth--;
      if (depth === 0) { end = i + 6; break; }
    }
  }
  if (end > 0) {
    d2 = d2.slice(0, d2Start) + d2.slice(end);
    fs.writeFileSync('designs/design-2-admin-source.html', '\uFEFF' + d2, 'utf8');
    console.log('Design 2: dash-card removed');
  } else {
    console.log('Design 2: could not find dash-card close');
  }
} else {
  console.log('Design 2: no dash-card found');
}

// --- Design 3: remove hero glass student card (glass-card) ---
let d3 = fs.readFileSync('designs/design-3-portal-style.html', 'utf8');
const d3Start = d3.indexOf('<div class="glass-card">');
if (d3Start >= 0) {
  let depth = 0, i = d3Start, end = -1;
  for (; i < d3.length; i++) {
    // count all <div ...> openings generically until depth returns to 0
    if (d3.startsWith('<div', i)) { depth++; i = d3.indexOf('>', i); }
    else if (d3.startsWith('</div>', i)) { depth--; if (depth === 0) { end = i + 6; break; } }
  }
  if (end > 0) {
    d3 = d3.slice(0, d3Start) + d3.slice(end);
    fs.writeFileSync('designs/design-3-portal-style.html', '\uFEFF' + d3, 'utf8');
    console.log('Design 3: glass-card removed');
  } else {
    console.log('Design 3: could not find glass-card close');
  }
} else {
  console.log('Design 3: no glass-card found');
}