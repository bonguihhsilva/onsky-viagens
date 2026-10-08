// PROVISÓRIO: pacotes, passeios, valores e depoimentos são exemplos realistas.
// Substituir pelos dados da agência (Fase 2: tabelas Supabase em supabase/schema.sql).
import type { PackageCategory, PackageTag, Testimonial, Tour, TravelPackage } from "./types";

const packages: TravelPackage[] = [
  {
    slug: "gramado-e-canela",
    title: "Gramado e Canela",
    destination: "Serra Gaúcha",
    country: "Brasil",
    category: "nacional",
    tags: ["familia", "cidade"],
    nights: 4,
    departureFrom: "Aéreo saindo de Foz do Iguaçu (IGU)",
    hook: "Serra, chocolate quente e um Natal que a família lembra por anos.",
    summary:
      "Quatro noites entre Gramado e Canela com hotel no centro, a 5 minutos a pé da Rua Coberta. Roteiro pensado para o ritmo de quem viaja com crianças: manhãs de passeio, tardes livres.",
    image: "/img/gramado.jpg",
    imageAlt: "Igreja de pedra em Gramado sob céu azul, com árvores floridas na praça",
    includes: [
      "Passagem aérea Foz do Iguaçu ↔ Porto Alegre",
      "Transfer aeroporto ↔ hotel",
      "4 noites com café da manhã",
      "City tour Gramado e Canela",
      "Seguro viagem",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Ingressos de parques (Snowland, Mini Mundo)", "Refeições não mencionadas"],
    itinerary: [
      { day: "Dia 1", title: "Chegada à serra", text: "Voo de Foz, transfer até Gramado e noite livre na Rua Coberta." },
      { day: "Dia 2", title: "Gramado a pé", text: "Lago Negro, Rua Torta e as fábricas de chocolate com guia local." },
      { day: "Dia 3", title: "Canela", text: "Catedral de Pedra, Parque do Caracol e o Castelinho." },
      { day: "Dia 4", title: "Dia livre", text: "Sugestões nossas: Snowland, Mini Mundo ou tarde de compras." },
      { day: "Dia 5", title: "Retorno", text: "Transfer ao aeroporto e voo de volta para Foz." },
    ],
    departures: [
      { date: "2026-11-14", pricePerPerson: 3290 },
      { date: "2026-12-05", pricePerPerson: 3590 },
      { date: "2026-12-19", pricePerPerson: 4190, soldOut: true },
      { date: "2027-01-16", pricePerPerson: 3490 },
    ],
    maxInstallments: 10,
  },
  {
    slug: "maceio-e-maragogi",
    title: "Maceió e Maragogi",
    destination: "Alagoas",
    country: "Brasil",
    category: "nacional",
    tags: ["praia", "familia"],
    nights: 7,
    departureFrom: "Aéreo saindo de Foz do Iguaçu (IGU)",
    hook: "Piscinas naturais de água morna e uma semana sem relógio.",
    summary:
      "Sete noites em Maceió com hotel pé na areia em Pajuçara e um dia inteiro nas galés de Maragogi. Horários de passeio combinados com a tábua de marés, para você encontrar as piscinas no ponto certo.",
    image: "/img/maceio.jpg",
    imageAlt: "Vista aérea da costa de Alagoas com mar verde-claro e faixa de areia",
    includes: [
      "Passagem aérea Foz do Iguaçu ↔ Maceió",
      "Transfer aeroporto ↔ hotel",
      "7 noites com café da manhã",
      "Passeio às galés de Maragogi",
      "Passeio de jangada em Pajuçara",
      "Seguro viagem",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Taxa de embarque das galés", "Refeições não mencionadas"],
    itinerary: [
      { day: "Dia 1", title: "Chegada", text: "Voo de Foz, transfer e fim de tarde na orla de Pajuçara." },
      { day: "Dia 2", title: "Piscinas de Pajuçara", text: "Jangada até as piscinas naturais, no horário da maré baixa." },
      { day: "Dia 3", title: "Maragogi", text: "Dia inteiro nas galés, com almoço à beira-mar (opcional)." },
      { day: "Dias 4 a 7", title: "No seu ritmo", text: "Praia do Gunga, Francês ou descanso. Ajudamos a montar cada dia." },
      { day: "Dia 8", title: "Retorno", text: "Transfer ao aeroporto e voo de volta para Foz." },
    ],
    departures: [
      { date: "2026-11-21", pricePerPerson: 4890 },
      { date: "2027-01-09", pricePerPerson: 5690 },
      { date: "2027-02-06", pricePerPerson: 5290 },
    ],
    maxInstallments: 10,
  },
  {
    slug: "bariloche-inverno",
    title: "Bariloche na neve",
    destination: "Patagônia",
    country: "Argentina",
    category: "internacional",
    tags: ["neve", "familia"],
    nights: 6,
    departureFrom: "Aéreo saindo de Puerto Iguazú (IGR), com transfer de Foz",
    hook: "Cerro Catedral, lagos espelhados e chocolate de verdade.",
    summary:
      "Seis noites em Bariloche na temporada de neve, com hotel de frente para o lago Nahuel Huapi. Cuidamos do aluguel de roupas e equipamentos antes da viagem, para ninguém perder a manhã na fila.",
    image: "/img/bariloche.jpg",
    imageAlt: "Hotel histórico entre bosques e montanhas nevadas na Patagônia",
    includes: [
      "Transfer Foz ↔ aeroporto de Puerto Iguazú",
      "Passagem aérea Puerto Iguazú ↔ Bariloche",
      "6 noites com café da manhã",
      "Circuito Chico com guia em português",
      "Dia no Cerro Catedral com transfer",
      "Seguro viagem internacional",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Passes de esqui e aulas", "Aluguel de roupas de neve", "Refeições não mencionadas"],
    itinerary: [
      { day: "Dia 1", title: "Rumo à Patagônia", text: "Transfer a Puerto Iguazú e voo para Bariloche." },
      { day: "Dia 2", title: "Circuito Chico", text: "Cerro Campanario, Llao Llao e os mirantes do lago." },
      { day: "Dia 3", title: "Cerro Catedral", text: "Dia inteiro na neve, com equipamento já reservado." },
      { day: "Dias 4 a 6", title: "Livre com sugestões", text: "Cerro Otto, Isla Victoria ou o centro cívico e suas chocolaterias." },
      { day: "Dia 7", title: "Retorno", text: "Voo para Puerto Iguazú e transfer até sua casa em Foz." },
    ],
    departures: [
      { date: "2027-07-03", pricePerPerson: 7450 },
      { date: "2027-07-17", pricePerPerson: 7890 },
      { date: "2027-08-07", pricePerPerson: 7190 },
    ],
    maxInstallments: 12,
  },
  {
    slug: "santiago-e-valle-nevado",
    title: "Santiago e Valle Nevado",
    destination: "Santiago e Andes",
    country: "Chile",
    category: "internacional",
    tags: ["cidade", "neve"],
    nights: 5,
    departureFrom: "Aéreo saindo de Foz do Iguaçu (IGU) com conexão",
    hook: "A cordilheira na janela do hotel e vinícolas a uma hora do centro.",
    summary:
      "Cinco noites em Santiago com hotel em Providencia, um dia em Valle Nevado e uma tarde na vinícola Concha y Toro. Câmbio, chip de celular e roupas de neve orientados antes do embarque.",
    image: "/img/santiago.jpg",
    imageAlt: "Santiago do Chile com a Cordilheira dos Andes nevada ao fundo",
    includes: [
      "Passagem aérea Foz do Iguaçu ↔ Santiago",
      "Transfer aeroporto ↔ hotel",
      "5 noites com café da manhã",
      "City tour Santiago",
      "Excursão a Valle Nevado",
      "Visita à vinícola Concha y Toro",
      "Seguro viagem internacional",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Aluguel de roupas de neve", "Refeições não mencionadas"],
    itinerary: [
      { day: "Dia 1", title: "Chegada", text: "Voo de Foz, transfer e jantar livre no Bairro Lastarria." },
      { day: "Dia 2", title: "Santiago", text: "Palacio de La Moneda, Cerro Santa Lucía e Mercado Central." },
      { day: "Dia 3", title: "Valle Nevado", text: "Subida à cordilheira e dia na neve." },
      { day: "Dia 4", title: "Vinhos", text: "Tarde em Concha y Toro com degustação." },
      { day: "Dia 5", title: "Livre", text: "Sugestão: Sky Costanera ao pôr do sol." },
      { day: "Dia 6", title: "Retorno", text: "Transfer ao aeroporto e voo para Foz." },
    ],
    departures: [
      { date: "2027-06-12", pricePerPerson: 5980 },
      { date: "2027-07-10", pricePerPerson: 6490 },
    ],
    maxInstallments: 12,
  },
  {
    slug: "buenos-aires",
    title: "Buenos Aires",
    destination: "Rio da Prata",
    country: "Argentina",
    category: "internacional",
    tags: ["cidade"],
    nights: 4,
    departureFrom: "Aéreo saindo de Puerto Iguazú (IGR), com transfer de Foz",
    hook: "Tango em San Telmo, livrarias e jantares que começam às dez.",
    summary:
      "Quatro noites em Palermo com um show de tango com jantar incluído. Indicamos restaurantes de acordo com o seu gosto e reservamos antes de você chegar.",
    image: "/img/buenos-aires.jpg",
    imageAlt: "Casa Rosada em Buenos Aires com a bandeira argentina e palmeiras",
    includes: [
      "Transfer Foz ↔ aeroporto de Puerto Iguazú",
      "Passagem aérea Puerto Iguazú ↔ Buenos Aires",
      "4 noites com café da manhã",
      "City tour com guia em português",
      "Show de tango com jantar",
      "Seguro viagem internacional",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Refeições não mencionadas"],
    itinerary: [
      { day: "Dia 1", title: "Chegada", text: "Transfer a Puerto Iguazú, voo e check-in em Palermo." },
      { day: "Dia 2", title: "Cidade", text: "Plaza de Mayo, La Boca, Puerto Madero e Recoleta." },
      { day: "Dia 3", title: "San Telmo", text: "Feira de antiguidades e, à noite, jantar com tango." },
      { day: "Dia 4", title: "Livre", text: "Sugestão: El Ateneo e um passeio por Tigre." },
      { day: "Dia 5", title: "Retorno", text: "Voo para Puerto Iguazú e transfer até Foz." },
    ],
    departures: [
      { date: "2026-11-07", pricePerPerson: 3690 },
      { date: "2026-12-02", pricePerPerson: 3890 },
      { date: "2027-03-13", pricePerPerson: 3590 },
    ],
    maxInstallments: 10,
  },
  {
    slug: "orlando-em-familia",
    title: "Orlando em família",
    destination: "Flórida",
    country: "Estados Unidos",
    category: "internacional",
    tags: ["familia", "cidade"],
    nights: 9,
    departureFrom: "Aéreo saindo de Foz do Iguaçu (IGU) com conexão",
    hook: "Nove noites de parques com um plano para cada dia e cada idade.",
    summary:
      "Nove noites em casa com piscina a 15 minutos dos parques, carro alugado e ingressos para 4 parques. Antes da viagem, montamos com você a ordem dos parques e os horários de cada atração.",
    image: "/img/orlando.jpg",
    imageAlt: "Horizonte de Orlando refletido no lago em um dia de céu limpo",
    includes: [
      "Passagem aérea Foz do Iguaçu ↔ Orlando",
      "9 noites em casa de temporada com piscina",
      "Carro alugado com seguro",
      "Ingressos para 4 parques",
      "Assessoria para o visto americano",
      "Seguro viagem internacional",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Taxa do visto", "Refeições", "Combustível e pedágios"],
    itinerary: [
      { day: "Dia 1", title: "Chegada", text: "Voo de Foz, retirada do carro e check-in na casa." },
      { day: "Dias 2 a 5", title: "Parques", text: "Quatro parques na ordem que planejamos juntos, com dias de descanso entre eles." },
      { day: "Dias 6 a 9", title: "Livre", text: "Outlets, Kennedy Space Center ou praia em Cocoa Beach." },
      { day: "Dia 10", title: "Retorno", text: "Devolução do carro e voo de volta para Foz." },
    ],
    departures: [
      { date: "2027-01-08", pricePerPerson: 13900 },
      { date: "2027-07-02", pricePerPerson: 14800 },
    ],
    maxInstallments: 12,
  },
  {
    slug: "lisboa-e-porto",
    title: "Lisboa e Porto",
    destination: "Península Ibérica",
    country: "Portugal",
    category: "internacional",
    tags: ["cidade"],
    nights: 9,
    departureFrom: "Aéreo saindo de Foz do Iguaçu (IGU) com conexão",
    hook: "Elétricos, azulejos e o Douro ao entardecer, no seu ritmo.",
    summary:
      "Cinco noites em Lisboa e quatro no Porto, com trem entre as duas cidades e um dia no Vale do Douro. Montamos as datas com você, de acordo com voos e temporada.",
    image: "/img/lisboa.jpg",
    imageAlt: "Elétrico amarelo subindo uma rua estreita de Lisboa entre prédios antigos",
    includes: [
      "Passagem aérea Foz do Iguaçu ↔ Lisboa",
      "5 noites em Lisboa e 4 no Porto, com café da manhã",
      "Trem Lisboa → Porto",
      "Dia no Vale do Douro com degustação",
      "Seguro viagem internacional",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Refeições não mencionadas", "Taxa turística municipal"],
    itinerary: [
      { day: "Dias 1 a 5", title: "Lisboa", text: "Alfama, Belém, Sintra e uma noite de fado." },
      { day: "Dia 6", title: "Trem para o Porto", text: "Viagem de três horas pela costa." },
      { day: "Dias 7 a 9", title: "Porto e Douro", text: "Ribeira, caves de vinho do Porto e um dia no Douro." },
      { day: "Dia 10", title: "Retorno", text: "Voo de volta para Foz." },
    ],
    departures: [],
    maxInstallments: 12,
  },
  {
    slug: "cancun-lua-de-mel",
    title: "Cancún lua de mel",
    destination: "Caribe mexicano",
    country: "México",
    category: "internacional",
    tags: ["lua-de-mel", "praia"],
    nights: 7,
    departureFrom: "Aéreo saindo de Foz do Iguaçu (IGU) com conexão",
    hook: "Sete noites all inclusive só para adultos, com o mar do Caribe na varanda.",
    summary:
      "Sete noites em resort all inclusive exclusivo para adultos, quarto com vista para o mar e jantar romântico na praia. Avisamos o hotel da lua de mel antes da chegada.",
    image: "/img/cancun.jpg",
    imageAlt: "Guarda-sóis de palha na areia branca de Cancún, com o mar turquesa ao fundo",
    includes: [
      "Passagem aérea Foz do Iguaçu ↔ Cancún",
      "Transfer privativo aeroporto ↔ resort",
      "7 noites all inclusive, quarto vista mar",
      "Jantar romântico na praia",
      "Passeio a Isla Mujeres de catamarã",
      "Seguro viagem internacional",
      "Suporte Onsky 24h pelo WhatsApp",
    ],
    excludes: ["Passeios a Chichén Itzá e cenotes (opcionais)", "Spa"],
    itinerary: [
      { day: "Dia 1", title: "Chegada", text: "Voo de Foz, transfer privativo e check-in com surpresa no quarto." },
      { day: "Dia 3", title: "Isla Mujeres", text: "Catamarã com snorkel e almoço na ilha." },
      { day: "Dia 5", title: "Jantar na praia", text: "Mesa reservada ao pôr do sol." },
      { day: "Demais dias", title: "Livre", text: "Resort, cenotes ou Chichén Itzá. Reservamos o que vocês quiserem." },
      { day: "Dia 8", title: "Retorno", text: "Transfer privativo e voo para Foz." },
    ],
    departures: [
      { date: "2026-12-12", pricePerPerson: 11800 },
      { date: "2027-02-20", pricePerPerson: 10900 },
      { date: "2027-04-17", pricePerPerson: 10490 },
    ],
    maxInstallments: 12,
  },
];

const tours: Tour[] = [
  {
    slug: "cataratas-lado-brasileiro",
    title: "Cataratas, lado brasileiro",
    country: "Brasil",
    duration: "4 horas",
    price: 190,
    summary:
      "A vista panorâmica das quedas pela trilha de 1,2 km até a passarela da Garganta do Diabo. O passeio mais pedido, e com razão.",
    includes: ["Busca no hotel", "Ingresso do Parque Nacional", "Guia credenciado"],
    image: "/img/cataratas-br.jpg",
    imageAlt: "Visitantes na passarela de madeira diante das Cataratas do Iguaçu",
  },
  {
    slug: "cataratas-lado-argentino",
    title: "Cataratas, lado argentino",
    country: "Argentina",
    duration: "Dia inteiro",
    price: 340,
    summary:
      "Trem ecológico até a Garganta do Diabo e os circuitos superior e inferior, caminhando por cima e por baixo das quedas.",
    includes: ["Busca no hotel", "Ingresso do Parque Nacional Iguazú", "Guia em português", "Trâmite de fronteira"],
    note: "Leve RG ou passaporte. Cuidamos do trâmite na aduana.",
    image: "/img/garganta.jpg",
    imageAlt: "A Garganta do Diabo vista de perto, com névoa subindo das quedas",
  },
  {
    slug: "macuco-safari",
    title: "Macuco Safari",
    country: "Brasil",
    duration: "2 horas",
    price: 520,
    summary:
      "Trilha na mata, jipe elétrico e o barco que chega até a base das quedas. Leve roupa extra: você vai se molhar.",
    includes: ["Busca no hotel", "Ingresso do Parque", "Macuco Safari completo"],
    image: "/img/macuco.jpg",
    imageAlt: "Barco no rio Iguaçu entre paredões de mata, rumo às quedas",
  },
  {
    slug: "itaipu-panoramica",
    title: "Itaipu Panorâmica",
    country: "Brasil",
    duration: "2 horas",
    price: 150,
    summary:
      "Visita à usina de Itaipu com parada no mirante central e na barragem. Para os curiosos, existe também o circuito especial pelo interior.",
    includes: ["Busca no hotel", "Ingresso Itaipu Panorâmica"],
    image: "/img/itaipu.jpg",
    imageAlt: "Barragem de concreto de uma usina hidrelétrica sob céu azul",
  },
  {
    slug: "parque-das-aves",
    title: "Parque das Aves",
    country: "Brasil",
    duration: "3 horas",
    price: 160,
    summary:
      "Viveiros de imersão na mata atlântica, com tucanos, araras e flamingos a poucos metros. Combina bem com as Cataratas no mesmo dia.",
    includes: ["Busca no hotel", "Ingresso do Parque das Aves"],
    image: "/img/aves.jpg",
    imageAlt: "Tucano-toco empoleirado em um galho, com o bico laranja em destaque",
  },
  {
    slug: "marco-das-tres-fronteiras",
    title: "Marco das Três Fronteiras",
    country: "Brasil",
    duration: "Fim de tarde",
    price: 120,
    summary:
      "O encontro dos rios Paraná e Iguaçu ao pôr do sol, com Argentina e Paraguai do outro lado da água. Espetáculo de luzes ao anoitecer.",
    includes: ["Busca no hotel", "Ingresso com espetáculo noturno"],
    image: "/img/fronteira.jpg",
    imageAlt: "Rio largo cortando a mata ao entardecer, com céu alaranjado",
  },
  {
    slug: "compras-no-paraguai",
    title: "Compras em Ciudad del Este",
    country: "Paraguai",
    duration: "Meio dia",
    price: 90,
    summary:
      "Transfer com guia que conhece as lojas confiáveis, orienta sobre a cota de isenção e acompanha você na volta pela Ponte da Amizade.",
    includes: ["Busca no hotel", "Guia de compras", "Orientação sobre cota e Receita"],
    note: "Leve RG ou passaporte.",
    image: "/img/compras.jpg",
    imageAlt: "Sacola de papel de compras sobre fundo claro",
  },
];

// Depoimentos ocultos até a agência enviar avaliações reais (ex.: Google).
// A seção da home some sozinha com a lista vazia. Exemplos de formato:
// const exemplos = [
//   {
//     quote:
//       "Nosso voo de volta foi cancelado em Santiago às onze da noite. Antes de eu terminar de ler o e-mail da companhia, a Onsky já tinha mandado mensagem com hotel e o voo remarcado.",
//     name: "Camila e Rodrigo",
//     trip: "Santiago e Valle Nevado",
//   },
//   {
//     quote: "Viajei com meus pais de 70 anos e não precisei me preocupar com nada. Até a cadeira de rodas no aeroporto estava pedida.",
//     name: "Juliana",
//     trip: "Lisboa e Porto",
//   },
//   {
//     quote: "Montaram o roteiro de Orlando pensando nas crianças. Fizemos todos os parques sem nenhuma fila desnecessária.",
//     name: "Família Albuquerque",
//     trip: "Orlando em família",
//   },
// ];
export const testimonials: Testimonial[] = [];

export type PackageFilter = "todos" | PackageCategory | Extract<PackageTag, "familia" | "lua-de-mel">;
export type PackageSort = "saida" | "preco";

export const packageFilters: { value: PackageFilter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "nacional", label: "Nacionais" },
  { value: "internacional", label: "Internacionais" },
  { value: "familia", label: "Em família" },
  { value: "lua-de-mel", label: "Lua de mel" },
];

const available = (p: TravelPackage) => p.departures.filter((d) => !d.soldOut);

export function startingPrice(p: TravelPackage): number | null {
  const prices = available(p).map((d) => d.pricePerPerson);
  return prices.length ? Math.min(...prices) : null;
}

export function nextDeparture(p: TravelPackage) {
  return available(p).sort((a, b) => a.date.localeCompare(b.date))[0] ?? null;
}

export function filterPackages(list: TravelPackage[], filter: PackageFilter, sort: PackageSort) {
  const filtered = list.filter((p) =>
    filter === "todos" ? true : p.category === filter || p.tags.includes(filter as PackageTag),
  );
  const key = (p: TravelPackage) =>
    sort === "preco" ? startingPrice(p) ?? Infinity : nextDeparture(p)?.date ?? "9999";
  return [...filtered].sort((a, b) => {
    const ka = key(a);
    const kb = key(b);
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });
}

export async function getPackages(filter: PackageFilter = "todos", sort: PackageSort = "saida") {
  return filterPackages(packages, filter, sort);
}

export async function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug) ?? null;
}

export async function getTours() {
  return tours;
}
