window.onload=()=>{ //cuando la ventana se cargue entera cargame esto 
    let queryString= location.search // para detectar el query string
    let objetoQuery= new URLSearchParams(queryString) //transformando lo que me traia el querystring en objeto para manipular
    let idAlbums= objetoQuery.get("id") 

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+idAlbums)
    .then(response =>{
        return response.json()
    })
    .then(infoAlbums=>{ 
        console.log(infoAlbums)
        let container = document.querySelector('#divart')
        container.innerHTML+= `<div class="album"> 
        <img src= ${infoAlbums.cover_xl}>
    </div>
    <article class="songinfo">
        <h4 class="title" > ${infoAlbums.title}</h4>
        <h2 class= "fecha"> ${infoAlbums.release_date} </h2>
        <p> Álbum by <a href="artistas.html?id=${infoAlbums.artist.id}"> ${infoAlbums.artist.name}</a></p>
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
    }

    )


let canciones = document.querySelector('.ulSongs');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+idAlbums+ "/tracks")
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
}