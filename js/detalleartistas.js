let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`; //declaro variable
let artistsDetails= document.querySelector(".div1");
    
let queryString = new URLSearchParams(location.search);
let codigoAlbum =  queryString.get("id");

console.log("EL ID ES " + codigoAlbum);
let topAlbums = document.querySelector ("#albums");


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigoAlbum}?key=${apiKey}`)
.then(respuesta=>{
    return respuesta.json()
    
})

.then(detailss =>{
    console.log(detailss)
    artistsDetails.innerHTML=`
    <div class="Fotoartista"> 
        <img src=${detailss.picture_xl}>
    </div>
    <article class="artistinfo"
    <h4 class="title">${detailss.name}</h4>
    <h2 class= > `})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigoAlbum}/albums`)
.then(respuesta=>{
    return respuesta.json()
    
})

.then (informacionAlbum=>{
    console.log(informacionAlbum)
    let albumArtista= informacionAlbum.data
    console.log(albumArtista)
    
    for (let i = 0; i < 5; i++) {

        topAlbums.innerHTML+=        
        `<li>
            <a href="albums.html?id=${albumArtista[i].id}">
            <img src= "${albumArtista[i].cover_xl}">
            
            </a>
        </li>`}


    })
    .catch (error =>{
        console.log(error);
    })