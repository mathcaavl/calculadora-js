// Definindo Variaveis
const displayCalc = document.querySelector('.visor-calc');
const resultado = document.querySelector('.resultado');

// Definindo os Botões e atribuindo a um array
const listBtnNum = []
listBtnNum.push(document.querySelector('.zero'));
listBtnNum.push(document.querySelector('.um'));
listBtnNum.push(document.querySelector('.dois'));
listBtnNum.push(document.querySelector('.tres'));
listBtnNum.push(document.querySelector('.quatro'));
listBtnNum.push(document.querySelector('.cinco'));
listBtnNum.push(document.querySelector('.seis'));
listBtnNum.push(document.querySelector('.sete'));
listBtnNum.push(document.querySelector('.oito'));
listBtnNum.push(document.querySelector('.nove'));
listBtnNum.push(document.querySelector('.somar'));
listBtnNum.push(document.querySelector('.subtracao'));
listBtnNum.push(document.querySelector('.divisao'));
listBtnNum.push(document.querySelector('.multiplicar'));
listBtnNum.push(document.querySelector('.ponto'));

// Outros Botões
const deletar = document.querySelector('.deletar');
const apagarTudo = document.querySelector('.limpar');

// Atribuindo Eventos
for (let i = 0; i < listBtnNum.length; i++) {
    listBtnNum[i].addEventListener('click', addValor)
}
resultado.addEventListener('click', resolver);
deletar.addEventListener('click', apagar);
apagarTudo.addEventListener('click', limparVisor)

// Funções
function addValor (e) {
    displayCalc.value += e.target.value;
}

function resolver () {
    var resultadoFinal = eval(displayCalc.value);
    displayCalc.value = resultadoFinal;
}

function apagar () {
    var displaySub = displayCalc.value;
    displayCalc.value = displaySub.substring(0, displaySub.length -1);
}

function limparVisor () {
    displayCalc.value = "";
}