import { InformationNote } from '@/components/information-note'
import { ReturnButton } from '@/components/return-button'
import type { LocationDetails } from '@/interfaces/location-details'
import { getEpisodesList } from '@/utils/get-episodes-list'
import type { Metadata } from 'next'
import { LocationResidentsList } from './location-residents-list'

export async function generateMetadata({
  params,
}: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params

  const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
  const data: LocationDetails = await response.json()

  return {
    title: `${data.name} | Rick And Morty Project`,
  }
}

interface LocationDetailProps {
  params: Promise<{
    id: string
  }>
}

export default async function LocationDetail({ params }: LocationDetailProps) {
  const { id } = await params

  const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
  const data: LocationDetails = await response.json()

  return (
    <div className="max-w-7xl w-full mx-auto space-y-4 px-6 py-2">
      <ReturnButton />
      <div className="w-full flex justify-center">
        <InformationNote>
          <h3 className="text-3xl text-center underline underline-offset-4 mb-6">
            {data.name}
          </h3>
          <ul className="flex flex-col items-center gap-2 text-xl">
            <li>Type: {data.type || 'unknown'}</li>
            <li>Dimension: {data.dimension}</li>
          </ul>
        </InformationNote>
      </div>

      <h2 className="text-3xl my-8 text-center md:text-start">Residents</h2>
      <LocationResidentsList idList={getEpisodesList(data.residents)} />
    </div>
  )
}
