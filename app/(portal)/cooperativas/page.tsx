import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { KeywordsBar } from '@/components/keywords-bar'
import { Button } from '@/components/ui/button'
import { cooperativas } from '@/lib/cooperativas'
import { cooperativaRoutes } from '@/lib/routes'

export const metadata: Metadata = { title: 'Cooperativas' }

export default function CooperativasPage() {
  return (
    <>
      <section className="bg-brand-teal px-gutter relative flex flex-col overflow-hidden py-16 lg:min-h-[calc(100vh-var(--navbar-height)-var(--keywords-bar-height))] lg:flex-row lg:items-center">
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

        <div className="absolute right-0 bottom-[-2.2%] hidden aspect-[947/588] h-[74.6%] lg:block">
          <div
            aria-hidden
            className="bg-brand-yellow absolute top-[-6.3%] left-[24.2%] aspect-square w-[72.8%] rounded-full"
          />
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/assets/cooperativas-basket.webp"
              alt=""
              width={1408}
              height={768}
              priority
              className="absolute top-[-5.91%] left-[-2.48%] h-[131.17%] w-[149.25%] max-w-none"
            />
          </div>
        </div>

        <div className="relative mx-auto mt-10 -mb-16 aspect-[1408/768] w-full max-w-md translate-y-[8.2%] lg:hidden">
          <div
            aria-hidden
            className="bg-brand-yellow absolute top-0 left-1/2 aspect-square h-full -translate-x-1/2 rounded-full"
          />
          <Image
            src="/assets/cooperativas-basket.webp"
            alt=""
            width={1408}
            height={768}
            sizes="(min-width: 448px) 28rem, 100vw"
            className="relative size-full object-contain"
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
        <ul className="relative z-10 mx-auto flex max-w-[76rem] flex-col gap-8">
          {cooperativas.map(({ slug, name, description, details }) => (
            <li
              key={slug}
              className="group bg-brand-navy text-brand-white grid items-center gap-6 rounded-3xl p-8 shadow-lg transition duration-300 ease-out hover:shadow-2xl motion-safe:hover:-translate-y-1.5 md:grid-cols-[1fr_1.4fr_auto] md:gap-10 md:px-12"
            >
              <h3 className="text-brand-yellow text-4xl font-extrabold xl:text-5xl">{name}</h3>
              <p className="text-brand-white/90 text-lg leading-relaxed xl:text-xl">
                {description}
              </p>
              <Button
                variant="accent"
                disabled={!details}
                nativeButton={false}
                render={<Link href={cooperativaRoutes.sobre(slug)} />}
                className="group-hover:bg-brand-white w-fit rounded-full transition-colors"
              >
                Conhecer
                <ArrowRight className="size-5" aria-hidden />
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
