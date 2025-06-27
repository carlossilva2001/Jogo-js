alert("Bem vindo ao jogo da media!!!!!");

let i = 0;
let soma  = 0;
let Numero = null;

alert("Digite um numero positivo para calcular a media ou um numero negativo para sair do jogo");
do {
        Numero = parseFloat(prompt("Digite um numero:"));
        if (Numero >= 0) {
            if (i === undefined) {
                i = 1;
                soma = 0;
            }
            i++;
            soma += Numero;
        }
        else {
                let media = soma / i;
                alert("A media dos numeros digitados é: " + media + "\n" + "E o total de numeros digitados é: " + i);
        }
    } 
}while (Numero >= 0);