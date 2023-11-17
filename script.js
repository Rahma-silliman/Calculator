const linkElement = document.querySelectorAll('link');
const container = document.querySelector('#container')
container.style.marginTop = "36rem"
const btnElement = document.querySelectorAll(".btn");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal")
console.log(btnElement);
const ecran = document.querySelector("#ecran");
let nb1;
let nb2;
let precedent;
let operateur = null;
let tableauOperateur = ['+','-','*','/'] ;
function addition(nb1,nb2){
    if(operateur == tableauOperateur[0]){
        return parseFloat(nb1) + parseFloat(nb2)
    }
    else if(operateur == tableauOperateur[1]){
        return parseInt(nb1) - parseInt(nb2)
    }
    else if(operateur == tableauOperateur[2]){
        return parseInt(nb1) * parseInt(nb2)
    }
    else if(operateur == tableauOperateur[2]){
        return parseInt(nb1) * parseInt(nb2)
    }

}
function soustraction(){

}
function multiplication(){

}
function division(){

}

const signe = document.querySelectorAll('.signe');

for (let i = 0; i < signe.length; i++) {
    signe[i].addEventListener('click', () => {
        switch(signe[i]){
            case "+":
                case "-":
                    case "*":
                        case "/":

        }
        if(signe[i].value == tableauOperateur[0]){
            console.log(signe[i].value);
            return nb1+nb2;
        }
  

    })
}



console.log(signe)
function affiche(val) {
    ecran.value += val
}
function del() {
    let a = ecran.value.split('')
    delete a[a.length - 1]
    ecran.value = a.join('')
    console.log(typeof ecran.value)

}
function calculer() {
    
    let a = ecran.value;
    let b = eval?.(`${a}`);
    ecran.value = b;

}
function effacer() {
    ecran.value = '';
}
Math.pow