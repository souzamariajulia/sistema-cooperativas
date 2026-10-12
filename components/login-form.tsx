"use client"

import { useState } from "react"
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const fieldClass =
  "h-16 rounded-lg border-[#3F6572] bg-[#123D4A] pl-14 text-base text-brand-white placeholder:text-[#7FAEB5] dark:bg-[#123D4A] md:text-base"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex w-full max-w-md flex-col text-brand-white">
      <div className="flex size-18 items-center justify-center rounded-full border border-brand-teal/30 bg-brand-teal/15 text-brand-teal">
        <User className="size-8" aria-hidden />
      </div>

      <h2 className="mt-9 text-4xl font-extrabold">Bem-vindo de volta!</h2>
      <p className="mt-4 text-base text-brand-white/60">
        Bom ter você aqui. Vamos continuar?
      </p>

      <form className="mt-12 flex flex-col">
        <label htmlFor="login" className="text-sm font-bold">
          E-mail
        </label>
        <div className="relative mt-4">
          <Mail
            className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-[#7FAEB5]"
            aria-hidden
          />
          <Input
            id="login"
            name="login"
            type="email"
            autoComplete="username"
            placeholder="Digite seu e-mail"
            className={fieldClass}
          />
        </div>

        <label htmlFor="password" className="mt-7 text-sm font-bold">
          Senha
        </label>
        <div className="relative mt-4">
          <Lock
            className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-[#7FAEB5]"
            aria-hidden
          />
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Digite sua senha"
            className={`${fieldClass} pr-14`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#7FAEB5] hover:text-brand-white"
          >
            {showPassword ? (
              <EyeOff className="size-5" aria-hidden />
            ) : (
              <Eye className="size-5" aria-hidden />
            )}
          </button>
        </div>

        <a
          href="#"
          className="mt-5 self-end text-sm text-brand-white/60 hover:text-brand-white"
        >
          Esqueci minha senha
        </a>

        <Button
          type="submit"
          className="mt-7 h-16 justify-between rounded-lg px-6 text-base font-bold text-brand-white"
        >
          Acessar minha conta
          <ArrowRight className="size-5" aria-hidden />
        </Button>
      </form>
    </div>
  )
}
