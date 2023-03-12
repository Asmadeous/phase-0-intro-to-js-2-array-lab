// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function members(cats){
 console.log(cats);
};
function destructivelyAppendCat(Array){
    cats.push("Ralph")
};
function destructivelyPrependCat(Array){
    cats.unshift("Bob")
};
function destructivelyRemoveLastCat(Array){
    cats.pop()
};
function destructivelyRemoveFirstCat(Array){
    cats.shift()
};

function appendCat (Array) {
    let arr = [...cats]
    arr.push(Array)
    return arr
};

function prependCat  (Array) {
    let arr = [...cats]
    arr.unshift(Array)
    return arr
}
function removeLastCat (){
    let arr = [...cats]
    arr.pop();
    return arr;
}
function removeFirstCat ()  {
    let arr = [...cats]
    arr.shift();
    return arr;
}