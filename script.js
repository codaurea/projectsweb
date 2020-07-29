//  Média de escola, contendo duas notas e mostrar se o aluno esta aprovado ou reprovado
var nomes= ["Aurea", "Leticia", "Rondon", "Carine"];
var notasA = [9.0, 4.0, 8.0, 10];
var notasB = [10, 6.9, 7.9, 8.0 ];

function media(n1, n2) {
    return (n1 + n2 ) / 2

}

for (var index in nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2);
    

    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passaste(m));
}

function passaste(media){
    
    if (media >=7){
        return "Aprovado"
    }

    else{
        return "Reprovado"        
    
    }
}

