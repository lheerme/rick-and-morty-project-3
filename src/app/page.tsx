import homeLogo from '@/assets/home-logo.png'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around m-auto w-full gap-4">
      <Image
        src={homeLogo}
        className="w-full max-w-[200px] md:max-w-xs h-auto"
        alt="rick and morty cromulons floating head"
        placeholder="blur"
      />
      <div className="max-w-md w-full flex flex-col items-center gap-5">
        <p className="text-center text-xl">
          Immerse yourself in the Rick and Morty multiverse with real-time data
          using the Rick and Morty API. Explore characters, episodes, and
          locations!
        </p>
        <Button asChild>
          <Link href="/characters">Begin</Link>
        </Button>
      </div>
    </div>
  )
}
