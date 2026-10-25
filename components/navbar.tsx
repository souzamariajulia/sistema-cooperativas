'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, X } from 'lucide-react'

import { LogoMark } from '@/components/logo-mark'
import { Button } from '@/components/ui/button'
import { navLinks, routes } from '@/lib/routes'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'text-brand-navy sticky top-0 z-50 h-(--navbar-height) transition-[padding] duration-300 ease-out motion-reduce:transition-none',
        scrolled ? 'px-gutter py-3' : 'p-0',
      )}
    >
      <div
        className={cn(
          'relative grid h-full grid-cols-[1fr_auto_1fr] items-center border transition-[padding,background-color,border-color,border-radius,box-shadow,backdrop-filter] duration-300 ease-out motion-reduce:transition-none',
          scrolled
            ? 'bg-brand-white/60 border-brand-navy/10 shadow-brand-navy/10 rounded-lg px-4 shadow-lg backdrop-blur-xl backdrop-saturate-150'
            : 'bg-brand-white px-gutter border-transparent shadow-none',
        )}
      >
        <Link
          href={routes.home}
          aria-label="Cooperativas da Reforma Agrária, início"
          className="w-fit"
        >
          <LogoMark className="h-9 w-auto" />
        </Link>
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
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Sair"
            className="hidden lg:inline-flex"
            onClick={() => router.push(routes.login)}
          >
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
            className="bg-brand-white/95 border-brand-navy/10 shadow-brand-navy/10 absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-lg border px-4 pt-2 pb-4 shadow-lg backdrop-blur-xl lg:hidden"
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
            <Button
              variant="ghost"
              className="mt-2 justify-start gap-3 px-4 text-sm"
              onClick={() => {
                setMenuOpen(false)
                router.push(routes.login)
              }}
            >
              <LogOut className="size-5" aria-hidden />
              Sair
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
