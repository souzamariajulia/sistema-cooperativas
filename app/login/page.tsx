import Image from "next/image"
import { Handshake } from "lucide-react"

export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-[51fr_49fr]">
      <section className="relative hidden flex-col justify-center gap-10 overflow-hidden bg-brand-teal px-[8%] pb-[12%] text-brand-white md:flex">
        <div className="relative flex flex-col gap-8">
          <h1 className="text-6xl font-extrabold leading-[1.15]">
            Olá,
            <br />
            <span className="text-brand-yellow">COOPERADO!</span>
          </h1>
          <p className="max-w-md text-lg font-medium leading-[1.9]">
            Acesse um{" "}
            <strong className="font-extrabold text-brand-yellow">
              plano de negócios
            </strong>{" "}
            alinhado à realidade da sua cooperativa, junto a recursos
            fundamentais para sua{" "}
            <strong className="font-extrabold text-brand-yellow">
              comunicação.
            </strong>
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
      <section className="bg-brand-navy" />
    </main>
  )
}
