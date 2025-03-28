import { NoteRoot, NoteSpan, NoteTitle } from '@/components/note'
import type { Result as EpisodeList } from '@/interfaces/episodes'

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
        <NoteRoot href={`/episodes/${data.id}`} key={data.id} title={data.name}>
          <NoteTitle>{data.name}</NoteTitle>
          <NoteSpan>{data.episode}</NoteSpan>
        </NoteRoot>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
      {data.map(result => {
        return (
          <NoteRoot
            href={`/episodes/${result.id}`}
            key={result.id}
            title={result.name}
          >
            <NoteTitle>{result.name}</NoteTitle>
            <NoteSpan>{result.episode}</NoteSpan>
          </NoteRoot>
        )
      })}
    </div>
  )
}
