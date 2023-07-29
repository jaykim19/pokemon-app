'use client'
// should be used because of useState

import { useState } from "react"

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({pokemonList}: PokemonGridProps) {
    const [text, setText] = useState("")

    // test
    console.log(pokemonList)

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
                    placeholder="Enter Your Pokemon Name..." 
                    onChange={(event) => setText(event.target.value)} 
                />
            </div>
            <h3 className="text-4xl pt-12 pb-6 text-center">Pokemons</h3>
        </>
    )
}