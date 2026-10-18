export type CooperativaImage = { src: string; alt: string }

export type CooperativaDetails = {
  about: string
  location: { latitude: number; longitude: number; zoom: number; title: string }
  portrait: string
  logo: CooperativaImage
  colors: string[]
  typographies?: string[]
  packaging: CooperativaImage[]
  institutional: { title: string; text: string; background: string; color: string }[]
}

export type Cooperativa = {
  slug: string
  name: string
  description: string
  details?: CooperativaDetails
}

const institutionalPlaceholder =
  'O estatuto é o documento que funda a cooperativa e define o que ela pode fazer. É o primeiro passo porque nenhuma ação de comunicação se sustenta institucionalmente se o documento que rege a entidade não a prevê.'

export const cooperativas: Cooperativa[] = [
  {
    slug: 'coopevi',
    name: 'COOPEVI',
    description: 'Cooperativa Mista das áreas de Reforma Agrária do Vale do Itapecuru',
    details: {
      about:
        'A COOPEVI — fundada em 23 de outubro de 2012, no Assentamento Cristina Alves, município de Itapecuru Mirim — congrega 80 cooperados (com 12 na diretoria, sendo metade composta por mulheres e jovens) e tem abrangência regional sobre quatro municípios. Está consolidada nos mercados institucionais (85% das vendas para Programa de Aquisição de Alimentos (PAA), Programa Nacional de Alimentação Escolar (PNAE) e Armazém do Campo), com portfólio produtivo de peso (20.000 kg anuais de arroz beneficiado, 15.000 kg de farinha de mandioca d’água, 10.000 kg de feijão, entre outros) e infraestrutura produtiva completa: galinheiro, áreas de arroz, hortas, galpão, frota de transporte e sede com energia solar.',
      location: {
        latitude: -3.3973569,
        longitude: -44.3560724,
        zoom: 12,
        title: 'Localização da COOPEVI no mapa',
      },
      portrait: '/assets/cooperativas/coopevi/person.webp',
      logo: { src: '/assets/cooperativas/coopevi/logo.webp', alt: 'Logotipo da COOPEVI' },
      colors: ['#587c2d', '#e7890a', '#f3e5d1', '#b11a24', '#000000'],
      packaging: [
        {
          src: '/assets/cooperativas/coopevi/packaging-1.webp',
          alt: 'Embalagem de azeite de coco',
        },
        {
          src: '/assets/cooperativas/coopevi/packaging-2.webp',
          alt: 'Embalagem de geleia de goiaba',
        },
        { src: '/assets/cooperativas/coopevi/packaging-3.webp', alt: 'Embalagem de arroz de roça' },
      ],
      institutional: [
        {
          title: 'Missão',
          text: institutionalPlaceholder,
          background: '#b11a24',
          color: '#ffffff',
        },
        { title: 'Visão', text: institutionalPlaceholder, background: '#e7890a', color: '#f3e5d1' },
        {
          title: 'Valores',
          text: institutionalPlaceholder,
          background: '#f3e5d1',
          color: '#003140',
        },
      ],
    },
  },
  {
    slug: 'coomara',
    name: 'COOMARA',
    description: 'Cooperativa Mista dos Assentamentos de Reforma Agrária da Região Tocantina',
  },
  {
    slug: 'coopervid',
    name: 'COOPERVID',
    description: 'Cooperativa Mista dos Assentamentos de Reforma Agrária da Região Tocantina',
  },
]

export function getCooperativa(slug: string) {
  return cooperativas.find((cooperativa) => cooperativa.slug === slug)
}
