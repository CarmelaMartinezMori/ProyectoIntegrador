let lista = document.querySelector(".list")
let lista2 = document.querySelector (".list2")

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/")
.then(response=>{
    return response.json()
})
.then(detalles=>{
    console.log(detalles)
    for (let i = 0; i < 5; i++) {
        const element = detalles.data[i]
        
        lista.innerHTML+=`<li> <a href="detallegeneros.html?id=${detalles.data[i].id}"> 
        <img src="${detalles.data[i].picture_xl}" alt= "${detalles.data[i].name}"> 
        <h3 class= "listaGeneros"> ${detalles.data[i].name} </h3> 
        </a>  
    </li>`

        lista2.innerHTML+=  `<li> 
        <a href="detallegeneros.html?id=${detalles  .data[i].id}">
            <img src="${detalles    .data[i].picture_xl}" alt= "${detalles  .data[i].name}">
            <h3 class= "listaGeneros">  ${detalles  .data[i].name} </h3>  
        </a>
        </li>`
    }
})