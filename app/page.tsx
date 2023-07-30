import { PokemonGrid } from '@/components/pokemon-grid'
import { getPokemonList } from '@/api/pokemon-api'
import Image from 'next/image'

export default async function Home() {
  const pokemonList = await getPokemonList()
  return (
    <PokemonGrid pokemonList={pokemonList} />
  )
}