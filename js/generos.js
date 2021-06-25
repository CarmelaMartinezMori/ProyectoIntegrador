let lista = document.querySelector(".list")
let lista2 = document.querySelector (".list2")


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/`)
.then(response=>{
    return response.json()
    
})
.then(detailsGenero =>{
    console.log(detailsGenero)
    for(let i=0; i< detailsGenero.data.length; i++){
        if (detailsGenero.data[i].name=="Rock" || detailsGenero.data[i].name=="Rap/Hip Hop" ||
    detailsGenero.data[i].name== "Reggaetón"|| detailsGenero.data[i].name== "Pop"|| detailsGenero.data[i].name=="Jazz" ){
            lista.innerHTML+= 
            `<li> <a href="detallegeneros.html?id=${detailsGenero.data[i].id}"> 
                <img src="${detailsGenero.data[i].picture_xl}" alt= "${detailsGenero.data[i].name}"> 
                <h3 class= "listaGeneros"> ${detailsGenero.data[i].name} </h3> 
                </a>  
            </li>`
        }
    }
    for(let i=0; i< detailsGenero.data.length; i++){
        if (detailsGenero.data[i].name=="R&B" || detailsGenero.data[i].name=="Dance"|| detailsGenero.data[i].name=="Blues"|| detailsGenero.data[i].name=="Cumbia"|| detailsGenero.data[i].name=="Salsa"){
            lista2.innerHTML+= 
            `<li> 
            <a href="detallegeneros.html?id=${detailsGenero.data[i].id}">
                <img src="${detailsGenero.data[i].picture_xl}" alt= "${detailsGenero.data[i].name}">
                <h3 class= "listaGeneros">  ${detailsGenero.data[i].name} </h3>  
            </a>
            </li>`

}
}

})