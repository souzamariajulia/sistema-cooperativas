import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Sobre o projeto' }

const topics = [
  {
    number: '01',
    title: 'O que é este projeto?',
    description:
      'O presente projeto trata-se de um agente facilitador para o acesso de cooperados e cooperadas a seus respectivos plano de negócios e recursos comunicacionais.',
  },
  {
    number: '02',
    title: 'Para quem é esse projeto?',
    description:
      'Este projeto é direcionado às cooperativas do MST do Maranhão que buscam acessar de forma mais eficiente e facilitada seus respectivos recursos.',
  },
] as const

export default function SobreOProjetoPage() {
  return (
    <section className="bg-brand-navy text-brand-white px-gutter py-16 lg:py-24">
      <div className="flex flex-col gap-6">
        <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase">
          Sobre o projeto
        </span>
        <h1 className="max-w-4xl text-4xl leading-tight font-extrabold md:text-5xl xl:text-6xl">
          Um facilitador para chegar ao que a cooperativa{' '}
          <span className="text-brand-yellow">já tem direito</span>.
        </h1>
      </div>

      <ol className="mt-16 lg:mt-24">
        {topics.map(({ number, title, description }) => (
          <li
            key={number}
            className="border-field-border flex flex-col gap-6 border-t py-12 last:border-b lg:flex-row lg:gap-16"
          >
            <div className="flex items-baseline gap-5 lg:flex-1">
              <span className="text-brand-yellow text-lg font-extrabold">{number}</span>
              <h2 className="text-brand-yellow text-3xl leading-tight font-extrabold xl:text-4xl">
                {title}
              </h2>
            </div>
            <p className="text-lg leading-relaxed lg:flex-[1.4] xl:text-2xl">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
