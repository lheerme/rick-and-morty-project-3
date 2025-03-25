import bottomPart from '@/assets/paper-bottom-part.png'
import topPart from '@/assets/paper-top-part.png'
import Image from 'next/image'
import type { ReactNode } from 'react'

interface InformationNoteRootProps {
  children?: ReactNode
}

export function InformationNoteRoot({ children }: InformationNoteRootProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Image
        src={topPart}
        alt="Picture Frame"
        className="w-full"
        placeholder="blur"
      />
      <div className="w-full bg-[rgba(238,238,238,255)] px-4 py-2 font-handwrite text-black">
        <h3 className="text-3xl text-center underline underline-offset-4 mb-6">
          Information
        </h3>
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
