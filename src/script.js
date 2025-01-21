window.onload = function() { 
    document.getElementById("ano").innerHTML = new Date().getFullYear(); 
}

function calcularPorc1() {
    const valor1 = parseFloat(document.getElementById('porc1').value);
    const valor2 = parseFloat(document.getElementById('porc2').value);
    const resultado = (valor1 / 100) * valor2;
    document.getElementById('outPorc1').value = `${resultado.toFixed(2).replace('.', ',')}`;
  }