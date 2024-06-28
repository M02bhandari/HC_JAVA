// Immediately Invoked function Express (IIFE)

(function chai (){
    console.log(`BD CONNECTED`);
})();

// global scope pollution cecleratio avaoid this

( (name) => {
console.log(`DB CONNECTED two ${name}`);
}) ('bhandrai')