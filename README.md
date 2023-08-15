![filtrar array js](https://raw.githubusercontent.com/sergiecode/filtrar-seleccionadas-tutorial-js/master/seleccionadas.jpg)

# Tutorial: Filtrar elementos seleccionados desde un array en JavaScript

Este tutorial te guiará a través del proceso de filtrar elementos seleccionados desde un array utilizando JavaScript. En este ejemplo específico, trabajaremos con dos arrays: uno contiene las IDs de elementos seleccionados y el otro contiene una lista de elementos que pueden ser seleccionados. Filtraremos los elementos seleccionables según las IDs seleccionadas y mostraremos el resultado en la consola.

## Requisitos

Antes de comenzar, asegúrate de tener instalado un entorno de desarrollo que te permita ejecutar código JavaScript. Puedes usar tu navegador web o una herramienta como Node.js.

## Paso 1: Configuración inicial

Primero, necesitas definir las dos variables que usarás en el proceso de filtrado. La variable `seleccionada` contendrá las IDs de los elementos que deseas seleccionar, y la variable `seleccionables` contendrá una lista de objetos que pueden ser seleccionados. Aquí tienes un ejemplo de cómo podrían verse:

```

let seleccionada = [1, 4];
let seleccionables = [
    { nombre: 'María', id: 1 },
    { nombre: 'Ricardo', id: 3 },
    { nombre: 'Lara', id: 3 },
    { nombre: 'Sergie', id: 4 },
];

```

## Paso 2: Filtrar elementos seleccionados

Para filtrar los elementos seleccionables según las IDs seleccionadas, puedes usar el método `filter` en el array `seleccionables`. Utilizaremos la función de callback proporcionada al método `filter` para verificar si la ID de un elemento está incluida en el array `seleccionada`. Si la condición es verdadera, ese elemento se incluirá en el nuevo array filtrado.

```
let resultado = seleccionables.filter(elemento => seleccionada.includes(elemento.id));
```

## Paso 3: Mostrar el resultado

Finalmente, puedes mostrar el resultado del proceso de filtrado en la consola utilizando `console.log`. El array `resultado` contendrá los objetos que han sido seleccionados según las IDs proporcionadas en el array `seleccionada`.

```
console.log(resultado);
```

## Resultado esperado

Después de ejecutar el código, la consola debería mostrar el siguiente resultado:


```
[
    { "nombre": "María", "id": 1 },
    { "nombre": "Sergie", "id": 4 }
]
```

Estos son los elementos seleccionados filtrados de acuerdo a las IDs proporcionadas en el array `seleccionada`.
