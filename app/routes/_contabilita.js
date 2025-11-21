const express = require('express');

const router = express.Router();

const sidebarSections = [
  { name: 'Dashboard', icon: 'fa fa-home', href: '/dashboard' },
  { name: 'Contabilità', icon: 'fa fa-calculator', href: '/contabilita' },
  { name: 'Fatture', icon: 'fa fa-file-text-o', href: '/contabilita/fatture' },
  { name: 'Prima nota', icon: 'fa fa-list-ul', href: '/contabilita/prima-nota' },
  { name: 'Cashflow', icon: 'fa fa-line-chart', href: '/contabilita/cashflow' },
  { name: 'Cespiti', icon: 'fa fa-archive', href: '/contabilita/cespiti' },
  { name: 'Scadenziario', icon: 'fa fa-calendar-check-o', href: '/contabilita/scadenziario' }
];

function baseRender(res, view, options = {}) {
  const defaults = {
    pageTitle: 'Contabilità',
    companyName: 'Nome Azienda',
    userName: 'Nome e cognome',
    sidebarSections,
    activePath: '/contabilita',
    breadcrumbs: [{ name: 'Contabilità', href: '/contabilita' }],
    cards: []
  };

  return res.render(`contabilita/${view}`, { ...defaults, ...options });
}

router.get('/', (req, res) => {
  const cards = [
    { title: 'Ricavi YTD', value: '€ 1.250.000', trend: '+8,2%', trendClass: 'success' },
    { title: 'Margine Operativo', value: '€ 410.500', trend: '+2,1%', trendClass: 'success' },
    { title: 'Costo del personale', value: '€ 320.900', trend: '+0,4%', trendClass: 'warning' },
    { title: 'Incassi attesi', value: '€ 198.300', trend: '-1,8%', trendClass: 'error' }
  ];

  const recentInvoices = [
    { number: 'FA-2024-019', customer: 'Alfa S.p.A.', amount: '€ 12.500', status: 'Emessa', dueDate: '2024-06-30' },
    { number: 'FA-2024-020', customer: 'Beta Consulting', amount: '€ 7.950', status: 'In attesa', dueDate: '2024-07-05' },
    { number: 'FA-2024-021', customer: 'Gamma Retail', amount: '€ 19.300', status: 'Pagata', dueDate: '2024-06-25' }
  ];

  const liquidityChart = {
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
    inflows: [120000, 95000, 110000, 103000, 99000, 118000],
    outflows: [83000, 87000, 92000, 88000, 91000, 94000]
  };

  return baseRender(res, 'index', {
    cards,
    recentInvoices,
    liquidityChart,
    breadcrumbs: [{ name: 'Contabilità', href: '/contabilita' }],
    activePath: '/contabilita'
  });
});

router.get('/fatture', (req, res) => {
  const cards = [
    { title: 'Fatture da emettere', value: '14', trend: '+3', trendClass: 'warning' },
    { title: 'Da incassare', value: '€ 86.400', trend: '+6,1%', trendClass: 'warning' },
    { title: 'Scadute', value: '€ 12.800', trend: '-2,0%', trendClass: 'error' },
    { title: 'Tempo medio incasso', value: '42 gg', trend: '-5 gg', trendClass: 'success' }
  ];

  const invoices = [
    { number: 'FA-2024-022', customer: 'Delta Tech', date: '2024-06-15', dueDate: '2024-07-15', amount: '€ 5.400', status: 'Bozza' },
    { number: 'FA-2024-021', customer: 'Gamma Retail', date: '2024-06-12', dueDate: '2024-07-12', amount: '€ 19.300', status: 'Emessa' },
    { number: 'FA-2024-020', customer: 'Beta Consulting', date: '2024-06-10', dueDate: '2024-07-10', amount: '€ 7.950', status: 'In attesa' }
  ];

  const invoiceDefaults = {
    number: 'FA-2024-023',
    customer: 'Cliente Sconosciuto',
    date: '2024-06-20',
    dueDate: '2024-07-20',
    amount: '0,00',
    vat: '22',
    description: 'Descrizione della prestazione'
  };

  const chart = {
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
    issued: [9, 7, 8, 10, 12, 11],
    paid: [6, 5, 7, 9, 10, 9]
  };

  return baseRender(res, 'fatture', {
    pageTitle: 'Fatture',
    breadcrumbs: [
      { name: 'Contabilità', href: '/contabilita' },
      { name: 'Fatture', href: '/contabilita/fatture' }
    ],
    cards,
    invoices,
    invoiceDefaults,
    chart,
    activePath: '/contabilita/fatture'
  });
});

