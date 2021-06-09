let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`;
let listadoAlbums = document.querySelector(`#albums`);

let queryString = new URLSearchParams (location.search)  
let codigoAlbum = queryString.get ("id")

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${codigoAlbum}?key=${apiKey}` )
    .then(response =>{
        return response.json
    })
   .then(albums =>{
       
       //for(let i=0; i<5;i++){
        listadoAlbums.innerHTML += `
        <li> 
            <a href= "albums.html"> 
                <img src=${albums.cover_small}>
                <h4>${albums.title}</h4>
                <p> Álbum • ${albums.artist}</p>
                </a> 
        </li>
        <li> 
            <a href= "albums.html"> 
                <img src=${albums.cover_small}>
                <h4>${albums.title}</h4>
                <p> Álbum • ${albums.artist}</p>
            </a> 
        </li>
        `
       //}
    })
    .catch(error =>{
        console.log(`Ha ocurrido el siguiente error: ${error}`);
    })

 
            