import imageFrame from '@/assets/img-frame.png'
import type { Result as ResidentList } from '@/interfaces/characters'
import Image from 'next/image'
import Link from 'next/link'

interface LocationResidentsListProps {
  idList: number[]
}

export async function LocationResidentsList({
  idList,
}: LocationResidentsListProps) {
  if (idList.length === 0) {
    return <p className="text-center">This location do not have residents.</p>
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${idList}`
  )
  const data: ResidentList[] | ResidentList = await response.json()

  if (!Array.isArray(data)) {
    return (
      <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
        <Link
          href={`/characters/${data.id}`}
          title={data.name}
          key={data.id}
          className="relative w-full max-w-[240px] scale-95 hover:scale-100 hover:transition-transform"
        >
          <Image
            src={imageFrame}
            alt=""
            className="relative z-[1]"
            placeholder="blur"
          />
          <Image
            src={data.image}
            alt={data.name}
            width={240}
            height={240}
            className="absolute left-0 top-[5.5%] scale-87 w-full"
          />
          <h2 className="z-[1] absolute left-1/2 -translate-x-1/2 bottom-1 min-[550px]:bottom-3 text-black font-handwrite text-xl min-[550px]:text-2xl w-full px-3 text-center truncate">
            {data.name}
          </h2>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
      {data?.map(result => {
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
  )
}
