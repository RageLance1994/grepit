const assetForm = document.getElementById('asset-form');

if (assetForm) {
  assetForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(assetForm).entries());
    console.info('Cespite salvato (mock)', payload);
    alert('Cespite registrato (demo).');
  });
}
