import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Plano' }

export default function Page() {
  return (
    <section className="px-gutter py-16">
      <h1 className="text-4xl font-bold">Plano</h1>
    </section>
  )
}
