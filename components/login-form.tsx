'use client'

import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const fieldClass =
  'h-16 rounded-lg border-field-border bg-field pl-14 text-base text-brand-white placeholder:text-field-muted md:text-base'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="text-brand-white flex w-full max-w-md flex-col">
      <div className="border-brand-teal/30 bg-brand-teal/15 text-brand-teal flex size-18 items-center justify-center rounded-full border">
        <User className="size-8" aria-hidden />
      </div>

      <h2 className="mt-9 text-4xl font-extrabold">Bem-vindo de volta!</h2>
      <p className="text-brand-white/60 mt-4 text-base">Bom ter você aqui. Vamos continuar?</p>

      <form className="mt-12 flex flex-col">
        <label htmlFor="login" className="text-sm font-bold">
          E-mail
        </label>
        <div className="relative mt-4">
          <Mail
            className="text-field-muted pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2"
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
            className="text-field-muted pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2"
            aria-hidden
          />
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Digite sua senha"
            className={`${fieldClass} pr-14`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            className="text-field-muted hover:text-brand-white absolute top-1/2 right-5 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="size-5" aria-hidden />
            ) : (
              <Eye className="size-5" aria-hidden />
            )}
          </button>
        </div>

        <a href="#" className="text-brand-white/60 hover:text-brand-white mt-5 self-end text-sm">
          Esqueci minha senha
        </a>

        <Button type="submit" className="mt-7 justify-between">
          Acessar minha conta
          <ArrowRight className="size-5" aria-hidden />
        </Button>
      </form>
    </div>
  )
}
