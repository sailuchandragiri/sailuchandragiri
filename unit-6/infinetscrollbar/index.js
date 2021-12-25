

let element = document.getElementById("main");
let line = 1;
const load = () => {
   for(let i=0; i<25;i++){
    let li = document.createElement("li");
    li.innerText=`Masai Student ${line++}`;
    element.append(li);
   }
}


//detect when reach to bottom
element.addEventListener("scroll", ()=>{
    if(element.scrollTop+element.clientHeight>=element.scrollHeight){
        load();
    }
})

load();