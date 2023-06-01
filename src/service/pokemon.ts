import axios from "./index"

const getPokemonList = async () => {
    const res = await axios.get("/pokemon");
    return await res.data;
}
const getPokemonDetail = async (pokemonName:any) => {
    const res = await axios.get("/pokemon/" + pokemonName);
    return await res.data;
}

export default {
    getPokemonList,
    getPokemonDetail
};




