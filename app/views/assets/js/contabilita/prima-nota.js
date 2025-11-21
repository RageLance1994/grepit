const ledgerForm = document.getElementById('ledger-form');

if (ledgerForm) {
  ledgerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(ledgerForm);
    console.log('Ledger entry ready', Object.fromEntries(data.entries()));
    alert('Movimento registrato (simulazione).');
  });
}
