fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(response =>{
    return response.json()
})
.then(data=>{
    console.log (data)
    let tracks = data.tracks
    let artists = data.artists
    let albums = data.albums

    let trackcontainer = document.querySelector ("#tracks")
    let albumcontainer = document.querySelector ("#albums")
    let artistcontainer = document.querySelector ("#artists")

    for (let i = 0; i < 5; i++) {
        const track = tracks.data[i];
        const artistt = artists.data[i];
        const album = albums.data[i];      
        
        trackcontainer.innerHTML+=`<li>
        <a href="canciones.html?id=${track.id}">
            <img src= ${track.album.cover_xl}>
            <h4> ${track.title}</h4>
            <p> Canción • ${track.artist.name} </p>
        </a>
    </li>`
        albumcontainer.innerHTML+=
        `<li>
        <a href="albums.html?id=${album.id}">
            <img src= ${album.cover_xl}>
            <h4> ${album.title}</h4>
            <p> Álbum • ${album.artist} </p>
        </a>
    </li>
    `
        artistcontainer.innerHTML+=
        `<li>
        <a href="artistas.html?id=${artistt.id}">
            <img src= ${artistt.picture_big}>
            <h4> ${artistt.name}</h4>
        </a>
    </li>
    `
     
    }



})