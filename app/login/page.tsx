import Image from 'next/image'
import { Handshake } from 'lucide-react'

import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-[51fr_49fr]">
      <section className="bg-brand-teal text-brand-white relative hidden flex-col justify-center gap-10 overflow-hidden px-[8%] pb-[12%] md:flex">
        <div className="relative flex flex-col gap-8">
          <h1 className="text-6xl leading-[1.15] font-extrabold">
            Olá,
            <br />
            <span className="text-brand-yellow">COOPERADO!</span>
          </h1>
          <p className="max-w-md text-lg leading-[1.9] font-medium">
            Acesse um{' '}
            <strong className="text-brand-yellow font-extrabold">plano de negócios</strong> alinhado
            à realidade da sua cooperativa, junto a recursos fundamentais para sua{' '}
            <strong className="text-brand-yellow font-extrabold">comunicação.</strong>
          </p>
        </div>
        <p className="relative flex items-center gap-3 font-bold">
          <Handshake className="size-5" aria-hidden />
          Cooperar é crescer juntos.
        </p>
        <Image
          src="/assets/ellipses.svg"
          alt=""
          width={739}
          height={300}
          priority
          className="absolute bottom-0 left-0 h-auto w-[102%] max-w-none translate-y-1/4"
        />
      </section>
      <section className="bg-brand-navy flex items-center justify-center px-6 py-12">
        <LoginForm />
      </section>
    </main>
  )
}
