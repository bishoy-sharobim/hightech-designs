const fs = require('fs');
const f = 'designs/design-2-admin-source.html';
let c = fs.readFileSync(f, 'utf8');

// Find section boundaries
const deptStart = c.indexOf('<!-- ============ DEPARTMENTS (course-card style) ============ -->');
const deptEnd = c.indexOf('<!-- ============ ABOUT ============ -->');
const studyStart = c.indexOf('<!-- ============ OBJECTIVES (admin tables) ============ -->');
const studyEnd = c.indexOf('<!-- ============ RESULTS ============ -->');

if (deptStart < 0 || deptEnd < 0 || studyStart < 0 || studyEnd < 0) {
  console.error('Boundary not found', { deptStart, deptEnd, studyStart, studyEnd });
  process.exit(1);
}

const deptBlock = c.slice(deptStart, deptEnd);
const studyBlock = c.slice(studyStart, studyEnd);

// New order: STATS → ABOUT (already in place) → STUDY → DEPARTMENTS → RESULTS
// Remove dept block and study block from the source
let body = c.slice(0, deptStart) + c.slice(deptEnd);           // remove departments (keeps about)
body = body.replace(studyBlock, '');                            // remove study block

// Insert STUDY then DEPARTMENTS before RESULTS
const resultsStart = body.indexOf('<!-- ============ RESULTS ============ -->');
if (resultsStart < 0) { console.error('RESULTS boundary not found'); process.exit(1); }

const newBody = body.slice(0, resultsStart) + studyBlock + '\n' + deptBlock + '\n' + body.slice(resultsStart);

fs.writeFileSync(f, newBody);
console.log('Reordered: about → study → departments');