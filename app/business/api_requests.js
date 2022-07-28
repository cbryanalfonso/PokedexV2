import axios from "axios";

export function getPokemones() {

    const config = {
        method: 'get',
        url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}