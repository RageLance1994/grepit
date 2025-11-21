const ledgerForm = document.getElementById('ledger-form');

if (ledgerForm) {
  ledgerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(ledgerForm).entries());
    console.info('Movimento registrato (mock)', payload);
    alert('Movimento registrato (demo).');
  });
}
