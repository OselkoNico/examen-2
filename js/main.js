class Alumno {
    nombre;
    apellido;
    puntos;

    constructor(nombreIn, apellidoIn, puntosIn){
        this.nombre = nombreIn;
        this.apellido = apellidoIn;
        this.puntos = puntosIn;
    }
    setPuntos(puntos){
        this.puntos = puntos;
    }
    getPuntos(){
        if (this.puntos>=5){
            return "Apto";
        } else {
            return "No apto";
        };
    }
};

function promesaAlumno() {
    let nameIn = document.getElementById('name').value;
    let surnameIn = document.getElementById('surname').value;
    let pointsIn = document.getElementById('points').value;
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (nameIn.length === 0 || surnameIn.length === 0 || pointsIn.length === 0){
            reject(new Error(`Datos no válidos.`))
        } else {
    pointsIn = Number(pointsIn);
    const nuevoAlumno = new Alumno(nameIn, surnameIn, pointsIn);
    resolve({
        alumno: nuevoAlumno,
        mensaje: `${nuevoAlumno.nombre} ${nuevoAlumno.apellido} ${nuevoAlumno.getPuntos()}`})}
    }, 2000);
})};

async function showUserResult() {
    try {
        const user =  await promesaAlumno();
        console.log(user);
    } catch (error) {
        console.error(error);
    }
    
};