


//first
console.log("start");
function a(){
    console.log("a");       
}
a();
console.log("End");





//second
console.log("start");
setTimeout(function cb(){
    console.log("callBack");
}, 5000);
console.log("end");

//third
console.log(start);

document.getElementById("btn").addEventListener("click", function cb() {
    console.log("callback");
});

console.log("end");



//fourth

console.log("start");
setTimeout(function cbt(){
    console.log("CB settimeout");
},5000);
fetch("http:").then(function cbf(){
    console.log("CB Netflix");
});
console.log("end");