import { PokemonCard } from '@/components/pokemon-card'
import { PokemonGrid } from '@/components/pokemon-grid'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <PokemonGrid />
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <PokemonCard name="test" />
        <PokemonCard name="test" />
        <PokemonCard name="test" />
        <PokemonCard name="test" />
      </div>
    </>
  )
}
