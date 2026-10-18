# Sistema Cooperativas

Portal do cooperado em Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 e shadcn/ui sobre Base UI. Interface e textos em pt-BR.

@AGENTS.md

## Comandos

- `pnpm dev`: servidor de desenvolvimento
- `pnpm build`: build de produção
- `pnpm format`: formata com Prettier
- `pnpm format:check`: verifica a formatação

Use pnpm 12.11.2 (`packageManager`). Se o shim global falhar, use `corepack pnpm`.

## Estrutura

- `app/(portal)/`: route group com navbar e rodapé compartilhados (não aparece na URL)
- `app/login/`: tela de login, fora do layout do portal
- `components/ui/`: componentes base do shadcn
- `lib/routes.ts`: única fonte de caminhos e links da navbar
- `public/assets/`: imagens e elipses

## Convenções

- Caminhos de rota ficam em `lib/routes.ts`. Página nova: criar a pasta em `app/(portal)/`, registrar em `routes` e, se for item de menu, em `navLinks`. Nunca escreva caminhos literais nos componentes.
- Cores da marca são tokens em `app/globals.css` (`bg-brand-navy`, `bg-brand-teal`, `bg-brand-yellow`, `bg-brand-orange`, `bg-brand-white`, além de `bg-field`, `hover:bg-nav-hover`). Não use hex direto.
- Dimensões e cores de botões ficam nas variantes de `components/ui/button.tsx` (`default`, `accent`, `ghost`, ...). No uso, só ajustes de layout (`w-fit`, `justify-between`).
- O `font-size` do `html` é fluido (14px a 18px entre 768px e 1920px), então tudo em rem escala junto. Use as classes padrão do Tailwind (`text-sm`, `text-base`) e a utility `px-gutter` para o recuo lateral das seções.
- Ícones vêm do `lucide-react`.
- Componentes de página que usam hooks de navegação ou estado precisam de `'use client'`; o restante permanece Server Component.

## Estilo de código

- Prettier: sem ponto e vírgula, aspas simples, 100 colunas, plugin do Tailwind. Rode `pnpm format` nos arquivos alterados, não no projeto inteiro, para não gerar diffs em arquivos não relacionados.
- Código autoexplicativo: não escreva comentários redundantes e remova os antigos ao editar. Comente apenas workarounds arquiteturais complexos e não óbvios.
- Evite abstrações antecipadas; prefira a solução mais simples que atende ao design.

## Segurança

- Nunca armazene valores sensíveis (senhas, tokens, chaves de API, strings de conexão) em texto puro no código, em `.env` versionado ou em configs de infraestrutura. Use um cofre ou gerenciador de segredos.

## Git

- Trabalhe em branches de feature (`feat/...`, `fix/...`) a partir da `main`; não commite direto na `main`.
- Mensagens de commit em pt-BR, no formato `tipo: descrição` (ex.: `feat:`, `fix:`).
- Para integrar a `main` em uma branch, use merge, não rebase.
