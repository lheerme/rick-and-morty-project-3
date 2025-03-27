import logo from '@/assets/header-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderLink } from './header-link'

export function Header() {
  const pathname = '/characters'

  return (
    <header className="border-b-2">
      <div className="max-w-7xl w-full m-auto flex items-center justify-between gap-2 px-6 py-2">
        <Link href="/" className="transition-all hover:drop-shadow-4xl">
          <Image
            src={logo}
            alt="Site Logo"
            className="max-w-[50px]"
            placeholder="blur"
          />
        </Link>
        <nav className="flex gap-4">
          <HeaderLink href="/characters">Characters</HeaderLink>
          <HeaderLink href="/locations">Locations</HeaderLink>
          <HeaderLink href="/episodes">Episodes</HeaderLink>
        </nav>
      </div>
    </header>
  )
}
