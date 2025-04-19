document.getElementById("analysis-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const symbol = document.getElementById("symbol").value;
  const timeframe = document.getElementById("timeframe").value;
  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `<p>Analizando <strong>${symbol}</strong> en timeframe <strong>${timeframe}</strong>...<br/>Este es un ejemplo estático generado con IA. Aquí aparecerá el análisis real en futuras versiones.</p>`;
});