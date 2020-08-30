var global = 333;
function escopo(op, x) {
    global = 200;
    if (op) {
        //variável só existe dentro do escopo
        var x_1 = 100;
    }
    return [x, global];
}
console.log(escopo(true, 0));
