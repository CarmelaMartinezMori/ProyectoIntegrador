let queryString= location.search //capturo query string
let objetoQuery= new URLSearchParams(queryString) //transformando lo que me traia el querystring en objeto para manipular
let resultadoBusqueda= objetoQuery.get("searchBar") 

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+resultadoBusqueda)
.then(response =>{
    return response.json()
})
.then(info=>{
    let spinnerWrapper = document.querySelector('.spinner-wrapper');
    spinnerWrapper.style.visibility = 'hidden';
    console.log (info)
    let tracks =document.getElementById("tracks") //capturamos el elemento
    let dataTracks= info.data

    for (let i = 0; i < 5; i++){
        const element = dataTracks[i];
        tracks.innerHTML+=`<li>
        <a href="canciones.html?id=${element.id}">
          <img src= ${element.album.cover_xl}>
          <h4> ${element.title}</h4>
          <p> Canción • ${element.artist.name} </p>
      </a>
   </li>`

        
    }
})
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+resultadoBusqueda)
.then(response =>{
    return response.json()
})
.then(info=>{
    let spinnerWrapper = document.querySelector('.spinner-wrapper');
    spinnerWrapper.style.visibility = 'hidden';
    console.log (info)
    let album =document.getElementById("albums") //capturamos el elemento
    let dataAlbums= info.data

    for (let i = 0; i < 5; i++){
        const element = dataAlbums[i];
        album.innerHTML+=`
        <li> 
          <a href="albums.html?id=${element.id}">
              <img src= ${element.cover_xl} alt="Album Cover Not Available">
              <h4> ${element.title}</h4>
              <p> Álbum • ${element.artist.name} </p>
          </a>
        </li>`
    

        
    }
})
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+resultadoBusqueda)
.then(response =>{
    return response.json()
})
.then(info=>{
    let spinnerWrapper = document.querySelector('.spinner-wrapper');
    spinnerWrapper.style.visibility = 'hidden';
    console.log (info)
    let artist =document.getElementById("artists") //capturamos el elemento
    let dataArtists= info.data

    for (let i = 0; i < 5; i++){
        const element = dataArtists[i];
        artist.innerHTML+=`<li>
        <a href="artistas.html?id=${element.id}">
          <img src= ${element.picture_big}>
          <h4> ${element.name}</h4>
        </a>
      </li>`
    

        
    }
})