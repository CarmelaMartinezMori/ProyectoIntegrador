
let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`;
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
        <div class=album> 
            <img src= ${details.cover_xl}>
        </div>
        <article class="songinfo">
            <h4> ${details.title}</h4>
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
        console.log(error);
    })        
    

