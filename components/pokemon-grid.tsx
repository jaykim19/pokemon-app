'use client'
// should be used because of useState

import { useState } from "react"
import { PokemonCard } from "./pokemon-card"

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({pokemonList}: PokemonGridProps) {
    const [text, setText] = useState("")
    
    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter((pokemon: any) => pokemon.name.toLowerCase().includes(text.toLowerCase()))
    }

    const filteredPokemons = searchFilter(pokemonList);

    return (
        <>
            <div>
                <h3 className="text-2xl py-6 text-center">Search Your Pokemon</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5"></div>
                <input 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" 
                    value={text} 
                    id="pokemonName" 
                    autoComplete="off" 
                    placeholder="Enter Your Pokemon Name"
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <h3 className="text-4xl pt-12 pb-6 text-center">Pokemons</h3>

            {
                filteredPokemons.length === 0 ?
                (
                    <div className="mb-32 grid text-center">
                        <h2 className="text-2xl py-6 text-center">No Pokemons Found!!!</h2>
                    </div>
                )
                :
                (
                    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-7 lg:text-left">
                        {
                            filteredPokemons.map((pokemon: any) => {
                                return (
                                    <PokemonCard name={pokemon.name} key={pokemon.name} />
                                )
                            })
                        }
                    </div>
                )
            }
            
        </>
    )
}