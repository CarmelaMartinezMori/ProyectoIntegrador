window.onload=()=>{
    let playlist= JSON.parse(window.localStorage.getItem("listtracks"))
    let contenedor = document.querySelector(".songname")
    if (playlist) {
        for (let i = 0; i < playlist.length; i++) {
            const cancion = playlist[i];
            let durationMin = Math.floor(cancion.duration / 60);
                let durationSec = cancion.duration - durationMin * 60;
                // console.log(durationSec);
                if (durationSec < 10) {
                    durationSec = '0' + durationSec;
                }
                contenedor.innerHTML+= `     <div class="details">
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
            
        }
        
    } else {
        contenedor.innerHTML+= ` <h2 class ="nohay">No Hay CaCnciones</h2> `

        
    }
    let tacho = document.querySelector(".clear")
    tacho.onclick=()=>{
        window.localStorage.clear()
    }
}