
// first we did "npm init -y"
// then we did npm i isomorphic-fetch
// then we add to this file the --const fetch = require("isomorphic-fetch");

const fetch = require("isomorphic-fetch");
const {createWriteStream}= require("fs");

async function fetchPokemon() {

    const res = await fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")

    const arraybuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arraybuffer);

    const writeStream = createWriteStream("./pokemon.json");
    // console.log(buffer)
    writeStream.write(buffer); // the write method can take a string or a buffer
}



fetchPokemon();






