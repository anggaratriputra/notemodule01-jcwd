let result;

function greet(str) {
    result = str;
}

function hello() {
    greet("hello");
}

function arigatou() {
    greet("arigatou");
}

greet("halo bang");
hello();
arigatou();

console.log(result);
