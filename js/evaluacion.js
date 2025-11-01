document.getElementById('form-autoevaluacion').addEventListener('change', function() {
  let total = 0;
  const checkboxes = this.querySelectorAll('input[type="checkbox"]:checked');
  
  checkboxes.forEach(cb => {
    total += parseInt(cb.getAttribute('data-peso') || 0);
  });

  // Cálculo ponderado: máx 100 puntos → 10 nota
  const nota = (total / 100) * 10;
  const notaRedondeada = nota.toFixed(1);

  // Actualizar nota
  document.getElementById('nota-final').textContent = notaRedondeada;

  // Actualizar barra
  document.getElementById('progreso').style.width = (total) + '%';

  // Color dinámico
  const color = nota < 5 ? '#e74c3c' : nota < 7 ? '#f39c12' : '#27ae60';
  document.getElementById('nota-final').style.color = color;
});