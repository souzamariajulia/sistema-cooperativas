export const routes = {
  home: '/',
  plano: '/plano',
  guia: '/guia',
  cooperativas: '/cooperativas',
  recursos: '/recursos',
  sobre: '/sobre-o-projeto',
  login: '/login',
} as const

export const navLinks = [
  { label: 'Início', href: routes.home },
  { label: 'Plano', href: routes.plano },
  { label: 'Guia', href: routes.guia },
  { label: 'Cooperativas', href: routes.cooperativas },
  { label: 'Recursos', href: routes.recursos },
  { label: 'Sobre o projeto', href: routes.sobre },
] as const

export const cooperativaRoutes = {
  sobre: (slug: string) => `${routes.cooperativas}/${slug}`,
  identidadeVisual: (slug: string) => `${routes.cooperativas}/${slug}/identidade-visual`,
  missaoVisaoValores: (slug: string) => `${routes.cooperativas}/${slug}/missao-visao-valores`,
}
