document.getElementById("btnForm").addEventListener("click", function (event) {
    event.preventDefault();
});

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

function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }