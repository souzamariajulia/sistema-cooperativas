import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { KeywordsBar } from '@/components/keywords-bar'
import { getCooperativa } from '@/lib/cooperativas'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cooperativa = getCooperativa(slug)

  return { title: cooperativa ? `${cooperativa.name} | Missão, visão e valores` : 'Cooperativa' }
}

export default async function MissaoVisaoValoresPage({ params }: Props) {
  const { slug } = await params
  const details = getCooperativa(slug)?.details

  if (!details) notFound()

  return (
    <>
      <section className="bg-brand-navy px-gutter py-24">
        <ul className="mx-auto grid max-w-[83rem] md:grid-cols-3">
          {details.institutional.map(({ title, text, background, color }) => (
            <li
              key={title}
              className="flex min-h-[23.6rem] flex-col gap-12 p-8"
              style={{ backgroundColor: background, color }}
            >
              <h2 className="text-xl font-extrabold uppercase">{title}</h2>
              {Array.isArray(text) ? (
                <ul className="list-disc space-y-1 pl-6 text-lg leading-snug xl:text-xl">
                  {text.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg leading-snug xl:text-xl">{text}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <KeywordsBar />
    </>
  )
}
