var global:number = 333;

function escopo(op: boolean, x: number): any {
    global = 200;
    if (op) {
        //variável só existe dentro do escopo
        let x = 100;
    }

    return [x, global];
}

console.log(escopo(true, 0));