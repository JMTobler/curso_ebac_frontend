const form = document.getElementById('form-numeros');
let numB = document.getElementById('numero-b');
let numA = document.getElementById('numero-a');
let formValido = false;

function validarB (b) {
    return parseInt(b) > parseInt(numA.value);
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const sucesso = `B: ${numB.value} é maior que A: ${numA.value}`;

    if(validarB(numB.value)) {
        document.querySelector('.mensagem-sucesso').innerHTML = sucesso;
        document.querySelector('.mensagem').style.display = 'block';

        numA.value = '';
        numB.value = '';
    } else {
        numB.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    }

})

numB.addEventListener('keyup', function(e) {
    formValido = validarB(e.target.value);

    if (!formValido) {
        numB.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        numB.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
})