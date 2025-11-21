const express = require('express');

const router = express.Router();

const sidebarSections = [
  { name: 'Home', icon: 'fa fa-home' },
  { name: 'Contabilità', icon: 'fa fa-calculator' },
  { name: 'Fatture', icon: 'fa fa-file' },
  { name: 'Adempimenti', icon: 'fa fa-gavel' },
  { name: 'Clienti', icon: 'fa fa-handshake-o' },
  { name: 'Magazzino', icon: 'fa fa-dropbox' }
];

function buildCards(title) {
  return [
    { title: `${title} KPI Principale`, value: '0,00€', trend: '+0,00%', trendClass: 'success' },
    { title: `${title} KPI Secondario`, value: '0,00€', trend: '+0,00%', trendClass: 'success' },
    { title: `${title} KPI Terziario`, value: '0,00€', trend: '+0,00%', trendClass: 'success' },
    { title: `${title} KPI Extra`, value: '0,00€', trend: '+0,00%', trendClass: 'success' }
  ];
}

function renderPage(res, view, title) {
  return res.render(`contabilita/${view}`, {
    pageTitle: title,
    companyName: 'Nome Azienda',
    userName: 'Nome e cognome',
    sidebarSections,
    breadcrumbs: [{ name: title }],
    cards: buildCards(title)
  });
}

router.get('/', async (req, res) => {
  return renderPage(res, 'index', 'Contabilità');
});

router.get('/fatture', async (req, res) => {
  return renderPage(res, 'fatture', 'Fatture');
});

router.get('/prima-nota', async (req, res) => {
  return renderPage(res, 'prima-nota', 'Prima Nota');
});

router.get('/cashflow', async (req, res) => {
  return renderPage(res, 'cashflow', 'Cashflow');
});

router.get('/cespiti', async (req, res) => {
  return renderPage(res, 'cespiti', 'Cespiti');
});

router.get('/scadenziario', async (req, res) => {
  return renderPage(res, 'scadenziario', 'Scadenziario');
});

module.exports = router;
