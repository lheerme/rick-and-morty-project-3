import { InformationNote } from '@/components/information-note'
import { ReturnButton } from '@/components/return-button'
import type { EpisodeDetails } from '@/interfaces/episode-details'
import { getEpisodesList } from '@/utils/get-episodes-list'
import { EpisodeCastList } from './episode-cast-list'

interface EpisodeDetailProps {
  params: Promise<{
    id: string
  }>
}

export default async function EpisodeDetail({ params }: EpisodeDetailProps) {
  const { id } = await params

  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
  const data: EpisodeDetails = await response.json()

  return (
    <div className="max-w-7xl w-full mx-auto space-y-4 px-6 py-2">
      <ReturnButton />
      <div className="w-full flex justify-center">
        <InformationNote>
          <h3 className="text-3xl text-center underline underline-offset-4 mb-6">
            {data.name}
          </h3>
          <ul className="flex flex-col items-center gap-2 text-xl">
            <li>Episode: {data.episode}</li>
            <li>Date: {data.air_date}</li>
          </ul>
        </InformationNote>
      </div>

      <h2 className="text-3xl my-8 text-center md:text-start">Cast</h2>
      <EpisodeCastList idList={getEpisodesList(data.characters)} />
    </div>
  )
}
