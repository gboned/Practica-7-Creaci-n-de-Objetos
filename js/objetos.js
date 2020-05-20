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

// Creo el segundo objeto, que será un móvil, el cual ha sido adquirido de segunda mano por una persona.
var movil = {
    identificacion: '010928/00/389023/3',
    dniDuenyo: '48107402D',
    marca: 'Huawei',
    modelo: 'P20 lite',
    anyosAntiguedad: 2,
    memoriaRam: '4GB',
    bateria: '3000mAh',

    // Creo un método que devuelve la información de la compra de este móvil.
    // Para llamar a esta función se hace escribiendo movil.fichaDeMovil().
    fichaDeMovil: function() {
        console.log(`La persona con DNI ${this.dniDuenyo} ha adquirido el móvil ${this.marca} ${this.modelo} que tiene ${this.anyosAntiguedad} años de antigüedad`);
    
    }
}