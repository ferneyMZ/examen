const tareas = [
    { id: 1, nombre: "Compras" },
    { id: 2, nombre: "aseo" },
    { id: 3, nombre: "Estudiar JavaScript" },
    { id: 4, nombre: "Hacer ejercicio" },
    { id: 5, nombre: "Leer un libro" }
];


let listaTareas = document.getElementById("listaTareas");


function actualizarTareas() {
  
    listaTareas.innerHTML = '';

   
    tareas.map((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = tarea.nombre; 
        const botonEliminar = document.createElement("button"); 
        botonEliminar.textContent = "Eliminar"; 

        
        botonEliminar.addEventListener("click", () => {
            eliminarTarea(index); 
        });

        li.appendChild(botonEliminar); 
        listaTareas.appendChild(li); 
    });
}


function eliminarTarea(index) {
    tareas.splice(index, 1); 
    actualizarTareas(); 
}


actualizarTareas();