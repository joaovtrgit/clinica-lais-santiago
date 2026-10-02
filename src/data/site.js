import { IMAGES } from './images'

// ============================================================================
// DADOS DO SITE
// Conteúdo DEMONSTRATIVO: nada aqui foi confirmado pela clínica.
// Itens marcados com TODO (REAL DATA) precisam ser substituídos antes de publicar.
// ============================================================================

// TODO (REAL DATA): número real com DDI + DDD, somente dígitos. Ex.: 5511999999999
export const WHATSAPP_NUMBER = '5511999999999'
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os procedimentos e agendar uma avaliação.'

export const waLink = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

// TODO (REAL DATA): perfil real do Instagram e endereço real da clínica.
export const INSTAGRAM_URL = 'https://www.instagram.com/'
export const INSTAGRAM_HANDLE = '@perfil-da-clinica'
export const ADDRESS_PLACEHOLDER = 'Endereço da clínica será inserido aqui.'
// Mapa: adicionar somente depois que o endereço real for confirmado.

export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const TRUST = [
  'Atendimento personalizado',
  'Experiência individualizada',
  'Foco em resultados naturais',
]

// DEMONSTRATIVO: procedimentos reais precisam ser confirmados pela clínica.
export const PROCEDURES = [
  { name: 'Harmonização Facial', text: 'Planejamento individual para valorizar os traços do rosto com naturalidade.', image: IMAGES.procHarmonizacao },
  { name: 'Cuidados Faciais', text: 'Protocolos de cuidado para a pele do rosto, definidos após uma avaliação.', image: IMAGES.procFacial },
  { name: 'Tratamentos Corporais', text: 'Cuidados corporais pensados para o seu momento e as suas necessidades.', image: IMAGES.procCorporal },
  { name: 'Skin Care', text: 'Rotina de cuidados com a pele, orientada de forma personalizada.', image: IMAGES.procSkincare },
]

// DEMONSTRATIVO: não inventar resultados reais. Usar fotos reais só com autorização.
export const RESULTS = [
  { image: IMAGES.res1, caption: 'Cuidados faciais (exemplo)' },
  { image: IMAGES.res2, caption: 'Skin care (exemplo)' },
  { image: IMAGES.res3, caption: 'Harmonização (exemplo)' },
  { image: IMAGES.res4, caption: 'Tratamento corporal (exemplo)' },
  { image: IMAGES.res5, caption: 'Cuidados faciais (exemplo)' },
  { image: IMAGES.res6, caption: 'Skin care (exemplo)' },
]

// DEMONSTRATIVO: sem promessas de resultado nem afirmações médicas.
export const BENEFITS = [
  { icon: 'clipboard', title: 'Avaliação individual', text: 'Um primeiro momento para ouvir o que você busca.' },
  { icon: 'sparkles', title: 'Cuidado personalizado', text: 'Cada plano considera as necessidades de cada pessoa.' },
  { icon: 'flower', title: 'Experiência acolhedora', text: 'Um ambiente pensado para você se sentir à vontade.' },
  { icon: 'heart', title: 'Acompanhamento próximo', text: 'Atenção para tirar dúvidas antes e depois do atendimento.' },
]

// TODO (REAL DATA): substituir por depoimentos reais, com autorização.
export const TESTIMONIALS = [
  { text: 'Depoimento real de cliente será inserido aqui.', name: 'Nome da cliente' },
  { text: 'Depoimento real de cliente será inserido aqui.', name: 'Nome da cliente' },
  { text: 'Depoimento real de cliente será inserido aqui.', name: 'Nome da cliente' },
]

// DEMONSTRATIVO: respostas genéricas. Confirmar com a clínica antes de publicar.
export const FAQ = [
  { q: 'Como funciona a avaliação?', a: 'A avaliação é o primeiro contato para conversar sobre o que você busca e conhecer as possibilidades de cuidado. Os detalhes serão confirmados pela clínica.' },
  { q: 'Preciso agendar antes de ir à clínica?', a: 'Para garantir um atendimento com atenção, o ideal é entrar em contato antes pelo WhatsApp. A clínica confirma a disponibilidade e os próximos passos.' },
  { q: 'Como saber qual procedimento é indicado para mim?', a: 'A indicação depende de uma avaliação individual. O melhor caminho é conversar com a equipe e contar o que você deseja.' },
  { q: 'Como posso entrar em contato?', a: 'Você pode falar com a clínica pelo WhatsApp ou pelo Instagram. Os canais oficiais serão confirmados antes da publicação.' },
]
