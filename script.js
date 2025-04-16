const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    let login = formulario.usuario.value;
    let senha = formulario.senha.value;
    let loginCerto = 'ricardo';
    let senhaCorreta = '123456';
    console.log(login,senha)

    if(login === loginCerto) {
        if(senha === senhaCorreta){
            console.log("login e senha corretos")
            window.location.href = 'inicial.html';
        } else {
            alert('Login e senha incorretos!')
        }
    } else {
        alert('Login e senha incorretos!')
    }
    

})