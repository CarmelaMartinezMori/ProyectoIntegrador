function goBack(){
    window.history.back();
};
function goForward(){
    window.history.forward();
}
window.addEventListener("load", function(){

    let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`;
    let artistas = document.querySelector("#artists");
    let nombreDelGenero = document.querySelector("#nombreDelGenero");

    let querystring=location.search
    let queryString =new URLSearchParams(querystring)
    let id = queryString.get("id")
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        nombreDelGenero.innerHTML += `Artistas de ${data.name}`;
    })
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)
    .then(response =>{
        return response.json();
        
    })
    .then(infoArtista =>{
        console.log(infoArtista)
        
        for (let i=0;i<5;i++){
            artistas.innerHTML+= 
            `
                <li>
                    <a href= "artistas.html?id=${infoArtista.data[i].id}">
                        <img src="${infoArtista.data[i].picture_xl}" alt="Foto no disponible">
                        <h4> ${infoArtista.data[i].name}</h4>
                    </a>
                </li>`
        }   
    })  
    .catch (error =>{
        console.log(error);
    })   
})