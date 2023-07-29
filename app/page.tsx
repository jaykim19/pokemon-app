import { PokemonCard } from '@/components/pokemon-card'
import { PokemonGrid } from '@/components/pokemon-grid'
import { getPokemonList } from '@/api/pokemon-api'
import Image from 'next/image'

export default async function Home() {
  const pokemonList = await getPokemonList()
  return (
    <>
      <PokemonGrid pokemonList={pokemonList} />
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
        {
          pokemonList.map((pokemon: any) => {
            return (
              <PokemonCard name={pokemon.name} />
            )
          })
        }
      </div>
    </>
  )
}
