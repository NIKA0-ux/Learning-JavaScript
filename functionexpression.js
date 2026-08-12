const sayHello = function (name){
    return`Hello, ${name}`;
}
sayHello("Samson");
console.log(sayHello("Samson"));

const helloFormat = sayHello;
console.log(helloFormat("Fiyin"));