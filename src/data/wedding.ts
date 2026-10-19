const IMG = "/fabio-e-debora";

export const wedding = {
  path: "/fabio-e-debora",
  names: "Fabio e Debora",
  date: { day: "19", month: "09", year: "2026" },
  hero: `${IMG}/hero.jpg`,
  videoId: "L93sYL0C4Jg",
  videoTitle: "Fábio & Débora - Wedding film",
};

export const weddingNav = [
  { id: "home", label: "Home" },
  { id: "o-casal", label: "O casal" },
  { id: "padrinhos", label: "Padrinhos" },
  { id: "cerimonia", label: "Cerimônia" },
  { id: "recepcao", label: "Recepção" },
] as const;

export const welcome = {
  title: "Bem-Vindos a nossa historia de amor!",
  paragraphs: [
    "Sejam muito bem-vindos ao nosso site!",
    "Depois de tantos momentos compartilhados, chegou a hora de celebrarmos o próximo capítulo da nossa história.",
    "Criamos este espaço para dividir com vocês um pouquinho do amor que construímos ao longo dos anos e reunir todos os detalhes do nosso grande dia. Estamos muito felizes em viver esse sonho ao lado de pessoas tão importantes para nós.",
    "Que alegria ter vocês fazendo parte desse momento tão esperado!",
  ],
};

export const couple = {
  title: "O Casal",
  people: [
    { name: "Fabio", image: `${IMG}/couple-fabio.jpg` },
    { name: "Debora", image: `${IMG}/couple-debora.jpg` },
  ],
  paragraphs: [
    "Nossa história começou de uma forma inesperada, no meio de uma floresta, tentando chegar ao topo de uma montanha. Entre conversas e sorrisos, em um momento que parecia apenas mais uma aventura, um olhar apaixonado fez tudo mudar.",
    "Desde então, já são nove anos compartilhando a vida através das coisas que mais amamos: cantar juntos, ir ao cinema, apreciar um bom vinho, ter conversas tranquilas e com boas risadas. Nessas pequenas coisas encontramos o prazer da companhia um do outro e com fé, paciência e dedicação, construímos um amor leve, verdadeiro e cheio de significado.",
    "Agora, estamos contando os dias para celebrar o capítulo mais especial da nossa história, o nosso matrimônio!",
  ],
  gallery: Array.from({ length: 12 }, (_, i) => `${IMG}/gallery-${String(i + 1).padStart(2, "0")}.jpg`),
};

const godparentNames = [
  "Naisa e Rafael",
  "Kelvin e Viviana",
  "Emily e Lucas",
  "Bárbara e Richard",
  "Wesley e Keisilli",
  "Tatiana e Cleyton",
  "Rafael e Janaina",
  "Vânia e Daniel",
  "Damiana e Ademar",
  "Robson e Fernanda",
];

export const godparents = {
  title: "Padrinhos",
  paragraphs: [
    "Existe algo muito especial em ter ao nosso lado pessoas que, de alguma forma, tornam nossa vida mais alegre, divertida e incrível de se viver.",
    "Nossos padrinhos foram escolhidos por fazerem parte da nossa história por meio da amizade, presença e amor. São pessoas que admiramos profundamente e que, ao longo dos anos, estiveram conosco em momentos muito importantes para nós.",
    "Ter vocês ao nosso lado nesse dia tão importante torna tudo ainda mais inesquecível.",
  ],
  people: godparentNames.map((name, i) => ({
    name,
    image: `${IMG}/godparents-${String(i + 1).padStart(2, "0")}.jpg`,
  })),
};

export const ceremony = {
  title: "Cerimônia",
  image: `${IMG}/ceremony.jpg`,
  venue: "Igreja Matriz Nossa Senhora do Rosário",
  when: "19 de setembro de 2026, às 15:30hs",
  address: "Centro, Colombo/PR.",
  mapQuery: "Igreja Matriz Nossa Senhora do Rosário, Centro, Colombo, PR",
};

export const reception = {
  title: "Recepção",
  image: `${IMG}/reception.jpg`,
  venue: "Hotel Bolsi",
  address: "Rua Gabriel D’Anúncio Strapasson, 39 - Sapopema Colombo/PR",
  mapQuery: "Hotel Bolsi, Rua Gabriel D'Anúncio Strapasson, 39, Sapopema, Colombo, PR",
};
