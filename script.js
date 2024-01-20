var nbpeople=document.getElementById("count");
var saveel=document.getElementById("saveel")


console.log(saveel);

let count=0;

function increment(){
  count++;
  nbpeople.textContent=count;//cette ligne indique qu'on va stocker la valeur de count dans nbpeople
}

function save(){
    let countstr=count+" - ";
    saveel.textContent+=countstr;
    console.log(count);
} 

