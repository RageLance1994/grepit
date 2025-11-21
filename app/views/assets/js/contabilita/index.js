const liquiditySource = document.getElementById('liquidity-data');
const canvas = document.getElementById('liquidity-chart');

if (liquiditySource && canvas && window.Chart) {
  const payload = JSON.parse(liquiditySource.textContent || '{}');
  new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels: payload.labels || [],
      datasets: [
        {
          label: 'Entrate',
          data: payload.inflows || [],
          borderColor: '#4caf50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          tension: 0.25,
        },
        {
          label: 'Uscite',
          data: payload.outflows || [],
          borderColor: '#f44336',
          backgroundColor: 'rgba(244, 67, 54, 0.2)',
          tension: 0.25,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
      },
      scales: {
        y: { beginAtZero: false },
      },
    },
  });
}
