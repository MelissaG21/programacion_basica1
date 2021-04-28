//<>
let materias = {
    plataformas: [
        { nombre: 'Melissa', calificacion: 7 },
        { nombre: 'Ximena', calificacion: 9 },
        { nombre: 'Alejandro', calificacion: 6 }
    ],
    IO: [
        { nombre: 'Melissa', calificacion: 9 },
        { nombre: 'Maritrini', calificacion: 9 },
        { nombre: 'Ximena', calificacion: 10 },
        { nombre: 'Aketzalli', calificacion: 9 }
    ]
    ,
    paradigmas:
        [{ nombre: 'Gabriel', calificacion: 9 },
        { nombre: 'Melissa', calificacion: 9 }]
}

let ls = [];
for (materia in materias) {
    ls.push(materias[materia]);
}

ls.forEach((materia) => {
    materia.forEach((alumno) => {
        console.log(`Nombre: ${alumno.nombre}, calificiacion: ${alumno.calificacion}`);
    });
});
