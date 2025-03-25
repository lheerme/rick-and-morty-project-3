import imageFrame from '@/assets/paper-note.png'
import type { Result as EpisodeList } from '@/interfaces/episodes'
import Image from 'next/image'
import Link from 'next/link'

interface CharacterEpisodesListProps {
  idList: number[]
}

export async function CharacterEpisodesList({
  idList,
}: CharacterEpisodesListProps) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${idList}`
  )
  const data: EpisodeList[] | EpisodeList = await response.json()

  if (!Array.isArray(data)) {
    return (
      <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
        <Link
          href={`/episodes/${data.id}`}
          key={data.id}
          title={data.name}
          className="relative flex items-center justify-center w-full max-w-[240px] scale-95 hover:scale-100 hover:transition-transform"
        >
          <Image
            src={imageFrame}
            alt=""
            className="relative inset-0"
            placeholder="blur"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 font-handwrite text-black text-center w-[97%]">
            <p className="truncate text-xl px-3">{data.name}</p>
            <p className="text-lg">{data.episode}</p>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
      {data.map(result => {
        return (
          <Link
            href={`/episodes/${result.id}`}
            key={result.id}
            title={result.name}
            className="relative flex items-center justify-center w-full max-w-[240px] scale-95 hover:scale-100 hover:transition-transform"
          >
            <Image
              src={imageFrame}
              alt=""
              className="relative inset-0"
              placeholder="blur"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 font-handwrite text-black text-center w-[97%]">
              <p className="truncate text-lg sm:text-xl px-3">{result.name}</p>
              <p className="text-lg">{result.episode}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
