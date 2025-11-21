const ruleForm = document.getElementById('cashflow-rule-form');

if (ruleForm) {
  ruleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(ruleForm);
    const rule = formData.get('rule');
    console.info('Regola cashflow salvata (mock)', rule);
    alert('Regola salvata (demo).');
    ruleForm.reset();
  });
}
