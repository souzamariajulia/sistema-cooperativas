'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import type { CooperativaImage } from '@/lib/cooperativas'

export function PackagingCarousel({ items, label }: { items: CooperativaImage[]; label: string }) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canScroll, setCanScroll] = useState({ prev: false, next: false })

  const updateScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanScroll({
      prev: track.scrollLeft > 0,
      next: track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
    })
  }, [])

  useEffect(() => {
    updateScroll()
    window.addEventListener('resize', updateScroll)
    return () => window.removeEventListener('resize', updateScroll)
  }, [updateScroll])

  const scrollPage = (direction: 1 | -1) => {
    const track = trackRef.current
    track?.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
    >
      <Button
        variant="secondary"
        aria-label="Embalagens anteriores"
        disabled={!canScroll.prev}
        onClick={() => scrollPage(-1)}
        className="size-14 shrink-0 rounded-full p-0"
      >
        <ChevronLeft className="size-6" aria-hidden />
      </Button>

      <ul
        ref={trackRef}
        tabIndex={0}
        onScroll={updateScroll}
        className="focus-visible:outline-brand-navy order-first flex w-full snap-x snap-mandatory [scrollbar-width:none] gap-8 overflow-x-auto scroll-smooth focus-visible:outline-2 focus-visible:outline-offset-4 sm:order-none sm:w-auto sm:flex-1 [&::-webkit-scrollbar]:hidden"
      >
        {items.map(({ src, alt }) => (
          <li
            key={src}
            className="relative aspect-[3/4] shrink-0 basis-[80%] snap-start sm:basis-[calc((100%-2rem)/2)] lg:basis-[calc((100%-4rem)/3)]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 80vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <Button
        variant="secondary"
        aria-label="Próximas embalagens"
        disabled={!canScroll.next}
        onClick={() => scrollPage(1)}
        className="size-14 shrink-0 rounded-full p-0"
      >
        <ChevronRight className="size-6" aria-hidden />
      </Button>
    </div>
  )
}
