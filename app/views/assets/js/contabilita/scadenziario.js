const deadlineFilterForm = document.getElementById('deadline-filter-form');

if (deadlineFilterForm) {
  deadlineFilterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(deadlineFilterForm).entries());
    console.info('Filtro scadenze applicato (mock)', payload);
    alert('Filtro applicato (demo).');
  });
}
