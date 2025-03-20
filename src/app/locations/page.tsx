import locationsLogo from '@/assets/locations-logo.png'
import Image from 'next/image'
import { LocationsList } from './locations-list'
import { LocationsListFilter } from './locations-list-filter'

interface LocationsProps {
  searchParams: Promise<{
    page?: string
    query?: string
    type?: string
    dimension?: string
  }>
}

export default async function Locations({ searchParams }: LocationsProps) {
  const params = await searchParams

  return (
    <div className="flex flex-col gap-4 w-full">
      <Image
        src={locationsLogo}
        className="max-w-md w-full mx-auto"
        alt="characters"
        placeholder="blur"
      />
      <LocationsListFilter />
      <LocationsList params={params} />
    </div>
  )
}
