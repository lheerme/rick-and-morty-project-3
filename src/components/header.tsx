import logo from '@/assets/header-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const pathname = '/characters'

  return (
    <header className="border-b-2">
      <div className="max-w-7xl w-full m-auto flex items-center justify-between px-6 py-2">
        <Link href="/" className="transition-all hover:drop-shadow-4xl">
          <Image
            src={logo}
            alt="Site Logo"
            className="max-w-[50px]"
            placeholder="blur"
          />
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/characters"
            className={`text-sm sm:text-base font-medium hover:opacity-75 transition-opacity ${pathname.startsWith('/characters') && 'text-primary'}`}
          >
            Characters
          </Link>
          <Link
            href="/locations"
            className={`text-sm sm:text-base font-medium hover:opacity-75 transition-opacity ${pathname.startsWith('/locations') && 'text-primary'}`}
          >
            Locations
          </Link>
          <Link
            href="/episodes"
            className={`text-sm sm:text-base font-medium hover:opacity-75 transition-opacity ${pathname.startsWith('/episodes') && 'text-primary'}`}
          >
            Episodes
          </Link>
        </nav>
      </div>
    </header>
  )
}
