let exibirSenha = document.querySelector('.fa-eye-slash');
const login = document.querySelector('.botao')

exibirSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else inputSenha.setAttribute('type', 'password')
})

login.addEventListener('click', () => {
    window.location.href = "html/demanda.html"
})