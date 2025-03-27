'use client'

import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/use-debounce'
import { Search } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'
import {
  type ChangeEvent,
  type ComponentProps,
  useEffect,
  useState,
} from 'react'
import { twMerge } from 'tailwind-merge'

export function FilterInput({ className }: ComponentProps<'div'>) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const currentParamsValue = params.get('query') ?? ''
  const [inputValue, setInputValue] = useState(currentParamsValue)
  const debounceSearch = useDebounce(inputValue)
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (debounceSearch) {
      if (debounceSearch.trim().length === 0) return

      params.set('query', debounceSearch.trim())
      params.delete('page')

      replace(`${pathname}?${params.toString()}`)
    } else {
      params.delete('query')

      replace(`${pathname}?${params.toString()}`)
    }
  }, [debounceSearch])

  return (
    <div className={twMerge('flex relative', className)}>
      <Search className="absolute size-4 left-3 top-1/2 -translate-y-1/2 my-auto" />
      <Input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder="Filter by name..."
        className="pl-9"
      />
    </div>
  )
}
