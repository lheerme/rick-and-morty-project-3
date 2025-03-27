import episodesLogo from '@/assets/episodes-logo.png'
import { FilterInput } from '@/components/filter-input'
import Image from 'next/image'
import { EpisodesList } from './episodes-list'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Episodes | Rick And Morty Project',
}

interface EpisodesProps {
  searchParams: Promise<{
    page?: string
    query?: string
  }>
}

export default async function Episodes({ searchParams }: EpisodesProps) {
  const params = await searchParams

  return (
    <div className="flex flex-col gap-8 w-full">
      <Image
        src={episodesLogo}
        className="max-w-md w-full mx-auto"
        alt="characters"
        placeholder="blur"
      />
      <FilterInput className="max-w-2xl w-full mx-auto" />
      <EpisodesList params={params} />
    </div>
  )
}
