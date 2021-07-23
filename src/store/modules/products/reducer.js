const defaultState = [
  {
    id: 1,
    name: "Jogo Detetive com App",
    price: 59.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/71iZi6jMZaL._AC_SL1000_.jpg",
    linkCompra:
      "https://www.amazon.com.br/Brinquedos-Estrela-1201602900039-Aplicativo-Multicores/dp/B077PLGRBY/ref=asc_df_B077PLGRBY/?tag=googleshopp00-20&linkCode=df0&hvadid=379699826596&hvpos=&hvnetw=g&hvrand=11143826466849062307&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001724&hvtargid=pla-810261229609&psc=1",
    description:
      "O milionário Carlos Fortuna foi vítima de assassinato! Percorra a cidade e colete as provas que apontem (ou inocentem) o assassino, a cena e a arma do crime.",
  },
  {
    id: 2,
    name: "Jogo Uno",
    price: 14.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/815nAMwl39L._AC_SL1500_.jpg",
    linkCompra:
      "https://www.amazon.com.br/Jogo-Uno-Copag-Estampado/dp/B076LXCSCK/ref=pd_vtp_1/147-6695302-6476546?pd_rd_w=jwqAQ&pf_rd_p=460b1bd2-2dd3-4463-8569-0282c9641107&pf_rd_r=HYMRB8B8ZAT0MXPR5JR0&pd_rd_r=29bdadc8-222d-4af9-8296-0676c0b1c937&pd_rd_wg=iZAM8&pd_rd_i=B076LXCSCK&psc=1",
    description:
      "Uno é um dos jogos de cartas mais famoso do mundo, Para pessoas de todas as idades e muito divertido. Agora a Copag produz e distribui uno em parceria com a Mattel. Esta edição do uno traz uma super novidade, 3 cartas para personalizar e mais 1 carta extra que adiciona uma nova regra ao jogo. É fácil começar, é impossível parar. Livre-se depressa de suas cartas. Combine cores e números. Use as cartas de ação para atrapalhar os seus oponentes. Quando você tiver apenas uma carta na mão, não se esqueça de gritar “uno.”.",
  },
  {
    id: 3,
    name: "Jogo Monopoly ",
    price: 79.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/81Nh5q-5XAL._AC_SL1500_.jpg",
    linkCompra:
      "https://www.amazon.com.br/dp/B07DH86GB3/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B07DH86GB3p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNVZNVE1SRjJGVjdRJmVuY3J5cHRlZElkPUEwMTM0ODAwMTVHVDM2VktSVldQUCZlbmNyeXB0ZWRBZElkPUEwNDE2NzIzMzNURlZZMTNCSkRHUSZ3aWRnZXROYW1lPXNwX2RldGFpbDImYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    description:
      "Um clássico para reuniões de família. Os jogadores devem comprar, vender, sonhar e trapacear para conquistar as fortunas do jogo Monopoly. Há um novo milionário na cidade! Os jogadores devem comprar e vender propriedades, cobrar aluguel e construir um império no jogo Monopoly para adultos e crianças a partir de 8 anos. As cartas Sorte e Cofre podem mudar o destino do jogador! Qual carta vai dar dinheiro e qual carta vai enviar o jogador para a cadeia? Inclui peças clássicas como pato de borracha, tiranossauro rex e pinguim. É uma excelente atividade para uma reunião de família. Apenas uma pessoa pode vencer.",
  },
  {
    id: 4,
    name: "Jogo Banco Imobiliário",
    price: 85.41,
    img: "https://images-na.ssl-images-amazon.com/images/I/910QO41sGRL._AC_SL1500_.jpg",
    linkCompra:
      "https://www.amazon.com.br/Brinquedos-Estrela-1201602800019-Imobili%C3%A1rio-Multicores/dp/B01N6A114U/ref=pd_sbs_1/147-6695302-6476546?pd_rd_w=DnZpZ&pf_rd_p=2b68fc86-1a28-4471-b574-e81acc03ba5c&pf_rd_r=CDKTX2XWNA0W0AJ2N21J&pd_rd_r=7f1c677c-d93a-487b-861e-468569e7dc0e&pd_rd_wg=hpe9y&pd_rd_i=B01N6A114U&psc=1",
    description:
      "O mercado de imóveis se modernizou e está cada vez mais competitivo. Diversificar os investimentos virou palavra de ordem. O banco imobiliário traz todo o dinamismo do mundo dos negócios para os dias de hoje.",
  },
  {
    id: 5,
    name: "Jogo da Vida",
    price: 78.39,
    img: "https://images-na.ssl-images-amazon.com/images/I/61Z-55dKdeL._AC_SL1000_.jpg",
    linkCompra:
      "https://www.amazon.com.br/Brinquedos-Estrela-1201602900041-Jogo-Multicores/dp/B076X6CCGJ/ref=pd_sim_1/147-6695302-6476546?pd_rd_w=uOmAF&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=YY2DK2AWGB89W0VZGESQ&pd_rd_r=024afed5-b213-458a-8974-cc868a9cc515&pd_rd_wg=Uipb5&pd_rd_i=B076X6CCGJ&psc=1",
    description:
      "Trilhe o seu caminho em busca do sucesso. Desenvolva a sua carreira, ganhe dinheiro, case e tenha filhos. O jogo da vida é a simulação da vida real com muita diversão.",
  },
  {
    id: 6,
    name: "Jogo War",
    price: 98.9,
    img: "https://images-na.ssl-images-amazon.com/images/I/61b7dfGwn-L._AC_SL1200_.jpg",
    linkCompra:
      "https://www.amazon.com.br/Grow-920-Jogo-War-Multicor/dp/B077P8D5Q5/ref=pd_sim_3/147-6695302-6476546?pd_rd_w=0YyJS&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=Q86WDFZRJH8TPWES9BTY&pd_rd_r=2ea849ce-9574-4a39-8189-bbe8ef9f0115&pd_rd_wg=cy5dx&pd_rd_i=B077P8D5Q5&psc=1",
    description:
      "O melhor jogo de estratégia de todos os tempos Com War, uma batalha nunca é igual a outra, e cada jogador precisa usar toda sua inteligência e astúcia para derrotar seus adversários e conquistar territórios e continentes Conheça as emoções deste jogo de estratégia.",
  },
  {
    id: 7,
    name: "Jogo Operando",
    price: 99.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/81BxnML0PtL._AC_SL1500_.jpg",
    linkCompra:
      "https://www.amazon.com.br/dp/B076X7W2P4/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B076X7W2P4p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRDBTWVlGWEo3WE1IJmVuY3J5cHRlZElkPUEwNTExODAzM1BRVkNQMjJOU0M4VCZlbmNyeXB0ZWRBZElkPUEwNDE2NTExTVBUT0lDQVY4STFVJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    description:
      "Seja o médico nessa nova maneira de jogar Operando. Escolha uma carta e opere o Sam para retirar os objetos de dentro dele. Retiros objetos, mas não toque nas extremidades, se o alarme for acionado você perde a vez.",
  },
  {
    id: 8,
    name: "Jogo Genius",
    price: 130.9,
    img: "https://images-na.ssl-images-amazon.com/images/I/715DZibNb1L._AC_SL1200_.jpg",
    linkCompra:
      "https://www.amazon.com.br/Brinquedos-Estrela-1001608900002-Genius-Multicores/dp/B077P8HCHD/ref=pd_sim_4/147-6695302-6476546?pd_rd_w=hbWEL&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=BFEMTMBY0FZ7164XH73Z&pd_rd_r=032d35ed-52a9-4df3-8a8e-05fcb54eaeef&pd_rd_wg=xXvjN&pd_rd_i=B077P8HCHD&psc=1",
    description:
      "Tiii, Titaa, Titatãã e Tooom. O clássico está de volta! Aceite o desafio: Pense rápido e tente repetir as sequências de luzes e sons.",
  },
  {
    id: 9,
    name: "Jogo Jenga",
    price: 99.9,
    img: "https://images-na.ssl-images-amazon.com/images/I/81OAWwX3djL._AC_SL1500_.jpg",
    linkCompra:
      "https://www.amazon.com.br/Hasbro-A2120E180-Jogo-Jenga-Cl%C3%A1ssico/dp/B00ABA0ZOA/ref=pd_sim_4/147-6695302-6476546?pd_rd_w=DMK41&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=BHQ341Y1D1HW54JHJCYE&pd_rd_r=10faaf92-3725-4ffc-a602-8d2a96a9367f&pd_rd_wg=VqOl6&pd_rd_i=B00ABA0ZOA&psc=1",
    description:
      "Um jogo de estratégia e movimentos precisos. escolha bem o bloco e seja preciso em seus movimentos. Passando os blocos da base para o topo, mostre que você é habilidoso, tomando cuidado para não derrubar a torre.",
  },
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
