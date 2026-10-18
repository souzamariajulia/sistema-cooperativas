import type { Metadata } from 'next'
import Image from 'next/image'
import { Download } from 'lucide-react'

import { KeywordsBar } from '@/components/keywords-bar'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Plano' }

export default function PlanoPage() {
  return (
    <>
      <section className="bg-brand-teal px-gutter relative flex min-h-[calc(100vh-var(--navbar-height)-var(--keywords-bar-height))] items-center overflow-hidden py-16">
        <div className="text-brand-white relative z-10 flex flex-col gap-8 lg:max-w-[48%]">
          <h1 className="text-4xl leading-tight font-bold xl:text-5xl">
            <span className="block font-normal">Sobre o</span>
            <span className="block">Plano de Negócio</span>
          </h1>
          <p className="max-w-xl text-lg leading-snug xl:text-2xl">
            O plano reúne estratégias e ações para fortalecer a comunicação, organizar o
            desenvolvimento das cooperativas e orientar sua inserção no contexto digital.
          </p>
        </div>

        <div className="absolute inset-y-0 right-0 hidden aspect-[846/777] lg:block">
          <Image
            src="/assets/plano-circle.svg"
            alt=""
            width={596}
            height={596}
            className="absolute bottom-0 left-[21.5%] w-[70.4%]"
          />
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/assets/plano-woman.png"
              alt=""
              width={1024}
              height={1024}
              priority
              className="absolute top-0 left-0 h-[108.88%] w-full max-w-none -scale-x-100"
            />
          </div>
        </div>
      </section>

      <KeywordsBar />

      <section className="bg-brand-navy px-gutter relative flex min-h-[47.5rem] flex-col items-center justify-center gap-12 overflow-hidden py-24 text-center">
        <Image
          src="/assets/plano-field.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[48%_0] opacity-33"
        />
        <p className="text-brand-white relative z-10 max-w-4xl text-3xl leading-snug md:text-4xl xl:text-5xl">
          Um <strong className="text-brand-yellow font-extrabold">plano de negócios</strong>{' '}
          customizado para as cooperativas, orientado pela{' '}
          <strong className="text-brand-yellow font-black">comunicação estratégica</strong> e
          direcionado à{' '}
          <strong className="text-brand-yellow font-black">transformação digital</strong>
          <span className="text-brand-yellow">.</span>
        </p>
        <Button variant="outline-light" className="relative z-10">
          Baixar plano em pdf
          <Download className="size-5" aria-hidden />
        </Button>
      </section>
    </>
  )
}