router.get('/prima-nota', (req, res) => {
  const cards = [
    { title: 'Prima nota aperta', value: '23 movimenti', trend: '+4', trendClass: 'warning' },
    { title: 'Saldo banca', value: '€ 138.900', trend: '+1,4%', trendClass: 'success' },
    { title: 'Saldo cassa', value: '€ 4.820', trend: '-0,3%', trendClass: 'warning' },
    { title: 'Movimenti da riconciliare', value: '6', trend: '+1', trendClass: 'error' }
  ];

  const ledgerEntries = [
    { date: '2024-06-17', type: 'Entrata', account: 'Cliente', description: 'Incasso Beta Consulting', amount: '€ 7.950' },
    { date: '2024-06-16', type: 'Uscita', account: 'Fornitore', description: 'Acquisto hardware', amount: '€ 2.480' },
    { date: '2024-06-15', type: 'Entrata', account: 'Banca', description: 'Incasso Gamma Retail', amount: '€ 19.300' }
  ];

  const entryDefaults = {
    date: '2024-06-20',
    type: 'Entrata',
    account: 'Banca',
    description: 'Descrizione movimento',
    amount: '0,00'
  };

  return baseRender(res, 'prima-nota', {
    pageTitle: 'Prima nota',
    breadcrumbs: [
      { name: 'Contabilità', href: '/contabilita' },
      { name: 'Prima nota', href: '/contabilita/prima-nota' }
    ],
    cards,
    ledgerEntries,
    entryDefaults,
    activePath: '/contabilita/prima-nota'
  });
});

router.get('/cashflow', (req, res) => {
  const cards = [
    { title: 'Disponibilità liquide', value: '€ 142.700', trend: '+4,3%', trendClass: 'success' },
    { title: 'Cash burn mensile', value: '€ 38.200', trend: '-1,5%', trendClass: 'success' },
    { title: 'Giorni di cassa', value: '96', trend: '+6', trendClass: 'success' },
    { title: 'Linee di credito', value: '€ 200.000', trend: '0%', trendClass: 'neutral' }
  ];

  const chart = {
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
    inflows: [120000, 98000, 110000, 103000, 108000, 118000],
    outflows: [88000, 84000, 93000, 91000, 94000, 96000]
  };

  const forecast = [
    { month: 'Lug', inflow: '€ 115.000', outflow: '€ 92.000', balance: '€ 23.000' },
    { month: 'Ago', inflow: '€ 108.000', outflow: '€ 95.000', balance: '€ 13.000' },
    { month: 'Set', inflow: '€ 120.000', outflow: '€ 99.000', balance: '€ 21.000' }
  ];

  return baseRender(res, 'cashflow', {
    pageTitle: 'Cashflow',
    breadcrumbs: [
      { name: 'Contabilità', href: '/contabilita' },
      { name: 'Cashflow', href: '/contabilita/cashflow' }
    ],
    cards,
    chart,
    forecast,
    activePath: '/contabilita/cashflow'
  });
});

router.get('/cespiti', (req, res) => {
  const cards = [
    { title: 'Cespiti attivi', value: '42', trend: '+1', trendClass: 'success' },
    { title: 'Valore storico', value: '€ 380.000', trend: '+0,9%', trendClass: 'success' },
    { title: 'Fondo ammortamento', value: '€ 140.200', trend: '+1,3%', trendClass: 'warning' },
    { title: 'Quota anno', value: '€ 52.400', trend: '+0,7%', trendClass: 'success' }
  ];

  const assets = [
    { code: 'IM-001', name: 'Server rack', category: 'Hardware', value: '€ 24.000', rate: '20%', residual: '€ 9.600' },
    { code: 'IM-014', name: 'Autovettura', category: 'Auto aziendale', value: '€ 32.000', rate: '25%', residual: '€ 16.000' },
    { code: 'IM-021', name: 'Stampante A3', category: 'Hardware', value: '€ 3.200', rate: '20%', residual: '€ 1.920' }
  ];

  const assetDefaults = {
    code: 'IM-0XX',
    name: 'Bene aziendale',
    category: 'Hardware',
    value: '0,00',
    rate: '20'
  };

  return baseRender(res, 'cespiti', {
    pageTitle: 'Cespiti',
    breadcrumbs: [
      { name: 'Contabilità', href: '/contabilita' },
      { name: 'Cespiti', href: '/contabilita/cespiti' }
    ],
    cards,
    assets,
    assetDefaults,
    activePath: '/contabilita/cespiti'
  });
});

router.get('/scadenziario', (req, res) => {
  const cards = [
    { title: 'Scadenze mese', value: '18', trend: '+2', trendClass: 'warning' },
    { title: 'Totale da pagare', value: '€ 64.700', trend: '+4,5%', trendClass: 'error' },
    { title: 'Totale da incassare', value: '€ 91.200', trend: '-1,2%', trendClass: 'success' },
    { title: 'Scadenze critiche', value: '3', trend: '+1', trendClass: 'error' }
  ];

  const deadlines = [
    { date: '2024-06-24', subject: 'F24 contributi', type: 'Pagamento', amount: '€ 12.400', status: 'Da pagare' },
    { date: '2024-06-25', subject: 'Incasso Gamma Retail', type: 'Incasso', amount: '€ 19.300', status: 'Atteso' },
    { date: '2024-06-28', subject: 'Canone ERP', type: 'Pagamento', amount: '€ 1.250', status: 'Programmato' },
    { date: '2024-07-05', subject: 'Stipendi', type: 'Pagamento', amount: '€ 38.000', status: 'Programmato' }
  ];

  const filters = {
    from: '2024-06-01',
    to: '2024-07-31',
    type: 'Tutte'
  };

  return baseRender(res, 'scadenziario', {
    pageTitle: 'Scadenziario',
    breadcrumbs: [
      { name: 'Contabilità', href: '/contabilita' },
      { name: 'Scadenziario', href: '/contabilita/scadenziario' }
    ],
    cards,
    deadlines,
    filters,
    activePath: '/contabilita/scadenziario'
  });
});

module.exports = router;
