function heyZonaed(){
    console.log("Hey zonaed")
}
function thanks(){
    console.log("Ok, thanks");
}
heyZonaed();
console.log("What's your task deadline?");
const date = 29;
console.log("It's 29 july");
const task = "Done my task";
const salary = "paid";
thanks();

// function new:
function doubleIt(num){
    const result = num * 2;
    return result;
 // console.log(result);
}
doubleIt(5);
doubleIt(50);
doubleIt(1000);

const first = doubleIt(5);
const second = doubleIt(20);
const total = first + second;
console.log(total);

// multi add
function add(sum1, sum2){
    const result = sum1 + sum2;
    return result;
}
const sum = add(10, 20);;
    console.log(sum)
