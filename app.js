const buttonEncriptar = document.getElementById('buttonEcriptar')
const buttonDesencriptar = document.getElementById('buttonDesencriptar')
const butttonCopiar = document.getElementById('buttonCopiar')
const resultText = document.getElementById('second___section__resultText')

const messaje__paragraph__text = document.getElementById('messaje__paragraph__text')
const error = document.getElementById('error')
const inputText = document.getElementById('InputText')
const paragraph__result = document.getElementById('paragraph__text')

const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" }

let ValorEncriptado
let valorDesencriptado

inputText.addEventListener('input',()=>{
    value=inputText.value
    console.log(value)
    let letras = /[A-Z]/g;
    let regEx = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    if (value.match(letras) || value.match(regEx)) {
        error.classList.add('error-text')
        inputText.classList.add('error-border')
    } else {
        inputText.classList.remove('error-border')
        error.classList.remove('error-text')
    }

})

buttonEncriptar.addEventListener('click',()=>{
    const inputValue = inputText.value
    Ocultar()
    encriptador(inputValue)
})

buttonDesencriptar.addEventListener('click',()=>{
    const inputValue = inputText.value
    desencriptar(inputValue)
})


function Ocultar(){
    butttonCopiar.style.display = 'block'
    resultText.style.display = 'block'
    messaje__paragraph__text.style.display = 'none'
    paragraph__result.style.display = 'none'
}

function encriptador(text){
    for(letra in reglas){
        ValorEncriptado=text=text.replaceAll(letra,reglas[letra])
    }
    resultText.innerText=ValorEncriptado
}

function desencriptar(text){
    for(letra in reglas){
        valorDesencriptado=text=text.replaceAll(reglas[letra],letra)

    }
    resultText.innerText=valorDesencriptado

}