import imageFrame from '@/assets/img-frame.png'
import { NotFoundResult } from '@/components/not-found-result'
import { PaginationWithLinks } from '@/components/ui/pagination-with-links'
import type { Characters } from '@/interfaces/characters'
import { getBase64 } from '@/utils/get-base-64'
import Image from 'next/image'
import Link from 'next/link'

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
            <Link
              href={`/characters/${result.id}`}
              title={result.name}
              key={result.id}
              className="relative w-full max-w-[240px] scale-95 hover:scale-100 hover:transition-transform"
            >
              <Image
                src={imageFrame}
                alt=""
                className="relative z-[1]"
                placeholder="blur"
              />
              <Image
                src={result.image}
                alt={result.name}
                width={240}
                height={240}
                className="absolute left-0 top-[5.5%] scale-87 w-full"
              />
              <h2 className="z-[1] absolute left-1/2 -translate-x-1/2 bottom-1 min-[550px]:bottom-3 text-black font-handwrite text-xl min-[550px]:text-2xl w-full px-3 text-center truncate">
                {result.name}
              </h2>
            </Link>
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
