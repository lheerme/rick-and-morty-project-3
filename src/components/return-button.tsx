'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'nextjs-toploader/app'

export function ReturnButton() {
  const router = useRouter()

  return (
    <Button className="cursor-pointer" onClick={() => router.back()}>
      <ArrowLeft />
      Return
    </Button>
  )
}
