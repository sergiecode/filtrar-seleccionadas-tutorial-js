

let seleccionada = [1, 4];
let seleccionables = [
    { nombre: 'María', id: 1 },
    { nombre: 'Ricardo', id: 3 },
    { nombre: 'Lara', id: 3 },
    { nombre: 'Sergie', id: 4 },
];
let resultado = seleccionables.filter(elemento => seleccionada.includes(elemento.id));
console.log(resultado);


[{ "nombre": "María", "id": 1 }, { "nombre": "Sergie", "id": 4 }]


    