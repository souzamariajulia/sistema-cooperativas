import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { KeywordsBar } from '@/components/keywords-bar'
import { PackagingCarousel } from '@/components/packaging-carousel'
import { Button } from '@/components/ui/button'
import { getCooperativa } from '@/lib/cooperativas'
import { routes } from '@/lib/routes'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cooperativa = getCooperativa(slug)

  return { title: cooperativa ? `${cooperativa.name} | Identidade visual` : 'Cooperativa' }
}

export default async function IdentidadeVisualPage({ params }: Props) {
  const { slug } = await params
  const cooperativa = getCooperativa(slug)
  const details = cooperativa?.details

  if (!cooperativa || !details) notFound()

  return (
    <>
      <section className="bg-brand-navy text-brand-white px-gutter relative overflow-hidden py-16">
        <div className="relative z-10 flex flex-col gap-10 lg:max-w-[48%]">
          <h2 className="text-brand-yellow text-4xl leading-tight font-bold xl:text-5xl">
            Identidade Visual
          </h2>
          <p className="line-clamp-3 text-lg leading-relaxed xl:text-xl">{details.about}</p>
          <Button
            variant="outline-light"
            nativeButton={false}
            render={<Link href={routes.recursos} />}
            className="w-fit"
          >
            Acessar recursos
          </Button>

          <div className="flex flex-col gap-4">
            <h3 className="text-base uppercase">Logotipo</h3>
            <Image
              src={details.logo.src}
              alt={details.logo.alt}
              width={512}
              height={512}
              className="size-64"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-base uppercase">Paleta de cores</h3>
            <ul className="flex flex-wrap gap-4">
              {details.colors.map((color) => (
                <li key={color} className="flex flex-col items-center gap-2">
                  <span
                    aria-hidden
                    className="size-[4.5rem] border border-black"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs font-bold uppercase">{color}</span>
                </li>
              ))}
            </ul>
          </div>

          {details.typographies && (
            <div className="flex flex-col gap-4">
              <h3 className="text-base uppercase">Tipografias</h3>
              <ul className="flex flex-col gap-1 text-lg">
                {details.typographies.map((typography) => (
                  <li key={typography}>{typography}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="absolute inset-y-0 left-[43.3%] hidden w-[67.5%] lg:block">
          <Image
            src={details.portrait}
            alt=""
            fill
            priority
            sizes="68vw"
            className="object-cover object-[51%_top]"
          />
        </div>
      </section>

      <KeywordsBar />

      <section className="text-brand-navy px-gutter relative overflow-hidden bg-neutral-100 py-16">
        <div
          aria-hidden
          className="bg-brand-yellow absolute top-[26%] left-[3.5%] aspect-square w-[92%] rounded-full"
        />
        <div className="relative z-10 mx-auto flex max-w-[83rem] flex-col gap-10">
          <h2 className="text-4xl leading-tight font-extrabold xl:text-5xl">Embalagens</h2>
          <PackagingCarousel
            items={details.packaging}
            label={`Embalagens da ${cooperativa.name}`}
          />
        </div>
      </section>
    </>
  )
}
