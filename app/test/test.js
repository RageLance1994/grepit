const assert = require('assert');
const fs = require('fs');
const path = require('path');
const router = require('../routes/_contabilita');

const views = [
  'index',
  'fatture',
  'prima-nota',
  'cashflow',
  'cespiti',
  'scadenziario',
];

// Verify that all EJS templates for the accounting module exist.
views.forEach((view) => {
  const viewPath = path.join(__dirname, '..', 'views', 'contabilita', `${view}.ejs`);
  assert.ok(fs.existsSync(viewPath), `Missing view template: ${viewPath}`);
});

// Verify that stub JS entry points exist for each accounting page.
views.forEach((view) => {
  const jsPath = path.join(__dirname, '..', 'views', 'assets', 'js', 'contabilita', `${view}.js`);
  assert.ok(fs.existsSync(jsPath), `Missing JS stub: ${jsPath}`);
});

// Ensure router defines all expected GET routes.
const expectedPaths = [
  '/',
  '/fatture',
  '/prima-nota',
  '/cashflow',
  '/cespiti',
  '/scadenziario',
];

const registeredPaths = router.stack
  .filter((layer) => layer.route)
  .map((layer) => layer.route.path);

expectedPaths.forEach((pathName) => {
  assert.ok(
    registeredPaths.includes(pathName),
    `Router is missing path: ${pathName}`
  );
});

console.log('All accounting module checks passed.');
