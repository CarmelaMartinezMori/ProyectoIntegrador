window.onload=()=>{ //cuando la ventana se cargue entera cargame esto 
    let queryString= location.search
    let objetoQuery= new URLSearchParams(queryString) //transformando lo que me traia el querystring en objeto para manipular
    let idCancion= objetoQuery.get("id") 

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+idCancion)
    .then(response =>{
        return response.json()
    })
    .then(infoTracks=>{
        console.log (infoTracks)
        let container = document.querySelector("#divart")
        container.innerHTML+= `    <div class="cancion">
        <img src="${infoTracks.album.cover_big}" alt="Peaches" class="fotocancion">
    </div>
    <article class="songinfo">
        <h4>${infoTracks.title}</h4>
         <p>Song by <a href="artistas.html?id=${infoTracks.artist.id}">${infoTracks.artist.name} </a> </p>
        <a href="albums.html?id=${infoTracks.album.id}"><p> ${infoTracks.album.title} </p> </a>
    </article>
    <div class="favplay">
        <a href="miplaylist.html" class="heartho"> <i class="far fa-heart" id="heart"></i></a>
        <button class="playback"><i class="fas fa-play " id="play"></i> </button>
    </div>
    <div class="viewplaylist">
       <a href="miplaylist.html"><h5>View Playlist</h5> </a>
    </div>
        
        `
        let corazon= document.getElementById("heart")
        corazon.addEventListener("click",()=>{
            let playlist=[]
            if (window.localStorage.getItem("listtracks")) {
                playlist = JSON.parse(window.localStorage.getItem("listtracks"))
                playlist.push(infoTracks)
                
            }else{
                playlist= [infoTracks]

            }
            window.localStorage.setItem("listtracks", JSON.stringify(playlist))
        })
    })
}