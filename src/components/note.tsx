import imageFrame from '@/assets/paper-note.png'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

interface NoteRootProps extends ComponentProps<typeof Link> {
  children: ReactNode
}

export function NoteRoot(props: NoteRootProps) {
  return (
    <Link
      {...props}
      className="relative flex items-center justify-center w-full max-w-[240px] scale-95 hover:scale-100 hover:transition-transform"
    >
      <Image
        src={imageFrame}
        alt=""
        className="relative inset-0"
        placeholder="blur"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 font-handwrite text-black text-center w-[97%]">
        {props.children}
      </div>
    </Link>
  )
}

interface NoteTitleProps extends ComponentProps<'p'> {}

export function NoteTitle(props: NoteTitleProps) {
  return <p {...props} className="truncate text-lg sm:text-xl px-3" />
}

interface NoteSpanProps extends ComponentProps<'p'> {}

export function NoteSpan(props: NoteSpanProps) {
  return <p {...props} className="text-lg" />
}
