export type CooperativaImage = { src: string; alt: string }

export type SizedImage = CooperativaImage & { width: number; height: number }

export type InstitutionalSection = {
  title: string
  text: string | string[]
  background: string
  color: string
}

export type CooperativaDetails = {
  about: string
  identityIntro?: string
  location?: { latitude: number; longitude: number; zoom: number; title: string }
  portrait: string
  logo: SizedImage
  colors: string[]
  typographies?: SizedImage[]
  packaging: CooperativaImage[]
  institutional: InstitutionalSection[]
}

export type Cooperativa = {
  slug: string
  name: string
  description: string
  details?: CooperativaDetails
}

const institutionalPlaceholder =
  'O estatuto é o documento que funda a cooperativa e define o que ela pode fazer. É o primeiro passo porque nenhuma ação de comunicação se sustenta institucionalmente se o documento que rege a entidade não a prevê.'

function institutionalSections(content: {
  mission: InstitutionalSection['text']
  vision: InstitutionalSection['text']
  values: InstitutionalSection['text']
}): InstitutionalSection[] {
  return [
    { title: 'Missão', text: content.mission, background: '#b11a24', color: '#ffffff' },
    { title: 'Visão', text: content.vision, background: '#e7890a', color: '#f3e5d1' },
    { title: 'Valores', text: content.values, background: '#f3e5d1', color: '#003140' },
  ]
}

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
      logo: {
        src: '/assets/cooperativas/coopevi/logo.webp',
        alt: 'Logotipo da COOPEVI',
        width: 512,
        height: 512,
      },
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
      institutional: institutionalSections({
        mission: institutionalPlaceholder,
        vision: institutionalPlaceholder,
        values: institutionalPlaceholder,
      }),
    },
  },
  {
    slug: 'coomara',
    name: 'COOMARA',
    description: 'Cooperativa Mista dos Assentamentos de Reforma Agrária da Região Tocantina LTDA',
    details: {
      identityIntro:
        'Contemple e acesse os recursos visuais referente à Cooperativa Mista dos Assentamentos de Reforma Agrária da Região Tocantina LTDA - COOMARA',
      about:
        'Sediada na Rua São Francisco, s/n, Projeto de Assentamento Nova Conquista, zona rural, em Açailândia (Região Tocantina), a COOMARA (CNPJ 02.023.043/0001-18) teve a assembleia geral de 57 fundação realizada em 22 de junho de 1997, no Salão Paroquial Católico de Imperatriz, reunindo cooperados dos assentamentos da região, entre eles o Assentamento Itacira, e o ato constitutivo protocolado na Junta Comercial do Estado do Maranhão em 08 de julho de 1997, com NIRE 21400004515 concedido em 21 de julho de 1997 e data de abertura em 08 de agosto de 1997, sequência que o próprio timbre da entidade reproduz e que o extrato do Cadastro Nacional da Agricultura Familiar confirma.',
      portrait: '/assets/cooperativas/coomara/person.webp',
      logo: {
        src: '/assets/cooperativas/coomara/logo.webp',
        alt: 'Logotipo da COOMARA',
        width: 1264,
        height: 848,
      },
      colors: ['#c44113', '#602f18', '#ffaa01', '#004e2a', '#9757d2'],
      typographies: [
        {
          src: '/assets/cooperativas/coomara/typography-1.webp',
          alt: 'Eldes Cordel',
          width: 4096,
          height: 470,
        },
        {
          src: '/assets/cooperativas/coomara/typography-2.webp',
          alt: 'Cabin',
          width: 1187,
          height: 390,
        },
      ],
      packaging: [
        {
          src: '/assets/cooperativas/coomara/packaging-1.webp',
          alt: 'Embalagem de azeite de coco',
        },
        { src: '/assets/cooperativas/coomara/packaging-2.webp', alt: 'Embalagem de mel' },
        { src: '/assets/cooperativas/coomara/packaging-3.webp', alt: 'Embalagem de arroz torrado' },
      ],
      institutional: institutionalSections({
        mission:
          'Atuar de forma segura e rentável, com responsabilidade socioambiental, através da produção, beneficiamento e comercialização da produção agropecuária, fornecendo produtos saudáveis e prestando serviços com excelência, procurando atender as necessidades dos clientes e gerando retornos aos cooperados/as.',
        vision:
          'Promover melhorias na qualidade de vida dos/das cooperados/as e da sociedade de sua área de abrangência, agregando valor à produção camponesa através da agricultura familiar e economia solidária.',
        values: [
          'Responsabilidade socioambiental',
          'Ética',
          'Sustentabilidade',
          'Parcerias',
          'Eficiência e eficácia',
          'Inovação',
          'Transparência',
          'Oportunidades',
          'Formação e estudo permanente',
          'Solidariedade',
          'Cooperação',
        ],
      }),
    },
  },
  {
    slug: 'coopervid',
    name: 'COOPERVID',
    description:
      'Cooperativa de Produção Agropecuária dos Produtores da Microrregião da Baixada Maranhense',
    details: {
      about:
        'A COOPERVID — Cooperativa de Produção Agropecuária dos Produtores da Microrregião da Baixada Maranhense — atua no Assentamento Diamante Negro Jutaí, em Igarapé do Meio, também na Baixada Maranhense. É a cooperativa mais recente do ecossistema em termos de visibilidade nacional, tendo ganhado projeção com o Projeto Arroz Diamante — iniciativa iniciada em 2023 em parceria com a Prefeitura de Igarapé do Meio, o MST e a mineradora Vale, que expandiu a área plantada de 25 para 50 hectares, com expectativa de produção superior a 80 toneladas de arroz, envolvendo mais de 15 famílias.',
      portrait: '/assets/cooperativas/coopervid/person.webp',
      logo: {
        src: '/assets/cooperativas/coopervid/logo.webp',
        alt: 'Logotipo do Projeto Arroz Diamante',
        width: 1024,
        height: 623,
      },
      colors: ['#427042', '#ffcc00', '#ffffff', '#211614'],
      typographies: [
        {
          src: '/assets/cooperativas/coopervid/typography-1.webp',
          alt: 'Valverde Semibold',
          width: 1498,
          height: 140,
        },
        {
          src: '/assets/cooperativas/coopervid/typography-2.webp',
          alt: 'Intrepid',
          width: 1419,
          height: 393,
        },
      ],
      packaging: [],
      institutional: institutionalSections({
        mission:
          'Atuar na produção agropecuária, na industrialização e processamento de produtos bem como na comercialização agropecuária de forma segura e rentável, respeitando o meio ambiente, fornecendo produtos saudáveis e de qualidade aos consumidores gerando qualidade de vida aos seus cooperados/as.',
        vision:
          'Estar entre as principais empresas e marcas do segmento da agricultura familiar, na produção e processamento e comercialização de alimentos de forma sustentável.',
        values: [
          'Ética e Responsabilidade socioambiental',
          'Sustentabilidade baseada nos princípios da agroecologia',
          'Parcerias',
          'Eficiência e eficácia',
          'Inovação tecnológica e técnica',
          'Transparência',
          'Oportunidades',
          'Formação e estudo permanentes',
          'Solidariedade',
          'Cooperação',
        ],
      }),
    },
  },
]

export function getCooperativa(slug: string) {
  return cooperativas.find((cooperativa) => cooperativa.slug === slug)
}
