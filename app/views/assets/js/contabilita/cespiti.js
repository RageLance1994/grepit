const assetForm = document.getElementById('asset-form');

if (assetForm) {
  assetForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(assetForm);
    console.log('Asset ready', Object.fromEntries(data.entries()));
    alert('Cespite aggiunto (simulazione).');
  });
}
