import { NotFoundResult } from '@/components/not-found-result'
import { NoteRoot, NoteSpan, NoteTitle } from '@/components/note'
import { PaginationWithLinks } from '@/components/ui/pagination-with-links'
import type { Episodes } from '@/interfaces/episodes'

interface EpisodesListProps {
  params: {
    page?: string | undefined
    query?: string | undefined
  }
}

export async function EpisodesList({ params }: EpisodesListProps) {
  const { query, page } = params

  const response = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${page ?? 1}&name=${query ?? ''}`
  )
  const data: Episodes = await response.json()

  return (
    <div className="w-full flex flex-1 flex-col">
      <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
        {data.results?.map(async result => {
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
      {!data.results && <NotFoundResult text="Episode not found :/" />}
      {data.info?.pages > 1 && (
        <div className="mt-auto">
          <PaginationWithLinks
            page={Number(page ?? 1)}
            pageSize={1}
            totalCount={data.info.pages}
          />
        </div>
      )}
    </div>
  )
}
