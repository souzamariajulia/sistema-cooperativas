# Sistema Cooperativas

Portal do cooperado: ambiente com ferramentas, orientações e materiais para apoiar cooperativas na organização da comunicação e no processo de transformação digital.

## Tecnologias

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- [React](https://react.dev) 19 e TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [shadcn/ui](https://ui.shadcn.com) sobre [Base UI](https://base-ui.com), com `class-variance-authority` para variantes
- [lucide-react](https://lucide.dev) para ícones
- Fonte Manrope via `next/font/google`
- Prettier com `prettier-plugin-tailwindcss`

## Pré-requisitos

- Node.js 20 ou superior
- pnpm 12.11.2 (definido em `packageManager`; com o Corepack ativo, `corepack pnpm` já usa a versão correta)

## Como rodar

```bash
pnpm install
pnpm dev
```

A aplicação sobe em `http://localhost:3000`. A tela de login fica em `/login` e o portal em `/`.

## Scripts

| Comando             | O que faz                         |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Servidor de desenvolvimento       |
| `pnpm build`        | Build de produção                 |
| `pnpm start`        | Serve o build de produção         |
| `pnpm format`       | Formata o projeto com o Prettier  |
| `pnpm format:check` | Verifica a formatação sem alterar |

## Estrutura

```
app/
├─ layout.tsx               Layout raiz (fonte e html)
├─ globals.css              Tokens de design, utilities e animações
├─ login/                   Tela de login
└─ (portal)/                Route group com navbar e rodapé compartilhados
   ├─ layout.tsx
   ├─ page.tsx              Início (/)
   ├─ plano/                /plano
   ├─ guia/                 /guia
   ├─ cooperativas/         /cooperativas
   ├─ recursos/             /recursos
   └─ sobre-o-projeto/      /sobre-o-projeto
components/
├─ ui/                      Componentes base do shadcn (Button, Input, Card, Avatar)
├─ navbar.tsx               Navegação principal com menu hambúrguer no mobile
├─ keywords-bar.tsx         Faixa amarela com texto em looping
├─ features-section.tsx     Seção "O que você encontra aqui?"
├─ footer.tsx
└─ login-form.tsx
lib/
├─ routes.ts                Caminhos e links da navbar em um só lugar
└─ utils.ts                 Helper `cn` para mesclar classes
public/assets/              Imagens e elipses
```

O nome entre parênteses em `(portal)` é um route group do Next.js: organiza o código e compartilha o layout, mas não aparece na URL.

## Convenções

### Rotas

Todos os caminhos ficam em `lib/routes.ts`. Para criar uma página nova, adicione a pasta em `app/(portal)/`, registre o caminho em `routes` e, se for item de menu, em `navLinks`.

### Design tokens

As cores da marca estão em `app/globals.css` e podem ser usadas como classes do Tailwind: `bg-brand-navy`, `bg-brand-teal`, `bg-brand-yellow`, `bg-brand-orange` e `bg-brand-white`. Há também tokens de contexto, como `bg-field` e `hover:bg-nav-hover`.

### Tipografia e espaçamento fluidos

O `font-size` do `html` varia entre 14px e 18px conforme a largura da tela (de 768px a 1920px). Como o Tailwind usa rem, textos, espaçamentos e ícones escalam juntos, e as classes `text-sm`, `text-base` e semelhantes continuam valendo normalmente. O recuo lateral padrão das seções é a utility `px-gutter`.

### Botões

Dimensões e cores ficam nas variantes de `components/ui/button.tsx`, e não em cada uso. Use `variant="default"` (teal) ou `variant="accent"` (amarelo) e deixe nas classes apenas ajustes de layout, como `w-fit` ou `justify-between`.

### Formatação

O projeto usa Prettier sem ponto e vírgula, aspas simples e largura de 100 colunas. Rode `pnpm format` antes de abrir um pull request.

## Estado atual

- As páginas `/plano`, `/guia`, `/cooperativas`, `/recursos` e `/sobre-o-projeto` são placeholders.
- O login ainda não autentica: não há integração com API.
- Os botões "Sair" e "Explorar…" e o link "Esqueci minha senha" ainda não têm ação.
