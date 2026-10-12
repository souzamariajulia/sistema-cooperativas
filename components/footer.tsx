export function Footer() {
  return (
    <footer className="bg-brand-navy border-brand-yellow px-gutter flex flex-col items-center gap-3 border-t-[0.5rem] py-12 text-center">
      <p className="text-brand-white/80 text-base">Comunicar, cooperar, transformar.</p>
      <p className="text-brand-white/50 text-xs">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  )
}
