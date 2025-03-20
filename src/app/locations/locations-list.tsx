import imageFrame from '@/assets/paper-note.png'
import { NotFoundResult } from '@/components/not-found-result'
import { PaginationWithLinks } from '@/components/ui/pagination-with-links'
import type { Locations } from '@/interfaces/locations'
import Image from 'next/image'
import Link from 'next/link'

interface LocationsListProps {
  params: {
    page?: string | undefined
    query?: string | undefined
    type?: string | undefined
    dimension?: string | undefined
  }
}

export async function LocationsList({ params }: LocationsListProps) {
  const { page, query, type, dimension } = params

  const response = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page ?? 1}&name=${query ?? ''}&type=${type ?? ''}&dimension=${dimension ?? ''}`
  )
  const data: Locations = await response.json()

  return (
    <div className="w-full flex flex-1 flex-col">
      <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
        {data.results?.map(async result => {
          return (
            <Link
              href={`/locations/${result.id}`}
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
                <p className="truncate text-xl px-3">{result.name}</p>
                <p className="text-lg">{result.type}</p>
              </div>
            </Link>
          )
        })}
      </div>
      {!data.results && <NotFoundResult text="Location not found :/" />}
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
