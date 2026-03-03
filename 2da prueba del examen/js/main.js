class Alumno {
    constructor(nombre, apellidos, puntos){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.puntos = puntos;
    }
    setPuntos(puntos){
        this.puntos = puntos;
    }
    getPuntos(){
        if (this.puntos >= 5){
            return "Apto.";
        } else {
            return "No apto."
        }
    }
};

function imprimirMensaje() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let points = document.getElementById('points').value;

    const nuevoAlumno = new Alumno(name, surname, points);
    points = Number(points);

    return new Promise((resolve, reject)=>
    setTimeout(() =>{
        if(!name || !surname || !points) {
            reject ("Datos no válidos");
        } else {
        resolve({
            alumn: `${nuevoAlumno.nombre} ${nuevoAlumno.apellidos}, ${nuevoAlumno.getPuntos()}`
})}}, 2000)
)};

async function showUserResult() {
   try{ const ponerEnConsola = await imprimirMensaje();
    console.log(ponerEnConsola);}
    catch (error) {
        console.error(error);
    }
};