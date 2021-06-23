let recuperoStorage = localStorage.getItem(`playlist`);
let playlist = JSON.parse(recuperoStorage); //pasarlo a JSON para manipularlo
let listaCanciones = document.querySelector(``.playlist);
console.log(playlist);

if(recuperoStorage == null || recuperoStorage == "[]"){
playlist = [];
listasCanciones.inner.HTML +=  `<h1 class="noHay>`
console.log(listaCanciones);
}
else{
    listaCanciones.innerHTML += `<h1 class="noHay>`
    for(let i = 0;i <playlist.length;i++){
          fetch(`https://cors-anywhere.herokuapp.com//https://apideezer.com/track/${playlist[i]}` )
          .then(function(response){
              return response.json();
          })
          .then(function(data){
              console.log(data);
              listaCanciones.innerHTML += `<a href="detalleCancion.html?id=`+data.id"><li><i class="fas fa-heart"
              <button class="boton">Eliminar de la playlist</button>`


              let eliminar = document.querySelector(`.boton`);
              eliminar.addEventListener(`click`,function(){

              })
          })
        }
    }
    let clear = document.querySelector (`.clear`)
    clear.addEventListener(`click`,() => {
        window.ocalStorage.clear(``);
    })
          
    
