// api call to get pokemons
// use async and await for api calls
export async function getPokemonList() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0");
    const data = await res.json();
    return data.results;
}

export async function getPokemon(name: string) {
    const res = await fetch("https://pokeapi.co/api/v2/" + "pokemon/" + name);
    const data = await res.json();
    return data;
}