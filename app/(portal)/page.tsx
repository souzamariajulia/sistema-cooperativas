import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { FeaturesSection } from '@/components/features-section'
import { KeywordsBar } from '@/components/keywords-bar'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
      <section className="bg-brand-navy px-gutter relative flex min-h-[calc(100vh-var(--navbar-height)-var(--keywords-bar-height))] items-center overflow-hidden py-16">
        <div className="relative z-10 flex flex-col gap-8 lg:max-w-[55%]">
          <h1 className="text-brand-white flex flex-col gap-5 font-bold">
            <span className="text-brand-yellow text-4xl leading-tight xl:text-5xl">
              Plano de Negócio Orientado pela Comunicação estratégica:
            </span>
            <span className="text-2xl leading-snug font-semibold xl:text-3xl">
              caminhos para a <span className="text-brand-yellow">transformação digital</span> das
              cooperativas das áreas de reforma agrária do Maranhão
            </span>
          </h1>
          <p className="text-brand-white/90 max-w-2xl text-lg leading-[1.8] xl:text-xl">
            Este repositório reúne ferramentas, orientações e materiais desenvolvidos para apoiar as
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
