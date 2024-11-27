let usuario =[
    {nombre:"Carlos",edad:"30",email:"carlos@az.co"},
    {nombre:"Gambeta",edad:"29",email:"Gambe@ask.co"},
    {nombre:"Faseta",edad:"37",email:"fase@sja.co"}
];

let tabla= document.getElementById("tablaN");
usuario.map(usuario=>{
    let fila = document.createElement("tr");
    let celNombre= document.createElement("td");
    celNombre.textContent=usuario.nombre;
    fila.appendChild(celNombre);
    let celEdad = document.createElement("td");
    celEdad.textContent=usuario.edad;
    fila.appendChild(celEdad);
    let celEmail= document.createElement("td");
    celEmail.textContent=usuario.email;
    fila.appendChild(celEmail);

    tabla.appendChild(fila);
})
