const input = document.querySelector(".password__input");
const button = document.querySelector(".password__button");
const output = document.querySelector(".password__output");


let password; 


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
  
console.log('я'.charCodeAt(0));
  

button.addEventListener("click", ()=>{
    password = '';

    const N = input.value.length;
    console.log('input.textContent: ', input.textContent);
    console.log('N: ',  N);
    const Q  = N % 10;
    console.log('Q: ', Q);
    
    for (let i = 0; i <= 10; i++) {
        if( i >= 10 - Q && i<= 10){
            password += randomInteger(1,10).toString();
        }
        if(i>=1 && i<=2){
            password += String.fromCharCode(randomInteger(65,90))
        }

        if(i>=3 && i<=10-Q-1){
            password += String.fromCharCode(randomInteger(1072,1103))
        }
    }
    console.log('password: ', password);
    output.textContent = password.toString();
});