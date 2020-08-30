var nome:string = 'Rodrigo';
var idade:number = 26;
var empregado:boolean = true;

//tipo generico 
var generico:any = 20.2;
generico = 'Rdorigo';

//primeira forma de declarar um Array;
var arr:string[] = ['rodrigo', 'Jacinto'];

//segunda forma de declaração de Array - exclusiva do typescript
var arr2:Array<string> = ['ronaldo', 'neymar'];

//Array genérico 
var arr3:any[] = ['Rodrigo', 20.2, true];

console.log(arr3);