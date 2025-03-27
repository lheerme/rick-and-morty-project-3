import charactersLogo from '@/assets/characters-logo.png'
import type { Metadata } from 'next'
import Image from 'next/image'
import { CharacterList } from './character-list'
import { CharacterListFilter } from './character-list-filter'

export const metadata: Metadata = {
  title: 'Characters | Rick And Morty Project',
}

interface CharactersProps {
  searchParams: Promise<{
    page?: string
    name?: string
    species?: string
    gender?: string
    status?: string
  }>
}

export default async function Characters({ searchParams }: CharactersProps) {
  const params = await searchParams

  return (
    <div className="flex flex-col gap-8 w-full">
      <Image
        src={charactersLogo}
        className="max-w-md w-full mx-auto"
        alt="characters"
        placeholder="blur"
      />
      <CharacterListFilter />
      <CharacterList params={params} />
    </div>
  )
}
