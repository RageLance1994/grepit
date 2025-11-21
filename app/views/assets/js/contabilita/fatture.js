const invoiceChartData = document.getElementById('invoice-chart-data');
const invoiceCanvas = document.getElementById('invoice-chart');

if (invoiceChartData && invoiceCanvas && window.Chart) {
  const payload = JSON.parse(invoiceChartData.textContent || '{}');
  new Chart(invoiceCanvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: payload.labels || [],
      datasets: [
        {
          label: 'Emesse',
          data: payload.issued || [],
          backgroundColor: 'rgba(0, 164, 255, 0.6)',
          borderColor: '#00a4ff',
          borderWidth: 1,
        },
        {
          label: 'Pagate',
          data: payload.paid || [],
          backgroundColor: 'rgba(76, 175, 80, 0.6)',
          borderColor: '#4caf50',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: { y: { beginAtZero: true } },
    },
  });
}

const invoiceForm = document.getElementById('invoice-form');
if (invoiceForm) {
  invoiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(invoiceForm);
    const payload = Object.fromEntries(formData.entries());
    // Placeholder action for now; in a real app this would POST to the server.
    console.log('Invoice draft ready', payload);
    alert('Bozza salvata (simulazione).');
  });
}
