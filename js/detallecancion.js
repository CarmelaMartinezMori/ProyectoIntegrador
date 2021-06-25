window.addEventListener("load", function () {
    let queryString = location.search
    let objetoQuery = new URLSearchParams(queryString)
    let cancionId = objetoQuery.get("id")


    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionId}`)
    .then(response =>{
        return response.json()
    })
    .then (infoTracks =>{
        console.log(infoTracks);
        let contenedor = document.querySelector("#divart")
        contenedor.innerHTML= `    <div class="cancion">
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
        let heart = document.querySelector("#heart")
        heart.addEventListener("click", function () {
            if (window.localStorage.getItem("playlist")) {
    
    
                let listaCanciones = JSON.parse(window.localStorage.getItem("playlist"))
    
                listaCanciones.push(infoTracks)
                window.localStorage.setItem("playlist", JSON.stringify(listaCanciones))
            }else{ 
                let listaCanciones =[infoTracks]
                window.localStorage.setItem("playlist", JSON.stringify(listaCanciones))
    
            }
        })
       let reproducir = document.querySelector(".playback")
       let reproductor=document.querySelector(".contenedor")
       reproducir.addEventListener("click",function(){
reproductor.innerHTML=`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=100%&height=2&color=007FEB&layout=dark&size=medium&type=tracks&id=${infoTracks.id}&app_id=1" width="100%" height="62px"></iframe>`
       })
    })



   

})