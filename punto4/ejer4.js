fetch( 'https://jsonplaceholder.typicode.com/posts ')
    .then(respuesta=>respuesta.json())
.then(datos=>{
    document.querySelector("#lista").textContent=datos.title;

   /* let lista=document.getElementById('lista');
    dato.forEach(lispost => 
        
      
        
    });*/
})
