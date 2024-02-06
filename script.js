function calcularArea() {
    var largura = parseFloat(document.getElementById('largura').value);
    var comprimento= parseFloat(document.getElementById('comprimento').value);
    
    // vereficar se os valores sao numneros
    if (isNaN(largura) || isNaN(comprimento)) {
        alert('favor inserir numeros validos');
        return;

    }
    // calcular a soma

    var resultado = largura*comprimento;


    document.getElementById('resultado').innerText='resultado: ' + resultado;

}