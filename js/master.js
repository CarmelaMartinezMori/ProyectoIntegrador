function goBack() {
    window.history.back();
};

function goForward() {
    window.history.forward();
};
window.addEventListener (`load`, function(){
    //Declaro una variable para guardar la Api Key
    let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`;
    //Capturo el elemento del DOM sobre el cual voy a hacer modificaciones
    let listadoAlbums = document.querySelector(`#albums`);
    //Obtengo los datos de la query string con el objeto location y parámetro .search. Luego con el método get () obtengo el valor de id.
    let queryString = new URLSearchParams (location.search)  
    let codigo = queryString.get ("id")

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${codigo}/albums?key=${apiKey}`)
    .then(response =>{
        return response.json()
    })
    .then (infoAlbums =>{
        console.log(infoAlbums);
        let data = infoAlbums.data;
        console.log(data);
        for(let i=0;i<5;i++){
        listadoAlbums.innerHTML +=
        `<li>
            <a href="albums.html?id=${data[i].id}">
                <img src= ${data[i].cover_xl}>
                <h4> ${data[i].title}</h4>
                <p> Álbum • ${data[i].artist.name} </p>
            </a>
        </li>
        `
        }
    })
    .catch (error =>{
        console.log(error);
    })

    let listadoTracks = document.querySelector(`#tracks`);
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${codigo}/tracks?key=${apiKey}`)
    .then(response =>{
        return response.json()
    })
    .then (infoTracks =>{
        console.log(infoTracks);
        let data = infoTracks.data;
        console.log(data);
        for(let i=0;i<5;i++){
        listadoTracks.innerHTML +=
        `<li>
            <a href="canciones.html?id=${data[i].id}">
                <img src= ${data[i].album.cover_xl}>
                <h4> ${data[i].title}</h4>
                <p> Canción • ${data[i].artist.name} </p>
            </a>
        </li>
        `
        }
    })
    .catch (error =>{
        console.log(error);
    })

    let listadoArtistas = document.querySelector(`#artists`);
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${codigo}/artists?key=${apiKey}`)
    .then(response =>{
        return response.json()
    })
    .then (infoArtista =>{
        let data = infoArtista.data;
        for(let i=0;i<5;i++){
        listadoArtistas.innerHTML +=
        `<li>
            <a href="artistas.html?id=${data[i].id}">
                <img src= ${data[i].picture_big}>
                <h4> ${data[i].name}</h4>
            </a>
        </li>
        `
        }
    })
    .catch (error =>{
        console.log(error);
    })
})
