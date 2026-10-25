import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { KeywordsBar } from '@/components/keywords-bar'
import { PackagingCarousel } from '@/components/packaging-carousel'
import { getCooperativa } from '@/lib/cooperativas'

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

  const bounds = details.portraitBounds
  const portraitWidth = bounds.right - bounds.left + 1
  const portraitHeight = bounds.bottom - bounds.top + 1

  return (
    <>
      <section className="bg-brand-navy text-brand-white px-gutter relative overflow-hidden py-16">
        <div className="relative z-10 flex flex-col gap-10 lg:max-w-[48%]">
          <h2 className="text-brand-yellow text-4xl leading-tight font-bold xl:text-5xl">
            Identidade Visual
          </h2>
          <p className="text-lg leading-relaxed xl:text-xl">
            Contemple e acesse os recursos visuais referente à {cooperativa.description}
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="text-base uppercase">Logotipo</h3>
            <Image
              src={details.logo.src}
              alt={details.logo.alt}
              width={details.logo.width}
              height={details.logo.height}
              className="h-auto max-h-64 w-auto max-w-full self-start"
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
              <ul className="flex flex-col gap-4">
                {details.typographies.map(({ src, alt, width, height }) => (
                  <li key={src}>
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      className="h-auto max-h-10 w-auto max-w-full"
                    />
                  </li>
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

        <div
          className="relative mx-auto mt-12 -mb-16 w-4/5 max-w-xs overflow-hidden lg:hidden"
          style={{ aspectRatio: `${portraitWidth} / ${portraitHeight}` }}
        >
          <Image
            src={details.portrait}
            alt=""
            width={bounds.width}
            height={bounds.height}
            sizes="(min-width: 640px) 20rem, 80vw"
            className="absolute max-w-none"
            style={{
              width: `${(bounds.width / portraitWidth) * 100}%`,
              left: `${(-bounds.left / portraitWidth) * 100}%`,
              top: `${(-bounds.top / portraitHeight) * 100}%`,
            }}
          />
        </div>
      </section>

      <KeywordsBar />

      {details.packaging.length > 0 && (
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
      )}
    </>
  )
}
