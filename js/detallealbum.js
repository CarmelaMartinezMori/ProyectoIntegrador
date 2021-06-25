let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`; //declaro variable
let albumDetails= document.querySelector(".div1");
    
let queryString = new URLSearchParams(location.search);
let codigoAlbum =  queryString.get("id");

console.log("EL ID ES " + codigoAlbum);
    
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${codigoAlbum}?key=${apiKey}`)
    .then(response =>{
        return response.json()
    })
    .then(details =>{
        console.log(details.data);
        albumDetails.innerHTML = `
        <div class="album"> 
            <img src= ${details.cover_xl}>
        </div>
        <article class="songinfo">
            <h4 class="title" > ${details.title}</h4>
            <h2 class= "fecha"> ${details.release_date} </h2>
            <p> Álbum by <a href="artistas.html?id=${details.artist.id}"> ${details.artist.name}</a></p>
        </article>
        <div class="favplay">
            <a href="#" class="heartho">
                <i class="bi bi-heart" id="heart"></i>
            </a>
            <a href="#" class="playback">
            <i class="bi bi-play-fill" id="play"></i>
            </a>
        </div>
        <div class="viewplaylist">
           <a href="#"> <h5> View Playlist </h5> </a>
        </div>
    
        `
    })
    .catch(error => {
        console.log(error)
    })     

    let canciones = document.querySelector('.ulSongs');
   
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+codigoAlbum+"/tracks")
    .then(response => {
        return response.json()        
    })
    .then(infoSongs=>{
        
        let temas = infoSongs.data;

        for(let i=0; i<temas.length; i++){
            canciones.innerHTML+= `
            <div class="details">
            <li> <a href="canciones.html?idDelTrack=${temas[i].id}"> <h3 class="tituloo"> ${temas[i].title} </h3> </li>
            <h3 class="duracion"> ${temas[i].duration}</h3></a>
            </div>`
        } 
  


    })