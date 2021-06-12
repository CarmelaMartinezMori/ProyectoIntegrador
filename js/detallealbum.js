
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
        </article>
        `
    })
    .catch(error => {
        console.log(error);
    })        
    

