document.write('<div class="container mt-3">');

//Imagen logo remoto
document.write('<img src="https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png" alt="logo ADL" class="float-right" />');
document.write('<h1>Notas Finales</h1>');

//Se obtiene información del alumno y la carrera
var nombre = prompt('Ingrese su nombre');
var apellido = prompt('Ingrese su apellido');
var carrera = prompt('Ingrese su carrera');

//Se despliega ficha alumno
document.write('<dl class="row">',
    '<dt class="col-2 p-0">Nombre:</dt>',
    '<dd class="col-10">' + nombre + ' ' + apellido + '</dd>',
    '<dt class="col-2 p-0">Carrera:</dt>',
    '<dd class="col-10">' + carrera + '</dd>',
    '</dl>');

//tabla con notas
document.write('<table class="table">',
    '<thead class="thead-dark">',
    '<tr>', '<th scope="col">Ramo</th>',
    '<th scope="col" class="text-right">Nota 1</th>',
    '<th scope="col" class="text-right">Nota 2</th>',
    '<th scope="col" class="text-right">Nota 3</th>',
    '<th scope="col" class="text-right">Promedio</th>',
    '</tr>',
    '</thead>',
    '<tbody>');
// Obtenemos las notas de cada ramo
// Nota 1
var ramo_1 = prompt('Ingrese el ramo 1');
var r1_nota_1 = prompt('Ingrese la nota 1 [' + ramo_1 + ']');
var r1_nota_2 = prompt('Ingrese la nota 2 [' + ramo_1 + ']');
var r1_nota_3 = prompt('Ingrese la nota 3 [' + ramo_1 + ']');

// Calcular el promedio de notas
var r1_promedio = (+r1_nota_1 + +r1_nota_2 + +r1_nota_3) / 3;

document.write('<tr>',
    '<th scope="row">' + ramo_1 + '</th>',
    '<td class="text-right">' + r1_nota_1 + '</td>',
    '<td class="text-right">' + r1_nota_2 + '</td>',
    '<td class="text-right">' + r1_nota_3 + '</td>',
    '<td class="text-right">' + r1_promedio.toFixed(2) + '</td>',
    '</tr>');

// Nota 2
var ramo_2 = prompt('Ingrese el ramo 2');
var r2_nota_1 = prompt('Ingrese la nota 1 [' + ramo_2 + ']');
var r2_nota_2 = prompt('Ingrese la nota 2 [' + ramo_2 + ']');
var r2_nota_3 = prompt('Ingrese la nota 3 [' + ramo_2 + ']');
// Calcular el promedio de notas
var r2_promedio = (+r2_nota_1 + +r2_nota_2 + +r2_nota_3) / 3;

document.write('<tr>',
    '<th scope="row">' + ramo_2 + '</th>',
    '<td class="text-right">' + r2_nota_1 + '</td>',
    '<td class="text-right">' + r2_nota_2 + '</td>',
    '<td class="text-right">' + r2_nota_3 + '</td>',
    '<td class="text-right">' + r2_promedio.toFixed(2) + '</td>',
    '</tr>');

// Nota 3
var ramo_3 = prompt('Ingrese el ramo 3');
var r3_nota_1 = prompt('Ingrese la nota 1 [' + ramo_3 + ']');
var r3_nota_2 = prompt('Ingrese la nota 2 [' + ramo_3 + ']');

// Nota Aprobación y nota requerida
var notaAprobacion = prompt('Ingrese la nota de aprobación');
var n3 = +notaAprobacion * 3 - (+r3_nota_1 + +r3_nota_2);

document.write('<tr>',
    '<th scope="row">' + ramo_3 + '</th>',
    '<td class="text-right">' + r3_nota_1 + '</td>',
    '<td class="text-right">' + r3_nota_2 + '</td>',
    '<td class="text-right">-</td>',
    '<td class="text-right">-</td>',
    '</tr>');

document.write('</tbody>');
document.write('</table>');

// Se agrega el nota que indica la calificacion necesaria para aprobar en tercera asignatura
document.write(
    '<p>Para aprobar el ramo <b>' +
    ramo_3 +
    '</b> con nota <b>' +
    notaAprobacion +
    '</b>, necesitas obtener un ' +
    n3 +
    ' en la nota 3</p>'
);

document.write('</div>');