
const calcular = document.getElementById('calcular');



function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    const valorImc = peso / Math.pow(altura, 2);

    if (nome !== '' && altura !== '' && peso !== '') {

        let classificacao = '';

        if (valorImc < 18.4) {
            classificacao = 'a baixo do peso!';
        } 
        else if (valorImc >= 18.5 && valorImc <= 24.99){
            classificacao = 'com o peso ideal.';
        } 
        else if (valorImc >= 25 &&valorImc <= 29.99){
            classificacao = 'levemente com sobrepeso.';
        }
        else if (valorImc >= 30 && valorImc <= 34.99){
            classificacao = 'com obesidade grau um.';
        }
        else if (valorImc >= 35 && valorImc <= 39.99){
            classificacao = 'com obesidade grau dois.';
        }
        else if (valorImc > 40){
            classificacao = 'com obesidade grave.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc.toFixed(1)}. Você está ${classificacao}`;
    }
    else {
        resultado.textContent = 'Preencha todos os campos';
    }
}
calcular.addEventListener('click', imc);

