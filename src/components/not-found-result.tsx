import notFoundImage from '@/assets/not-found.png'
import Image from 'next/image'

interface NotFoundResultProps {
  text?: string
}

export function NotFoundResult({ text = 'Not found :/' }: NotFoundResultProps) {
  return (
    <div className="w-full max-w-[250px] space-y-4 m-auto">
      <Image src={notFoundImage} alt="" className="w-full" placeholder="blur" />
      <p className="text-lg text-center">{text}</p>
    </div>
  )
}
