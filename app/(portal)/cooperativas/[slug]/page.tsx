import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { KeywordsBar } from '@/components/keywords-bar'
import { getCooperativa } from '@/lib/cooperativas'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cooperativa = getCooperativa(slug)

  return { title: cooperativa ? `${cooperativa.name} | Sobre` : 'Cooperativa' }
}

export default async function SobrePage({ params }: Props) {
  const { slug } = await params
  const details = getCooperativa(slug)?.details

  if (!details) notFound()

  return (
    <>
      <section className="bg-brand-navy text-brand-white px-gutter py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight font-normal xl:text-5xl">
            Sobre a <strong className="text-brand-yellow font-bold">Cooperativa</strong>
          </h2>
          <p className="mt-8 text-lg leading-relaxed xl:text-xl">{details.about}</p>
        </div>
      </section>

      <KeywordsBar />

      <iframe
        title={details.location.title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(details.location.query)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[1440/689] min-h-96 w-full border-0"
      />
    </>
  )
}
