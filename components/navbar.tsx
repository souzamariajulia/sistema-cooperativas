'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { navLinks, routes } from '@/lib/routes'

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href)

  return (
    <header className="bg-brand-white text-brand-navy px-gutter relative z-50 grid h-(--navbar-height) grid-cols-[1fr_auto_1fr] items-center">
      <span />
      <nav aria-label="Principal" className="hidden gap-2 lg:flex">
        {navLinks.map(({ label, href }) => {
          const active = isActive(href)

          return (
            <Link
              key={label}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`relative rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                active ? '' : 'hover:text-brand-white hover:bg-nav-hover'
              }`}
            >
              {label}
              {active && (
                <span className="bg-brand-teal absolute inset-x-5 -bottom-1 h-[3px] rounded-full" />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="col-start-3 justify-self-end">
        <Button variant="ghost" size="icon-lg" aria-label="Sair" className="hidden lg:inline-flex">
          <LogOut className="size-5" aria-hidden />
        </Button>
        <Button
          variant="ghost"
          size="icon-lg"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden"
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
        </Button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="bg-brand-white px-gutter absolute inset-x-0 top-full flex flex-col gap-1 border-t pt-2 pb-4 shadow-lg lg:hidden"
        >
          <nav aria-label="Principal" className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href)

              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    active ? 'bg-muted' : 'hover:text-brand-white hover:bg-nav-hover'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
          <Button variant="ghost" className="mt-2 justify-start gap-3 px-4 text-sm">
            <LogOut className="size-5" aria-hidden />
            Sair
          </Button>
        </div>
      )}
    </header>
  )
}
