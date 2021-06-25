function goBack() {
  window.history.back();
};

function goForward() {
  window.history.forward();
};

window.addEventListener(`load`, function(){
  //Agregar spinner
  let spinnerWrapper = document.querySelector('.spinner-wrapper');
  setTimeout(function () {
    spinnerWrapper.style.visibility = 'hidden';
  }, 1500);

  let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`;

  let queryString = new URLSearchParams (location.search)  
  let buscar = queryString.get ("searchBar");

  let error = document.querySelector("#error");

  if (buscar === ""){
    error.innerHTML += `<h4 id="margen"> Ingrese su búsqueda </h4>`;
    resultados.classList.add ("resultados");
  } else if (buscar.length <= 3){
    error.innerHTML += `<h4 id="margen"> Por favor ingrese más caractéres para realizar la búsqueda </h4>`;
    resultados.classList.add ("resultados");
  } else {
    error.innerHTML+= `<h4 id="terminoBuscado"> Término buscado: ${buscar} </h4>`;
  }

  let error2 = document.getElementsByClassName("error2")
  let albums = document.getElementById("albums");
  fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${buscar}&key=${apiKey}`)
    .then (response =>{
      return response.json();
    })
    .then(infoAlbum=>{
      let resultados = infoAlbum.data;
        if (resultados == null){
          error2.innerHTML += `<h3> No se encontraron resultados en Álbumes </h3>`;
        } else{for (let i=0; i<5; i++){
          albums.innerHTML+= `
          <li> 
            <a href="albums.html?id=${resultados[i].id}">
                <img src= ${resultados[i].cover_xl} alt="Album Cover Not Available">
                <h4> ${resultados[i].title}</h4>
                <p> Álbum • ${resultados[i].artist.name} </p>
            </a>
          </li>`
        }
      }
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
      let resultadosArtistas = infoArtista.data;
      if (resultadosArtistas == null){
        error2.innerHTML += `<h3> No se encontraron resultados en Artistas </h3>`;
      } else{
          for(let i=0;i<5;i++){
          artistas.innerHTML +=
            `<li>
              <a href="artistas.html?id=${resultadosArtistas[i].id}">
                <img src= ${resultadosArtistas[i].picture_big}>
                <h4> ${resultadosArtistas[i].name}</h4>
              </a>
            </li>`
          }
        }
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
      if (resultadosTracks == null){
        error2.innerHTML += `<h3> No se encontraron resultados en Canciones </h3>`;
      }else{
        for(let i=0;i<5;i++){
          tracks.innerHTML +=
            `<li>
                <a href="canciones.html?id=${resultadosTracks[i].id}">
                  <img src= ${resultadosTracks[i].album.cover_xl}>
                  <h4> ${resultadosTracks[i].title}</h4>
                  <p> Canción • ${resultadosTracks[i].artist.name} </p>
              </a>
           </li>`
        }
      }
    })
  .catch (error =>{
    console.log(error);
  })
})