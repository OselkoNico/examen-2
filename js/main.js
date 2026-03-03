class Alumno {
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
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let points = document.getElementById('points').value;
    points = Number(points);
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (!name || !surname || !points){
            reject(new Error(`Datos no válidos.`))
        } else {
    const nuevoAlumno = new Alumno(name, surname, points);
    resolve({
        alumno: (nuevoAlumno.name && nuevoAlumno.surname),
        mensaje: `${nuevoAlumno.getPuntos()}`})}
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