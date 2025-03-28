import {
  CharacterPolaroidImage,
  CharacterPolaroidRoot,
  CharacterPolaroidTitle,
} from '@/components/character-polaroid'
import { NotFoundResult } from '@/components/not-found-result'
import { PaginationWithLinks } from '@/components/ui/pagination-with-links'
import type { Characters } from '@/interfaces/characters'

interface CharacterListProps {
  params: {
    page?: string | undefined
    query?: string | undefined
    species?: string | undefined
    gender?: string | undefined
    status?: string | undefined
  }
}

export async function CharacterList({ params }: CharacterListProps) {
  const { page, query, species, gender, status } = params

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page ?? 1}&name=${query ?? ''}&species=${species ?? ''}&gender=${gender ?? ''}&status=${status ?? ''}`
  )
  const data: Characters = await response.json()

  return (
    <div className="w-full flex flex-1 flex-col">
      <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
        {data.results?.map(async result => {
          return (
            <CharacterPolaroidRoot
              href={`/characters/${result.id}`}
              title={result.name}
              key={result.id}
            >
              <CharacterPolaroidImage src={result.image} alt={result.name} />
              <CharacterPolaroidTitle>{result.name}</CharacterPolaroidTitle>
            </CharacterPolaroidRoot>
          )
        })}
      </div>
      {!data.results && <NotFoundResult text="Character not found :/" />}
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
