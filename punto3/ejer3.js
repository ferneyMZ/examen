let boton = [0,1,2,3,4];

let botones=document.getElementById("botones");

boton.forEach(btn =>{
    let buton=document.createElement("button");
    buton.textContent=`Buton${btn}`;
    buton.addEventListener('click',()=>{
        console.log (`Buton ${btn} haciendo click`);
    });
    botones.appendChild(buton)
})