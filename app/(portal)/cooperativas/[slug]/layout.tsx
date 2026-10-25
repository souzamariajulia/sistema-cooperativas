import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CooperativaTabs } from '@/components/cooperativa-tabs'
import { cooperativas, getCooperativa } from '@/lib/cooperativas'
import { routes } from '@/lib/routes'

type Props = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return cooperativas.filter(({ details }) => details).map(({ slug }) => ({ slug }))
}

export default async function CooperativaLayout({ children, params }: Props) {
  const { slug } = await params
  const cooperativa = getCooperativa(slug)

  if (!cooperativa?.details) notFound()

  return (
    <>
      <header className="bg-brand-teal text-brand-white px-gutter flex flex-col gap-8 py-12">
        <Link
          href={routes.cooperativas}
          className="mx-auto flex w-full max-w-5xl items-center gap-2 text-base font-bold hover:underline"
        >
          <ArrowLeft className="size-5" aria-hidden />
          Todas as cooperativas
        </Link>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-12">
          <h1 className="text-5xl leading-none font-extrabold xl:text-7xl">{cooperativa.name}</h1>
          <p className="max-w-sm text-lg leading-snug xl:text-xl">{cooperativa.description}</p>
        </div>
      </header>
      <CooperativaTabs slug={slug} />
      {children}
    </>
  )
}
