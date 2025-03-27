import frame from '@/assets/img-frame.png'
import { InformationNote } from '@/components/information-note'
import { ReturnButton } from '@/components/return-button'
import type { CharacterDetails } from '@/interfaces/character-details'
import { getEpisodesList } from '@/utils/get-episodes-list'
import { getId } from '@/utils/get-id'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { CharacterEpisodesList } from './character-episodes-list'

interface CharacterDetailProps {
  params: Promise<{
    id: string
  }>
}

export default async function CharacterDetail({
  params,
}: CharacterDetailProps) {
  const { id } = await params

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const data: CharacterDetails = await response.json()

  return (
    <div className="mx-auto w-full max-w-7xl space-y-4">
      <ReturnButton />

      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-10 md:gap-6">
        <div className="relative w-full max-w-xs h-fit">
          <Image
            src={frame}
            alt=""
            className="z-[1] relative top-0 left-0 w-full"
            placeholder="blur"
          />
          <Image
            src={data.image}
            alt={data.name}
            width={250}
            height={250}
            className="w-full absolute top-[5%] left-0 scale-[0.88]"
          />
          <h2
            title={data.name}
            className="z-[2] text-black absolute bottom-0 font-handwrite text-4xl p-4 w-full text-center truncate"
          >
            {data.name}
          </h2>
        </div>

        <InformationNote>
          <h3 className="text-3xl text-center underline underline-offset-4 mb-6">
            Information
          </h3>
          <ul className="flex flex-col items-center gap-2 text-xl">
            <li>Name: {data.name}</li>
            <li>Gender: {data.gender}</li>
            <li>
              Status:{' '}
              <span
                className={twMerge(
                  'px-1',
                  data.status === 'Dead' && 'bg-red-400',
                  data.status === 'Alive' && 'bg-green-500'
                )}
              >
                {data.status}
              </span>
            </li>
            <li>Species: {data.species}</li>
            <li>
              {data.origin.name === 'unknown' ? (
                `Origin: ${data.origin.name}`
              ) : (
                <Link
                  href={`/locations/${getId(data.origin.url)}`}
                  className="flex items-center gap-2 text-center"
                >
                  Origin: {data.origin.name}
                  <ArrowRight className="size-5 shrink-0" />
                </Link>
              )}
            </li>
            <li>Type: {data.type || 'unknown'}</li>
            <li>
              {data.location.name === 'unknown' ? (
                `Location: ${data.location.name}`
              ) : (
                <Link
                  href={`/locations/${getId(data.location.url)}`}
                  className="flex items-center gap-2 text-center"
                >
                  Location: {data.location.name}
                  <ArrowRight className="size-5 shrink-0" />
                </Link>
              )}
            </li>
          </ul>
        </InformationNote>
      </div>

      <div>
        <h2 className="text-3xl my-8 text-center md:text-start">Episodes</h2>
        <CharacterEpisodesList idList={getEpisodesList(data.episode)} />
      </div>
    </div>
  )
}
