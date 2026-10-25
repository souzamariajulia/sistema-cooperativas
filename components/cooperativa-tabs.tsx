'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cooperativaRoutes } from '@/lib/routes'
import { cn } from '@/lib/utils'

export function CooperativaTabs({ slug }: { slug: string }) {
  const pathname = usePathname()

  const tabs = [
    { label: 'Sobre', href: cooperativaRoutes.sobre(slug) },
    { label: 'Identidade visual', href: cooperativaRoutes.identidadeVisual(slug) },
    { label: 'Missão, visão e valores', href: cooperativaRoutes.missaoVisaoValores(slug) },
  ]

  return (
    <nav aria-label="Seções da cooperativa" className="bg-brand-white text-brand-navy px-gutter">
      <ul className="mx-auto flex max-w-5xl justify-between gap-4 overflow-x-auto py-5 md:justify-center md:gap-24">
        {tabs.map(({ label, href }) => {
          const active = pathname === href

          return (
            <li key={href} className="shrink-0">
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'hover:text-brand-teal text-sm whitespace-nowrap transition-colors md:text-base xl:text-lg',
                  active ? 'font-extrabold' : 'font-medium',
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
