import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Sobre o projeto' }

export default function Page() {
  return (
    <section className="px-gutter py-16">
      <h1 className="text-4xl font-bold">Sobre o projeto</h1>
    </section>
  )
}
