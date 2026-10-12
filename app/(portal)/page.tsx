import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { FeaturesSection } from '@/components/features-section'
import { KeywordsBar } from '@/components/keywords-bar'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
      <section className="bg-brand-navy px-gutter relative flex min-h-[calc(100vh-var(--navbar-height)-var(--keywords-bar-height))] items-center overflow-hidden py-16">
        <div className="relative z-10 flex flex-col gap-8">
          <h1 className="text-brand-white text-5xl leading-tight font-bold xl:text-6xl">
            <span className="text-brand-yellow block">Comunicação estratégica</span>
            <span className="block">
              e <span className="text-brand-yellow">transformação digital</span>
            </span>
            <span className="block">nas cooperativas.</span>
          </h1>
          <p className="text-brand-white/90 max-w-2xl text-lg leading-[1.8] xl:text-xl">
            Este ambiente reúne ferramentas, orientações e materiais desenvolvidos para apoiar as
            cooperativas na organização da comunicação e no processo de transformação digital.
          </p>
          <Button variant="accent" className="w-fit">
            Conheça o projeto
            <ArrowRight className="size-5" aria-hidden />
          </Button>
        </div>
        <Image
          src="/assets/person-ellipse.png"
          alt=""
          width={780}
          height={809}
          priority
          className="absolute right-0 bottom-0 hidden h-[95%] w-auto max-w-none translate-y-[3.9%] lg:block"
        />
      </section>
      <KeywordsBar />
      <FeaturesSection />
    </>
  )
}
