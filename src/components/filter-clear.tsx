'use client'

import { Button } from '@/components/ui/button'
import { FilterX } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'

interface FilterClearProps {
  paramsList: string[]
}

export function FilterClear({ paramsList }: FilterClearProps) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleButtonClick() {
    if (params.size === 0) return
    paramsList.map(paramItem => {
      params.delete(paramItem)
    })

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Button className="cursor-pointer" onClick={handleButtonClick}>
      <FilterX />
    </Button>
  )
}
