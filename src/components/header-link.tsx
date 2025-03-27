'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderLinkProps extends ComponentProps<typeof Link> {}

export function HeaderLink(props: HeaderLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      className={twMerge(
        'text-sm sm:text-base font-medium hover:opacity-75 transition-opacity',
        pathname.startsWith(String(props.href)) && 'text-primary'
      )}
    />
  )
}
