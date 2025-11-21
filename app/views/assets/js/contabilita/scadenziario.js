const filterForm = document.getElementById('deadline-filter');

if (filterForm) {
  filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(filterForm).entries());
    console.log('Filters applied', payload);
    alert('Filtri aggiornati (simulazione).');
  });
}
