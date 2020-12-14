array = []
array_Letras_Mai = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
possibilidadesArray = []


//USAR O SPLIT, GERAR UMA COMBINAÇÃO EM DUO  E DEPOIS DIVIDIR
for (let number = 0; number < 100; number++) {

    let tamanhoArray = array.length
    if (array.includes(number) == false) {
        array[tamanhoArray] = number
    //console.log((number/10).toFixed(1));
    console.log((number/10).toFixed(1).split('.'));





    }
    for (var posição in array_Letras_Mai) {
        let letrasMai = array_Letras_Mai[posição]
        
        let possibilidades01 = number + letrasMai 
        if (possibilidadesArray.includes(possibilidades01) == false) { //verifica se esse numero já tá no array         
            
            let tamanhoArrayP = possibilidadesArray.length
            possibilidadesArray[tamanhoArrayP] = possibilidades01
            //console.log(possibilidades01);
        }    
        let possibilidades02 =  letrasMai + number
        if (possibilidadesArray.includes(possibilidades02) == false) { //verifica se esse numero já tá no array         
            
            let tamanhoArrayP = possibilidadesArray.length
            possibilidadesArray[tamanhoArrayP] = possibilidades02
            //console.log(possibilidades02);
        } 
        let possibilidades03 =  letrasMai + number + letrasMai + number
        if (possibilidadesArray.includes(possibilidades03) == false) { //verifica se esse numero já tá no array         
            
            let tamanhoArrayP = possibilidadesArray.length
            possibilidadesArray[tamanhoArrayP] = possibilidades03
            //console.log("          /");
        }
        let possibilidades04 =  letrasMai + number + number + letrasMai
        if (possibilidadesArray.includes(possibilidades04) == false) { //verifica se esse numero já tá no array         
            
            let tamanhoArrayP = possibilidadesArray.length
            possibilidadesArray[tamanhoArrayP] = possibilidades04
            //console.log("          /");
        }
        let possibilidades05 =  number + letrasMai + number + letrasMai
        if (possibilidadesArray.includes(possibilidades05) == false) { //verifica se esse numero já tá no array         
            
            let tamanhoArrayP = possibilidadesArray.length
            possibilidadesArray[tamanhoArrayP] = possibilidades05
            //console.log("          /");
        }
        let possibilidades06 =  number + letrasMai + letrasMai + number
        if (possibilidadesArray.includes(possibilidades06) == false) { //verifica se esse numero já tá no array         
            
            let tamanhoArrayP = possibilidadesArray.length
            possibilidadesArray[tamanhoArrayP] = possibilidades06
            //console.log(possibilidades06);
        }
        
    }
}
//console.log(possibilidadesArray,'possibilidades');
var senha = ''
if (possibilidadesArray.includes(senha) == true) { //verifica se esse numero já tá no array         

    console.log("Senha encontrada", senha);
}
/*
console.log(possibilidades)
console.log(array,'number ');
console.log(array_Letras_Mai),'letras mai';

for(let number2 = 0; number2 < 10; number2++
for(let number2 = 0; number2 < 10; number2++
console.log((Math.random()*10).toFixed(0));
*/