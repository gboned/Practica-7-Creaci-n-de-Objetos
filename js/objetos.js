/******************************/
/*                            */
/*       CREAR 3 OBJETOS      */
/*                            */
/******************************/

// Creo el primer 'objeto', que será un alumno.
var alumno = {
    dni: '47410562P',
    nombre: 'Daniel',
    primerApellido: 'Ruiz',
    segundoApellido: 'Sanz',
    nivel: 'ESO',
    curso: 'Primero',
    grupo: 'A',
  
    // Creo un método para que devuelva la información principal del alumno.
    // Para llamar a esta función se hace escribiendo alumno.fichaDeAlumno().
    fichaDeAlumno: function() {
        console.log(`DNI: ${this.dni}. Nombre: ${this.nombre}. Apellidos: ${this.primerApellido} ${this.segundoApellido}.`);

    },

    // Creo un método que indique que el alumno ha pasado de curso.
    // Para llamar a esta función se hace escribiendo alumno.promocionarCurso().
    promocionarCurso: function() {
        this.curso = "Segundo";
        console.log(`El alumno con DNI ${this.dni} ha promocionado al curso ${this.curso} de la ${this.nivel}.`)

    }
};