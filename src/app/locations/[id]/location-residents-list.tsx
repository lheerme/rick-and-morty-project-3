import {
  CharacterPolaroidImage,
  CharacterPolaroidRoot,
  CharacterPolaroidTitle,
} from '@/components/character-polaroid'
import type { Result as ResidentList } from '@/interfaces/characters'

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
        <CharacterPolaroidRoot
          href={`/characters/${data.id}`}
          title={data.name}
          key={data.id}
        >
          <CharacterPolaroidImage src={data.image} alt={data.name} />
          <CharacterPolaroidTitle>{data.name}</CharacterPolaroidTitle>
        </CharacterPolaroidRoot>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1060px] mx-auto grid grid-cols-2 min-[830px]:grid-cols-3 min-[1080px]:grid-cols-4 justify-items-center gap-5 pb-10">
      {data?.map(result => {
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
  )
}
