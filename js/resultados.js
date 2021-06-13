function goBack() {
  window.history.back();
};

function goForward() {
  window.history.forward();
};

window.addEventListener(`load`, function(){
  //Agregar spinner

  let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`;

  let queryString = new URLSearchParams (location.search)  
  let buscar = queryString.get ("searchBar");
  console.log(buscar);

  let albums = document.getElementById("albums");
  fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${buscar}&key=${apiKey}`)
    .then (response =>{
    return response.json();
    })
    .then(infoAlbum=>{
      let resultados = infoAlbum.data;
      for (let i=0; i<5; i++)
      albums.innerHTML+= `<li>
            <a href="albums.html?id=${resultados[i].id}">
                <img src= ${resultados[i].cover_xl} alt="Album Cover Not Available">
                <h4> ${resultados[i].title}</h4>
                <p> Álbum • ${resultados[i].artist.name} </p>
            </a>
        </li>`
    })
    .catch (error =>{
      console.log(error);
  })
  let artistas =document.getElementById("artists");
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${buscar}&key=${apiKey}`)
  .then(response =>{
    return response.json()
  })
    .then (infoArtista =>{
    let resultadosArtsitas = infoArtista.data;
    for(let i=0;i<5;i++){
    artistas.innerHTML +=
    `<li>
        <a href="artistas.html?id=${resultadosArtsitas[i].id}">
            <img src= ${resultadosArtsitas[i].picture_big}>
            <h4> ${resultadosArtsitas[i].name}</h4>
        </a>
    </li>
    `}
  })
  .catch (error =>{
    console.log(error);
  })

  let tracks =document.getElementById("tracks");
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${buscar}&key=${apiKey}`)
  .then(response =>{
    return response.json()
  })
    .then (infoTrack =>{
    let resultadosTracks = infoTrack.data;
    console.log(resultadosTracks);
    for(let i=0;i<5;i++){
    tracks.innerHTML +=
    `<li>
        <a href="canciones.html?id=${resultadosTracks[i].id}">
            <img src= ${resultadosTracks[i].album.cover_xl}>
            <h4> ${resultadosTracks[i].title}</h4>
        </a>
    </li>
    `}
  })
  .catch (error =>{
    console.log(error);
  })
    
})