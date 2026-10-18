import type { Metadata } from 'next'
import { Download } from 'lucide-react'

import { KeywordsBar } from '@/components/keywords-bar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const metadata: Metadata = { title: 'Guia' }

const tones = {
  navy: 'bg-brand-navy text-brand-white',
  yellow: 'bg-brand-yellow text-brand-navy',
} as const

const steps = [
  {
    title: 'Conheça sua realidade',
    description: 'Entenda a realidade, os desafios e as necessidades da sua cooperativa.',
    tone: 'yellow',
  },
  {
    title: 'Organize sua comunicação',
    description: 'Reúna as informações e organize a comunicação e os recursos disponíveis.',
    tone: 'navy',
  },
  {
    title: 'Conheça sua realidade',
    description:
      'Defina prioridades, estratégias e ações de acordo com as necessidades identificadas.',
    tone: 'navy',
  },
  {
    title: 'Conheça sua realidade',
    description:
      'Coloque as ações em prática, acompanhe os resultados e faça os ajustes necessários.',
    tone: 'yellow',
  },
] as const

const focusAreas = [
  {
    title: 'Comunicação Institucional',
    description:
      'Fortaleça a apresentação da cooperativa, sua história, seus objetivos, valores e relações com parceiros e públicos.',
    tone: 'navy',
  },
  {
    title: 'Comunicação Interna',
    description:
      'Organize a circulação de informações entre os cooperados, facilitando a participação, o alinhamento e a organização das atividades.',
    tone: 'yellow',
  },
  {
    title: 'Comunicação Externa',
    description:
      'Amplie o diálogo com consumidores, parceiros e comunidade, tornando a cooperativa mais conhecida e fortalecendo seus relacionamentos.',
    tone: 'navy',
  },
  {
    title: 'Identidade Visual',
    description:
      'Padronize a aplicação da marca e dos elementos visuais para construir uma comunicação mais clara, consistente e reconhecível.',
    tone: 'yellow',
  },
  {
    title: 'Presença Digital',
    description:
      'Aproveite os canais digitais para divulgar a cooperativa, seus produtos, serviços, ações e informações relevantes.',
    tone: 'navy',
  },
  {
    title: 'Ferramentas Digitais',
    description:
      'Conheça e utilize ferramentas que podem facilitar a comunicação, a organização e o desenvolvimento das atividades da cooperativa.',
    tone: 'yellow',
  },
] as const

export default function GuiaPage() {
  return (
    <>
      <section className="bg-brand-navy px-gutter flex min-h-[calc(100vh-var(--navbar-height)-var(--keywords-bar-height))] items-center py-16">
        <div className="text-brand-white flex flex-col gap-8">
          <h1 className="max-w-4xl text-5xl leading-none tracking-widest xl:text-7xl">
            Sobre o{' '}
            <strong className="text-brand-yellow font-extrabold">Guia de implementação</strong>
          </h1>
          <p className="max-w-xl text-lg leading-snug xl:text-2xl">
            O guia foi desenvolvido para auxiliar as cooperativas na aplicação das estratégias
            propostas no Plano de Negócio.
          </p>
          <Button variant="outline-light" size="xl" className="w-fit">
            Baixar guia completo
            <Download className="size-8" aria-hidden />
          </Button>
        </div>
      </section>

      <KeywordsBar />

      <section className="bg-brand-teal px-gutter flex flex-col gap-24 py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-14">
          <h2 className="text-brand-white text-center text-4xl md:text-5xl xl:text-7xl">
            Como <strong className="text-brand-yellow font-extrabold">utilizar o guia?</strong>
          </h2>
          <ol className="grid gap-8 md:grid-cols-2">
            {steps.map(({ title, description, tone }, index) => (
              <li key={`${title}-${index}`} className={cn('rounded-lg p-8', tones[tone])}>
                <div className="flex items-center gap-4">
                  <span className="text-7xl leading-none font-extrabold xl:text-8xl">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl leading-tight font-bold xl:text-3xl">{title}</h3>
                </div>
                <p className="mt-4 text-base leading-snug xl:text-xl">{description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto flex w-full max-w-[78rem] flex-col gap-14">
          <h2 className="text-brand-white text-4xl md:text-5xl xl:text-7xl">
            Quais{' '}
            <strong className="text-brand-yellow font-extrabold">são as áreas de foco?</strong>
          </h2>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map(({ title, description, tone }) => (
              <li
                key={title}
                className={cn(
                  'flex min-h-96 flex-col justify-center gap-4 rounded-lg p-8',
                  tones[tone],
                )}
              >
                <h3 className="text-2xl leading-tight font-extrabold">{title}</h3>
                <p className="text-base leading-snug xl:text-lg">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
