import { getPokemon } from "@/api/pokemon-api";
import Image from "next/image";
import Link from "next/link";

export default async function PokemonDetail({params}: {params: {pokemonName: string}}) {
    const {pokemonName} = params;

    const pokemonInfo = await getPokemon(pokemonName);

    return (
        <>
            <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <Image src={pokemonInfo.sprites.other['official-artwork'].front_default} alt={pokemonName} width="400" height="400" />
            <Link href="/"><h2 className="text-4xl text-bold pt-4">Back</h2></Link>
        </>
    )
}