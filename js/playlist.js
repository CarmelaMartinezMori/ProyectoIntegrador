window.addEventListener("load", function () {
    let cancionesStorage = localStorage.getItem("playlist");
    let playlist = JSON.parse(cancionesStorage); //pasarlo a JSON para manipularlo
    let listaCanciones = document.querySelector(`.songname`);
    console.log(playlist);

    if (!playlist) {
        playlist = [];
        listaCanciones.innerHTML += ` <h2 class ="nohay">No Hay Canciones</h2> `

        console.log(listaCanciones);
    } else {
        for (let i = 0; i < playlist.length; i++) {
            const cancion = playlist[i]
            let durationMin = Math.floor(cancion.duration / 60);
            let durationSec = cancion.duration - durationMin * 60;
            // console.log(durationSec);
            if (durationSec < 10) {
                durationSec = '0' + durationSec;
            }
            listaCanciones.innerHTML += `     <div class="details">
        <div class="numbername">
            <a href="canciones.html?id=${cancion.id}">
                <p class="num">${i+1}</p>
                <p class="name">${cancion.title}</p>
            </a>
        </div>
        <div class="favmin">
           
            <p>${durationMin}:${durationSec}</p>
         </div>
    </div>`
        };




        let clear = document.querySelector(`.clear`)
        clear.addEventListener(`click`, () => {
            window.localStorage.clear();
        })
       
    }
})