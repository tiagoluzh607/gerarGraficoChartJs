
//Usa o JQuery essa funcao executa somente quando toda pagina é carregada assim temos certeza que ele leu todo o arquivo dados.js
$(document).ready(function(){ 

    //variavel responsavel pelo eixo X do grafico
    var indiceTemporalList = [];

    //essas variaveis sao as linhas do grafico
    var dadosFakeList = [];
    var temperaturaAguaList = [];
    var atuadorMarchaLentaList = [];
    var posicaoNoMapaList = [];
    var numeroCilindrosList = [];

    

    for(var i=0; i < 25; i++){    //fiz com 25 registros para fazer com todo o json troque o 25 para dados.length
        let dado = dados[i];

        indiceTemporalList.push(dado.indiceTemporal);
        temperaturaAguaList.push(dado.temperaturaAgua);
        atuadorMarchaLentaList.push(dado.atuadorMarchaLenta);
        posicaoNoMapaList.push(dado.posicaoNoMapa);  
        numeroCilindrosList.push(dado.numeroCilindros); 

        dadosFakeList.push(Math.floor(Math.random() * 100));
    }



    /*Gera o Grafico */

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    data: {
        labels: indiceTemporalList, // Esta Lista Representa oque ficara no eixo X do gráfico
        datasets: [{ // cada Objeto JS abaixo é uma linha do gráfico
            label: 'Temperatura da Agua',
            backgroundColor: '#C24762',
            borderColor: '#C24762',
            data: temperaturaAguaList,
            fill: false,
        },{
            label: 'Posicao Mapa',
            backgroundColor: '#572877',
            borderColor: '#572877',
            data: posicaoNoMapaList,
            fill: false,
        },{
            label: 'Numero Cilindros',
            backgroundColor: '#C2478D',
            borderColor: '#C2478D',
            data: numeroCilindrosList,
            fill: false,
        },{
            label: 'Numeros Fake',
            backgroundColor: '#A379D2',
            borderColor: '#A379D2',
            data: dadosFakeList,
            fill: false,
        },{
            label: 'Atuador Marcha Lenta',
            fill: false,
            backgroundColor: '#85D6C5',
            borderColor: '#85D6C5',
            data: atuadorMarchaLentaList,
        }]
    },


    // Configuration options go here
    options: {

        responsive: true,
        title: {
            display: true,
            text: 'Exemplo de Gráfico para Emerson' // Titulo do Grafico
        },
        tooltips: {   // Se comentar essa configuração quando colocar o mouse em uma linha ele só vai mostrar as informações referentes aquela linha
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Indice Temporal' // Legenda Eixo X
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Valores' // Legenda Eixo Y
                }
            }]
        }


    }



    });



});