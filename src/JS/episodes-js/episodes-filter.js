const BASEURL = "https://rickandmortyapi.com/api/episode";
const name_input = document.querySelector("#name_input");
const select = document.querySelector("#select");
const visualList = document.querySelector("#episops_list");

let episod = '';

// fetch 

const options = {
    method: "GET",
}


const getAllEpisodes = () =>{
    return fetch(`${BASEURL}?episode=${episod}` , options).then(responce => {
return responce.json()
    })
}

getAllEpisodes()
.then(result => {
    // console.log(result)
    // console.log(result.results)
    result.results.map(episod => {
        console.log(episod)
        // console.log(episod.name)
    })
})

// renderCharacters

const renderEpisodes = (episodes) => {
const murkUp = episodes.map(episod)
}