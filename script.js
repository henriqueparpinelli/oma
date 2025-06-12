function soma (){
    let numero_um = document.getElementById('primeiro_numero').value;
    let numero_dois = document.getElementById('segundo_numero').value;

    let soma_numero = numero_um + numero_dois
    alert(numero_um)
    document.getElementById('resultado').textContent = 'resultado' + soma_numero;

    
}