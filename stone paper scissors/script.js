
const buttons = document.querySelectorAll('.btn');
const para =document.querySelector('#main');
const para3 = document.querySelector('#dup2')
const para2=document.querySelector('#dup');
let choice;

let intcho;
let compcho;

let playscore=0;
let compscore=0;

let flag=0;

var dict ={}
dict[0]='stone'
dict[1]='paper'
dict[2]='scissors'
buttons.forEach((button)=>{button.addEventListener('click',updatebutton)})


function updatebutton(){
    choice = this.id;

    if (choice =='stone'){
        intcho=0;

    }
    else if (choice=='paper'){
        intcho=1;
    }
    else if (choice=='scissors'){
        intcho=2;
    }
    compcho=computerplay();

    playgame();

}
let computerplay=() => Math.floor(Math.random() * 3);
function playround(){
    let win =[[0,2,1],[1,0,2],[2,1,0]];
    let s = win[intcho][compcho]
    if (s==0){
        para3.textContent=`tie your choice ${choice} computer choice ${dict[compcho]}`

    }
    else if (s==1){
        para3.textContent=`you score,your choice ${choice} computer choice ${dict[compcho]} `
        playscore+=1
    }
    else if (s==2){
        para3.textContent=`computer score,your choice ${choice} computer choice ${dict[compcho]} `
        compscore+=1
    }

}
function playgame(){
    para.textContent = 'Choose rock,paper or scissors'
    playround();
    if (playscore ==5){
        para2.textContent= 'you won'
        playscore=0;
        compscore=0;
        flag=1


    }
    else if(compscore ==5){
        para2.textContent ='You lost'
        playscore=0;
        compscore=0;
        flag=1
    }
    else if (flag==1){
        para2.textContent=' ';
    }


}
console.log('hi')
