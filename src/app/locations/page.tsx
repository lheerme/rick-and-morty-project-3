import locationsLogo from '@/assets/locations-logo.png'
import type { Metadata } from 'next'
import Image from 'next/image'
import { LocationsList } from './locations-list'
import { LocationsListFilter } from './locations-list-filter'

export const metadata: Metadata = {
  title: 'Locations | Rick And Morty Project',
}

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
    <div className="flex flex-col gap-8 w-full">
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
