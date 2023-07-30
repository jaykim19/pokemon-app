import { getPokemon } from "@/api/pokemon-api";
import Image from "next/image";
import Link from "next/link";
import backButton from "@/public/back.png";

export default async function PokemonDetail({params}: {params: {pokemonName: string}}) {
    const {pokemonName} = params;

    const pokemonInfo = await getPokemon(pokemonName);

    return (
        <>
            <div>
                <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            </div>
            <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <Image src={pokemonInfo.sprites.other['official-artwork'].front_default} alt={pokemonName} width="400" height="400" />
            </div>
            <div>
                <Link href="/"><Image src={backButton} alt="back" width={60} /></Link>
            </div>
        </>
    )
}