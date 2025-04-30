/*let readlineSync=require('readline-sync');
let n = 0;
total = 0;

console.log('programa que soma dez numeros');
 
n= parseFloat(readlineSync.question('Informe o primeiro numero:    ')); 
total = total +n;
n= parseFloat(readlineSync.question('Informe o segundo numero:    ')); 
total = total +n;
n= parseFloat(readlineSync.question('Informe o terceiro numero:    ')); 
total = total +n;
n= parseFloat(readlineSync.question('Informe o quarto numero:    '));
total = total +n;
n= parseFloat(readlineSync.question('Informe o quinto numero:    '));
total = total +n;
n= parseFloat(readlineSync.question('Informe o sexto numero:    '));
total = total +n;
n= parseFloat(readlineSync.question('Informe o setimo numero:    '));
total = total +n;
n= parseFloat(readlineSync.question('Informe o oitavo numero:    '));
total = total +n;
n= parseFloat(readlineSync.question('Informe o nono numero:    '));
total = total +n;
n= parseFloat(readlineSync.question('Informe o decimo numero:    '));
total = total +n;

console.log(`total = ${total}`);*/

let readlineSync = require('readline-sync');
let n = -1;
let total = 0;
let i = 1;

console.log('Programa que soma números');
while (n!=0)
{
    n = parseFloat(readlineSync.question(`Informe o ${i} numero:    `));
    total = total + n;
    i++;
}

console.log(`Total = ${total}`);

/*for (let i = 0; i <= 10; i++) {
    let n = parseFloat(readlineSync.question(`Informe o número ${i}/10:    `));
    total += n;
}

console.log(`Total = ${total}`);*/