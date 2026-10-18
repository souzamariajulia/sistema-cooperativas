import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { KeywordsBar } from '@/components/keywords-bar'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Cooperativas' }

const cooperativas = [
  {
    name: 'COOPEVI',
    description: 'Cooperativa Mista das áreas de Reforma Agrária do Vale do Itapecuru',
  },
  {
    name: 'COOMARA',
    description: 'Cooperativa Mista dos Assentamentos de Reforma Agrária da Região Tocantina',
  },
  {
    name: 'COOPERVID',
    description: 'Cooperativa Mista dos Assentamentos de Reforma Agrária da Região Tocantina',
  },
] as const

export default function CooperativasPage() {
  return (
    <>
      <section className="bg-brand-teal px-gutter relative flex min-h-[calc(100vh-var(--navbar-height)-var(--keywords-bar-height))] items-center overflow-hidden py-16">
        <div className="text-brand-white relative z-10 flex flex-col gap-8 lg:max-w-[48%]">
          <h1 className="text-4xl leading-tight font-bold xl:text-5xl">
            <span className="block font-normal">Conheça</span>
            <span className="block">nossas cooperativas</span>
          </h1>
          <p className="max-w-xl text-lg leading-snug xl:text-2xl">
            Conheça as cooperativas da agricultura familiar do Maranhão contempladas pelo projeto e
            suas características, necessidades e contextos de comunicação
          </p>
        </div>

        <div
          aria-hidden
          className="bg-brand-yellow absolute top-[21.7%] left-1/2 hidden aspect-square w-[47.8%] rounded-full lg:block"
        />
        <div className="absolute right-0 bottom-[-2.2%] hidden aspect-[947/588] h-[74.6%] overflow-hidden lg:block">
          <Image
            src="/assets/cooperativas-basket.webp"
            alt=""
            width={1408}
            height={768}
            priority
            className="absolute top-[-5.91%] left-[-2.48%] h-[131.17%] w-[149.25%] max-w-none"
          />
        </div>
      </section>

      <KeywordsBar />

      <section className="bg-brand-teal px-gutter relative overflow-hidden py-28">
        <div
          aria-hidden
          className="bg-brand-yellow absolute top-[24.8%] left-[20.4%] aspect-square w-[92%] rounded-full"
        />
        <div
          aria-hidden
          className="bg-brand-orange absolute top-[57.7%] -left-[20%] aspect-square w-[59%] rounded-full"
        />

        <h2 className="sr-only">Cooperativas contempladas pelo projeto</h2>
        <ul className="relative z-10 mx-auto flex max-w-[63rem] flex-col gap-8">
          {cooperativas.map(({ name, description }) => (
            <li
              key={name}
              className="bg-brand-navy text-brand-white grid gap-6 rounded-lg p-8 md:grid-cols-2 md:gap-10"
            >
              <h3 className="text-brand-yellow text-4xl font-extrabold xl:text-5xl">{name}</h3>
              <div className="flex flex-col items-start gap-6">
                <p className="text-lg leading-snug xl:text-xl">{description}</p>
                <Button variant="link" className="text-brand-white h-auto p-0 text-base">
                  Conhecer
                  <ArrowRight className="size-5" aria-hidden />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
