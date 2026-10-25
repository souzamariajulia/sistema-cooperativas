import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, FileText } from 'lucide-react'

import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'

const tones = {
  navy: { card: 'bg-brand-navy text-brand-white', icon: 'text-brand-teal' },
  yellow: { card: 'bg-brand-yellow text-brand-navy', icon: 'text-brand-navy' },
} as const

const features = [
  {
    number: '01',
    icon: FileText,
    title: 'Plano de Negócios',
    description:
      'Um plano de negócio customizado para as cooperativas, orientado pela comunicação estratégica e direcionado à transformação digital.',
    cta: 'Explorar o plano',
    href: routes.plano,
    tone: 'navy',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Guia de Implementação',
    description:
      'Orientações para colocar o plano em prática e acompanhar cada etapa da transformação da sua cooperativa.',
    cta: 'Explorar o guia',
    href: routes.guia,
    tone: 'yellow',
  },
] as const

export function FeaturesSection() {
  return (
    <section className="bg-brand-teal px-gutter relative overflow-hidden py-16">
      <h2 className="text-brand-white relative z-10 text-center text-4xl font-normal md:text-5xl xl:text-6xl">
        O que você <strong className="text-brand-yellow font-bold">encontra aqui?</strong>
      </h2>

      <ul className="relative z-10 mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:max-w-[56%]">
        {features.map(({ number, icon: Icon, title, description, cta, href, tone }) => (
          <li key={title} className="contents">
            <Link
              href={href}
              className={cn(
                'flex min-h-72 flex-col rounded-lg p-8 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1.5',
                tones[tone].card,
              )}
            >
              <div className="flex items-start justify-between">
                <Icon className={cn('size-8', tones[tone].icon)} aria-hidden />
                <span className="text-sm opacity-60">{number}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-90">{description}</p>
              <span className="mt-auto flex items-center justify-between pt-6 text-sm font-medium">
                {cta}
                <ArrowRight className="size-5" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Image
        src="/assets/person-thinking.png"
        alt=""
        width={1265}
        height={1435}
        className="absolute top-[13.2%] right-0 hidden h-[120%] w-auto max-w-none lg:block"
      />
      <div className="relative mx-auto mt-12 -mb-16 aspect-[810/1033] w-4/5 max-w-xs overflow-hidden lg:hidden">
        <Image
          src="/assets/person-thinking.png"
          alt=""
          width={1265}
          height={1435}
          sizes="(min-width: 640px) 20rem, 80vw"
          className="absolute top-0 -left-[56.2%] h-auto w-[156.2%] max-w-none"
        />
      </div>
    </section>
  )
}
