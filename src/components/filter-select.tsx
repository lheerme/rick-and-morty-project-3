'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'
import { type MouseEvent, useState } from 'react'

interface FilterSelectProps {
  value: string
  label: string
  options: {
    value: string
    label: string
  }[]
}

export function FilterSelect({
  value: filterValue,
  label,
  options,
}: FilterSelectProps) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const currentParamsValue = params.get(filterValue) ?? undefined
  const [key, setKey] = useState(+new Date())
  const [value, setValue] = useState<string | undefined>(currentParamsValue)
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSelectValueChange(selectValue: string) {
    params.set(filterValue, selectValue)
    params.delete('page')

    replace(`${pathname}?${params.toString()}`)
  }

  function handleSelectClear(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    if (!currentParamsValue) return
    setValue(undefined)
    setKey(+new Date())

    params.delete(filterValue)
    params.delete('page')
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select key={key} value={value} onValueChange={handleSelectValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <Button
          variant="secondary"
          size="sm"
          className="w-full h-8"
          onClick={handleSelectClear}
        >
          Clear
        </Button>
        <SelectSeparator />
        {options.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
