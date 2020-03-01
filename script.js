function enviar_contato(){

    var email_pessoa = document.getElementById('enviar_email').value;

    if (email_pessoa == "" || email_pessoa.indexOf('@') == -1 || email_pessoa.indexOf('.') == -1){
        alert("Digite um e-mail válido");
        return true;
    }else{
        alert("O email " + email_pessoa + " foi enviado")
        document.getElementById('titulo_site').innerHTML = "Bem vindo " + email_pessoa + "!"
        return false;
    }
    

}