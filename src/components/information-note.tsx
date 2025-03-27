import bottomPart from '@/assets/paper-bottom-part.png'
import topPart from '@/assets/paper-top-part.png'
import Image from 'next/image'
import type { ReactNode } from 'react'

interface InformationNoteProps {
  children?: ReactNode
}

export function InformationNote({ children }: InformationNoteProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Image
        src={topPart}
        alt="Picture Frame"
        className="w-full"
        placeholder="blur"
      />
      <div className="w-full bg-[rgba(238,238,238,255)] px-4 py-2 font-handwrite text-black">
        {children}
      </div>
      <Image
        src={bottomPart}
        alt="Picture Frame"
        className="w-full"
        placeholder="blur"
      />
    </div>
  )
}
