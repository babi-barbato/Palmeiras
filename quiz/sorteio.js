/*
1-Weverton; 2-Marcos Rocha; 3-Murilo; 4-Gomez;
5-Piquerez; 6-Ze Rafael; 7-Raphael Veiga;
8-Gabriel Menino; 9-Rony; 10-Dudu; 11-Arthur
*/
function sorteio(){
    divJogador.innerHTML = "";
    var jogador = (Math.random() * 12).toFixed()

    if(jogador == 0 || jogador == 12){/*Faço isso para tirar o VS Estatistico */
        divJogador.innerHTML += `
        <h1>VOCÊ É O RAPHAEL VEIGA</h1>
        <p><a href="">Clique aqui</a> e descubra mais sobre ele</p>
        `;
    }else if(jogador == 1){

    }
    alert(jogador);
}