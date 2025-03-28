import imageFrame from '@/assets/img-frame.png'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

interface CharacterPolaroidRootProps extends ComponentProps<typeof Link> {
  children: ReactNode
}

export function CharacterPolaroidRoot(props: CharacterPolaroidRootProps) {
  return (
    <Link
      {...props}
      className="relative w-full max-w-[240px] scale-95 hover:scale-100 hover:transition-transform"
    >
      <Image
        src={imageFrame}
        alt=""
        className="relative z-[1]"
        placeholder="blur"
      />
      {props.children}
    </Link>
  )
}

interface CharacterPolaroidImageProps extends ComponentProps<typeof Image> {}

export function CharacterPolaroidImage(props: CharacterPolaroidImageProps) {
  return (
    <Image
      {...props}
      width={240}
      height={240}
      className="absolute left-0 top-[5.5%] scale-87 w-full"
    />
  )
}

interface CharacterPolaroidTitleProps extends ComponentProps<'h2'> {}

export function CharacterPolaroidTitle(props: CharacterPolaroidTitleProps) {
  return (
    <h2
      {...props}
      className="z-[1] absolute left-1/2 -translate-x-1/2 bottom-1 min-[550px]:bottom-3 text-black font-handwrite text-xl min-[550px]:text-2xl w-full px-3 text-center truncate"
    />
  )
}
