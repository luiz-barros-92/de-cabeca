window.onload = function() { 
    document.getElementById("ano").innerHTML = new Date().getFullYear(); 
}

function calcularPorc1() {
    const valor1 = parseFloat(document.getElementById('porc1').value);
    const valor2 = parseFloat(document.getElementById('porc2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira apenas valores numéricos!");
        return;
      }

    const resultado = (valor1 / 100) * valor2;
    document.getElementById('outPorc1').value = `${resultado.toFixed(2).replace('.', ',')}`;
}

function calcularPorc2() {
    const valor3 = parseFloat(document.getElementById('porc3').value);
    const valor4 = parseFloat(document.getElementById('porc4').value);

    if (isNaN(valor3) || isNaN(valor4)) {
        alert("Por favor, insira apenas valores numéricos!");
        return;
      }

    const resultado = valor3 + (valor3 * (valor4 / 100));
    document.getElementById('outPorc2').value = `${resultado.toFixed(2).replace('.', ',')}`;
}

function calcularPorc3() {
    const valor5 = parseFloat(document.getElementById('porc5').value);
    const valor6 = parseFloat(document.getElementById('porc6').value);

    if (isNaN(valor5) || isNaN(valor6)) {
        alert("Por favor, insira apenas valores numéricos!");
        return;
      }

    const resultado = valor5 - (valor5 * (valor6 / 100));
    document.getElementById('outPorc3').value = `${resultado.toFixed(2).replace('.', ',')}`;
}