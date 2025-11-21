const invoiceForm = document.getElementById('invoice-form');
const sendButton = document.getElementById('invoice-send');

if (invoiceForm) {
  invoiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(invoiceForm);
    const payload = Object.fromEntries(formData.entries());
    console.info('Bozza fattura salvata (mock)', payload);
    alert('Bozza salvata (demo).');
  });
}

if (sendButton && invoiceForm) {
  sendButton.addEventListener('click', () => {
    const formData = new FormData(invoiceForm);
    const payload = Object.fromEntries(formData.entries());
    console.info('Fattura inviata (mock)', payload);
    alert('Fattura inviata (demo).');
  });
}
