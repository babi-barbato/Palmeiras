/*Funções para SlideShow*/
function btn1(){
    //Mudando cor dos botões
    button1.style.backgroundColor = "#1D4F2B";
    button2.style.backgroundColor = "#6ec287";
    button3.style.backgroundColor = "#6ec287";
    button4.style.backgroundColor = "#6ec287";

    //mudando imagens
    ft1.style.display = "block";
    ft2.style.display = "none";
    ft3.style.display = "none";
    ft4.style.display = "none";
}
function btn2(){
    button2.style.backgroundColor = "#1D4F2B";
    button1.style.backgroundColor = "#6ec287";
    button3.style.backgroundColor = "#6ec287";
    button4.style.backgroundColor = "#6ec287";

    ft2.style.display = "block";
    ft1.style.display = "none";
    ft3.style.display = "none";
    ft4.style.display = "none";
}
function btn3(){
    button3.style.backgroundColor = "#1D4F2B";
    button1.style.backgroundColor = "#6ec287";
    button2.style.backgroundColor = "#6ec287";
    button4.style.backgroundColor = "#6ec287";

    ft3 .style.display = "block";
    ft1.style.display = "none";
    ft2.style.display = "none";
    ft4.style.display = "none";
}
function btn4(){
    button4.style.backgroundColor = "#1D4F2B";
    button1.style.backgroundColor = "#6ec287";
    button2.style.backgroundColor = "#6ec287";
    button3.style.backgroundColor = "#6ec287";
    
    ft4 .style.display = "block";
    ft1.style.display = "none";
    ft2.style.display = "none";
    ft3.style.display = "none";
}

/*Função para verificar os campos do feeedback*/
function feedback(){
    var nome = iptNome.value;
    var email = iptEmail.value;
    var comentario = iptComentario.value;

    if(nome == "" || email == "" || comentario == ""){
        divAlerta.style.visibility = 'visible';
    }else if(email.indexOf('@' && '.') == -1){
        alert("Preencha um Email válido");
    }else{
        alert('FeedBack enviado com sucesso!');
        iptEmail.value = "";
        iptNome.value = "";
        iptComentario.value = "";
    }
}