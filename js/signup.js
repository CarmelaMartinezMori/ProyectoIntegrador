function goBack() {
    window.history.back();
};


window.addEventListener(`load`,function(){
  

    let apellido = "Fuentes";
    console.log(apellido.length);
    //-----------------------------
    let formulario = document.querySelector(`form`);
    let nombre = document.querySelector(`[name=nombre]`);
    //Capturar el elemento donde mostraremos el error
    let mensaje = document.getElementById(`mensaje`);


    formulario.addEventListener(`submit`, function(e){
        e.preventDefault();
        if(nombre.value === ``){
            mensaje.innerHTML = `El campo nombre no puede estar vacío`;
            mensaje.style.color = `red`;
            mensaje.classList.add(`mensajeError`);
            nombre.focus()
    
        }else if (nombre.value.length < 3){
            mensaje.innerHTML = `Ingresa más letras puto`;
            nombre.focus()
            //.classlist.toggle (si existe se lo quita, si no se lo coloca)
        }
        else{
            formulario.submit();
        }
    })

    //Controlando los eventos del usuario
    nombre.addEventListener(`input`, function(){
        mensaje.innerHTML = ``;
        mensaje.classList.remove(`mensajeError`)
    })
    //Evento focus
    nombre.addEventListener(`focus`, function(){
        
        nombre.style.backgroundColor= `tomato`;
    })
    //Evento blur
    nombre.addEventListener(`blur`, function(){
        nombre.style.backgroundColor = "black";
    })
})