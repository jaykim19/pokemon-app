
// api call to get pokemons
// use async and await for api calls
export async function getPokemonList() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const data = await res.json();
    return data.results;
}