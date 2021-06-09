
    let objetoId = new URLSearchParams(location.search);
    let id =  objetoId.get('id');

    let apiKey = `6ee4ba95329b7c4561d268ce9d34aca3`

    let albumDetails= document.querySelector(".div1")
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/albums/${id}`)
        .then(response =>{
            return response.json
        })
        .then(details =>{
            albumDetails.innerHTML = `
            <div class=album> 
                <img src= ${details.cover}>
            </div>
            <article>
                <h4> ${details.title} </h4>
            </article>
            `
        })
        .catch(error => console.log(error));
    