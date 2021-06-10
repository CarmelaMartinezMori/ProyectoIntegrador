let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`;
let listadoAlbums = document.querySelector(`#albums`);

let queryString = new URLSearchParams (location.search)  
let codigoAlbum = queryString.get ("id")

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${codigoAlbum}/albums?key=${apiKey}`)
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
            <a href="albums.html">
                <img src= ${data[i].cover_xl}>
                <h4> ${data[i].title}</h4>
                <p> Álbum • ${data[i].artist.name}
                <p> ${data[i].id} </p>
            </a>
        </li>
        `
        }
    })
    .catch (error =>{
        console.log(error);
    })
    