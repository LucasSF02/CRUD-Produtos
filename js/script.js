const EMAIL = "admin@admin.com";
const SENHA = "123456";


let campoEmail = document.querySelector("#Email");
let campoSenha = document.querySelector("#senha");
let btnLogin = document.getElementById("btn-login")


btnLogin.addEventListener("click", () => {
    
    let emailDigitado = campoEmail.value.toLowerCase();
    let senhaDigitada = campoSenha.value;

    autenticar(emailDigitado, senhaDigitada);

});


function autenticar(email, senha) {

    
    const URL = 'http://localhost:3400/login';

    
    fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    })
        
        .then(response => response = response.json())
        .then(response => {
            console.log(response)

            if (!!response.mensagem) {
                alert(response.mensagem);
                return;
            }

            salvarToken(response.token);
            salvarUsuario(response.usuario);

            window.open('CRUD.html', '_self');
        })
        
        .catch(erro => {
            console.log(erro)
        })


}
