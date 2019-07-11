function random(num){
    console.log(Math.floor(Math.random) * 100 + 1);
}
function randomLetter(str){
    console.log(str[Math.floor(Math.random() * str.length)]);
}
function myGuy(str){
    console.log(str + ", my guy");
}
function string_N_times(str, num){
    for(let i = 0; i < num; i++){
        console.log(str);
    }
}
function hypotenuse(numA, numB){
    console.log(Math.sqrt((Math.pow(numA, 2) + (Math.pow(numB, 2)))))
}