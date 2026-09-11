export type HardwarePart = {
  kind: string; id: string; name: string; mark: string; title: string; subtitle: string; description: string;
  notes: string[][]; image: string; alt: string; group: 'internal' | 'peripheral';
};
export const extraParts: HardwarePart[] = [
  {
    "kind": "ram",
    "id": "memoria-ram",
    "name": "Memória RAM",
    "mark": "RAM",
    "title": "Mais espaço para pensar.",
    "subtitle": "Mais fluidez para criar.",
    "description": "A memória de trabalho mantém os dados dos programas por perto enquanto você usa o computador.",
    "notes": [
      [
        "Capacidade",
        "ESPAÇO DE TRABALHO",
        "Define quanto cabe na memória ao mesmo tempo.",
        "Mais capacidade ajuda quando vários programas e arquivos grandes precisam permanecer abertos. O benefício depende do uso."
      ],
      [
        "Geração DDR",
        "COMPATIBILIDADE",
        "O padrão da memória precisa combinar com a placa.",
        "DDR4 e DDR5 usam encaixes e características diferentes. Confira a geração aceita pela placa-mãe e pelo processador."
      ],
      [
        "Velocidade e latência",
        "TEMPO DE RESPOSTA",
        "Taxa de transferência e tempo de acesso trabalham juntos.",
        "Uma taxa maior movimenta mais dados por segundo. A latência indica espera; nenhum desses números, sozinho, resume o desempenho."
      ],
      [
        "Canais de memória",
        "TRABALHO EM CONJUNTO",
        "Módulos bem distribuídos ampliam a comunicação.",
        "Instalar a memória nos slots indicados no manual permite usar os canais disponíveis. Prefira kits compatíveis e confira os limites da plataforma."
      ]
    ],
    "image": "/images/ram.webp",
    "alt": "Memória RAM em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "gpu",
    "id": "placa-de-video",
    "name": "Placa de vídeo",
    "mark": "GPU",
    "title": "Cada quadro ganha vida.",
    "subtitle": "Cada detalhe aparece.",
    "description": "A placa de vídeo processa gráficos e acelera tarefas compatíveis, de jogos a edição e modelagem.",
    "notes": [
      [
        "Processador gráfico",
        "CÁLCULOS EM PARALELO",
        "Transforma instruções em imagens.",
        "A GPU executa muitos cálculos simultâneos. Arquitetura, programa e resolução influenciam o resultado."
      ],
      [
        "Memória de vídeo",
        "TEXTURAS E CENAS",
        "A VRAM guarda os dados usados pela GPU.",
        "Texturas, modelos e quadros ocupam memória de vídeo. A quantidade necessária varia conforme o jogo, a resolução e a aplicação."
      ],
      [
        "Refrigeração",
        "CALOR SOB CONTROLE",
        "Ventoinhas e dissipadores retiram o calor.",
        "O cooler transfere calor do chip para o ar. Deixe espaço ao redor da placa e mantenha o fluxo de ar do gabinete."
      ],
      [
        "Energia e encaixe",
        "MONTAGEM COMPATÍVEL",
        "Confira PCIe, tamanho e conectores de alimentação.",
        "A placa precisa caber no gabinete e receber energia suficiente. Verifique os conectores recomendados e a capacidade da fonte."
      ]
    ],
    "image": "/images/gpu.webp",
    "alt": "Placa de vídeo em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "ssd",
    "id": "ssd",
    "name": "SSD",
    "mark": "SSD",
    "title": "Menos espera.",
    "subtitle": "Mais tempo para fazer.",
    "description": "O SSD guarda sistema, programas e arquivos em memória flash, sem partes móveis.",
    "notes": [
      [
        "Memória flash",
        "DADOS QUE PERMANECEM",
        "Mantém arquivos mesmo com o computador desligado.",
        "Diferente da RAM, o armazenamento não perde o conteúdo ao desligar. Ainda assim, mantenha cópias de segurança dos arquivos importantes."
      ],
      [
        "Interface",
        "CAMINHO DOS DADOS",
        "SATA e NVMe usam caminhos diferentes.",
        "NVMe usa PCIe, enquanto SSDs SATA usam a interface SATA. M.2 é um formato físico e pode existir com protocolos diferentes."
      ],
      [
        "Capacidade",
        "ESPAÇO DISPONÍVEL",
        "Escolha espaço para o sistema e seus arquivos.",
        "Considere programas, jogos e crescimento da coleção. A capacidade exibida pelo sistema pode diferir do número anunciado."
      ],
      [
        "Temperatura",
        "DESEMPENHO CONSTANTE",
        "Controladora e chips também produzem calor.",
        "Alguns SSDs NVMe se beneficiam de dissipação. Instale o dissipador conforme o manual e mantenha ventilação adequada."
      ]
    ],
    "image": "/images/ssd.webp",
    "alt": "SSD em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "hdd",
    "id": "hd",
    "name": "Disco rígido",
    "mark": "HDD",
    "title": "Guarde sua história.",
    "subtitle": "Arquivo por arquivo.",
    "description": "O HD usa discos magnéticos para armazenar arquivos. É uma alternativa para grandes coleções de dados.",
    "notes": [
      [
        "Discos magnéticos",
        "ARMAZENAMENTO MECÂNICO",
        "Os dados ficam registrados em pratos internos.",
        "Cabeças de leitura acessam as superfícies dos discos. Por ser mecânico, o HD é mais sensível a impactos durante o funcionamento."
      ],
      [
        "Capacidade",
        "BIBLIOTECAS MAIORES",
        "Espaço para documentos, fotos e vídeos.",
        "Dimensione o armazenamento para o seu acervo. Um HD adicional só é backup quando contém uma cópia separada dos arquivos."
      ],
      [
        "Conexão SATA",
        "DADOS E ENERGIA",
        "Um cabo leva dados, outro fornece alimentação.",
        "Em HDs SATA de desktop, o cabo de dados vai à placa-mãe e o de alimentação vai à fonte."
      ],
      [
        "Formato físico",
        "LUGAR NO GABINETE",
        "A unidade precisa de uma baia compatível.",
        "HDs de desktop costumam usar 3,5 polegadas. Fixe a unidade corretamente para reduzir vibrações e proteger as conexões."
      ]
    ],
    "image": "/images/hdd.webp",
    "alt": "Disco rígido em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "psu",
    "id": "fonte",
    "name": "Fonte de alimentação",
    "mark": "PSU",
    "title": "Energia na medida.",
    "subtitle": "Estabilidade em cada tarefa.",
    "description": "A fonte converte a energia da tomada nas tensões utilizadas pelos componentes do computador.",
    "notes": [
      [
        "Potência",
        "CAPACIDADE DE ENTREGA",
        "Deve atender ao consumo do conjunto.",
        "Considere principalmente processador e placa de vídeo, além dos demais componentes. Confira as recomendações dos fabricantes."
      ],
      [
        "Eficiência",
        "MENOS DESPERDÍCIO",
        "Parte da energia se transforma em calor.",
        "A eficiência mede quanto da energia recebida é entregue ao sistema. Uma certificação de eficiência, sozinha, não resume a qualidade da fonte."
      ],
      [
        "Cabos e conectores",
        "ALIMENTAÇÃO CORRETA",
        "Cada componente exige conexões compatíveis.",
        "Placa-mãe, CPU, GPU e unidades SATA podem usar cabos diferentes. Nunca misture cabos modulares de fontes sem compatibilidade confirmada."
      ],
      [
        "Proteções",
        "FUNCIONAMENTO ESTÁVEL",
        "Circuitos monitoram condições anormais.",
        "Proteções contra sobrecorrente, sobretensão e temperatura ajudam a preservar o sistema. Não abra a fonte: componentes internos podem manter carga elétrica."
      ]
    ],
    "image": "/images/psu.webp",
    "alt": "Fonte de alimentação em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "cooler",
    "id": "cooler",
    "name": "Cooler do processador",
    "mark": "COOL",
    "title": "O calor encontra saída.",
    "subtitle": "O desempenho continua.",
    "description": "O cooler retira calor do processador. Pode usar um dissipador com ventoinha ou um circuito de refrigeração líquida.",
    "notes": [
      [
        "Base e pasta térmica",
        "TRANSFERÊNCIA DE CALOR",
        "A interface faz contato com o processador.",
        "A pasta térmica preenche pequenas irregularidades entre CPU e base. Aplique conforme as orientações do fabricante."
      ],
      [
        "Dissipador",
        "MAIS ÁREA DE TROCA",
        "Aletas espalham o calor para o ar.",
        "Em coolers a ar, tubos de calor podem levar energia da base às aletas. A ventoinha movimenta o ar entre elas."
      ],
      [
        "Ar ou líquido",
        "DUAS ABORDAGENS",
        "Escolha conforme espaço e necessidade térmica.",
        "Coolers a líquido usam bloco, bomba e radiador. O desempenho depende do projeto completo, da instalação e da ventilação."
      ],
      [
        "Compatibilidade",
        "FIXAÇÃO E ESPAÇO",
        "O suporte precisa combinar com o soquete.",
        "Confira o kit de montagem, a altura disponível e a folga para a RAM. Em modelos líquidos, verifique os pontos de instalação do radiador."
      ]
    ],
    "image": "/images/cooler.webp",
    "alt": "Cooler do processador em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "fan",
    "id": "ventoinhas",
    "name": "Ventoinhas",
    "mark": "AIR",
    "title": "O ar entra.",
    "subtitle": "O calor sai.",
    "description": "As ventoinhas renovam o ar do gabinete e ajudam os componentes a dissipar o calor.",
    "notes": [
      [
        "Fluxo de ar",
        "ENTRADA E SAÍDA",
        "Organize um caminho para o ar atravessar o gabinete.",
        "A direção costuma estar indicada na moldura. Posicione entradas e saídas conforme o gabinete e evite bloquear a passagem."
      ],
      [
        "Dimensão",
        "ENCAIXE NA ESTRUTURA",
        "Diâmetro e espessura precisam caber no suporte.",
        "Verifique as medidas aceitas pelo gabinete ou radiador. Furos de fixação e espaço para cabos também importam."
      ],
      [
        "Controle de rotação",
        "RUÍDO E TEMPERATURA",
        "A velocidade pode acompanhar a carga do sistema.",
        "Ventoinhas PWM permitem controle por sinal dedicado; modelos DC podem ser controlados por tensão, quando a placa oferece suporte."
      ],
      [
        "Filtros e manutenção",
        "PASSAGEM LIVRE",
        "Poeira acumulada dificulta a circulação.",
        "Limpe filtros e ventoinhas periodicamente com o computador desligado. Confira a corrente máxima dos conectores ao usar divisores."
      ]
    ],
    "image": "/images/fan.webp",
    "alt": "Ventoinhas em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "case",
    "id": "gabinete",
    "name": "Gabinete",
    "mark": "CASE",
    "title": "Cada peça no seu lugar.",
    "subtitle": "Tudo encontra espaço.",
    "description": "A estrutura protege e organiza os componentes, define o espaço interno e orienta o fluxo de ar.",
    "notes": [
      [
        "Formato da placa",
        "BASE DA MONTAGEM",
        "ATX, microATX e Mini-ITX exigem suporte adequado.",
        "O gabinete precisa aceitar o formato da placa-mãe. Instale os espaçadores somente nos pontos correspondentes aos furos da placa."
      ],
      [
        "Espaço interno",
        "MEDIDAS QUE IMPORTAM",
        "GPU, cooler e fonte precisam caber juntos.",
        "Confira comprimento da placa de vídeo, altura do cooler e dimensões da fonte. Radiadores e baias podem reduzir a folga."
      ],
      [
        "Ventilação",
        "AR EM MOVIMENTO",
        "Aberturas e filtros influenciam a refrigeração.",
        "Deixe entradas e saídas livres. Planeje as ventoinhas de acordo com a posição dos componentes e o espaço disponível."
      ],
      [
        "Painel e cabos",
        "CONEXÕES ACESSÍVEIS",
        "Botões e portas frontais chegam à placa-mãe.",
        "USB, áudio e botões usam conectores internos específicos. Consulte o manual e organize os cabos sem tensionar as conexões."
      ]
    ],
    "image": "/images/case.webp",
    "alt": "Gabinete em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "network",
    "id": "rede",
    "name": "Placa de rede",
    "mark": "NET",
    "title": "Conecte o computador.",
    "subtitle": "Aproxime possibilidades.",
    "description": "A conexão de rede pode estar integrada à placa-mãe ou ser adicionada por uma placa ou adaptador.",
    "notes": [
      [
        "Ethernet e Wi-Fi",
        "COM CABO OU SEM FIO",
        "Duas maneiras de acessar a rede local.",
        "Ethernet usa cabo de rede. Wi-Fi se comunica com um ponto de acesso, e o resultado depende de distância, interferência e equipamentos."
      ],
      [
        "Antenas",
        "RECEPÇÃO DO SINAL",
        "A posição influencia a comunicação sem fio.",
        "Instale as antenas indicadas e mantenha-as longe de obstáculos metálicos sempre que possível."
      ],
      [
        "Interface",
        "CONEXÃO AO COMPUTADOR",
        "Adaptadores podem usar PCIe, M.2 ou USB.",
        "Confira o encaixe disponível e o suporte do sistema operacional. Alguns modelos precisam de conexão interna adicional para Bluetooth."
      ],
      [
        "Velocidade real",
        "O CONJUNTO DEFINE",
        "O adaptador é apenas uma parte do caminho.",
        "Roteador, cabos, sinal, servidor e plano de internet podem limitar a transferência. A velocidade nominal não garante o resultado final."
      ]
    ],
    "image": "/images/network.webp",
    "alt": "Placa de rede em destaque, com seus componentes visíveis",
    "group": "internal"
  },
  {
    "kind": "monitor",
    "id": "monitor",
    "name": "Monitor",
    "mark": "VIEW",
    "title": "O resultado aparece.",
    "subtitle": "Na sua frente.",
    "description": "O monitor transforma o sinal de vídeo em imagem. Tamanho, painel e resolução mudam a experiência.",
    "notes": [
      [
        "Resolução",
        "DEFINIÇÃO DA IMAGEM",
        "A quantidade de pixels determina o detalhe.",
        "A nitidez percebida também depende do tamanho da tela e da distância de uso. Resoluções maiores exigem mais da GPU em jogos."
      ],
      [
        "Atualização",
        "MOVIMENTO MAIS FLUIDO",
        "Hertz indicam atualizações por segundo.",
        "Para aproveitar a taxa da tela, o computador precisa produzir quadros e a conexão deve suportar o modo escolhido."
      ],
      [
        "Painel e cores",
        "COMO A IMAGEM É EXIBIDA",
        "Contraste, cores e ângulos variam entre painéis.",
        "Tecnologias como IPS, VA e OLED têm características diferentes. Compare conforme iluminação do ambiente e tipo de uso."
      ],
      [
        "Entradas e ergonomia",
        "CONEXÃO E CONFORTO",
        "Confira portas, ajustes e suporte.",
        "HDMI, DisplayPort e USB-C dependem das capacidades de cada porta e cabo. Ajuste altura e posição para uma postura confortável."
      ]
    ],
    "image": "/images/monitor.webp",
    "alt": "Monitor em destaque, com seus componentes visíveis",
    "group": "peripheral"
  },
  {
    "kind": "keyboard",
    "id": "teclado",
    "name": "Teclado",
    "mark": "TYPE",
    "title": "Cada tecla, uma ação.",
    "subtitle": "Suas ideias em movimento.",
    "description": "O teclado envia comandos e texto ao computador. Layout, mecanismo e formato definem a sensação de uso.",
    "notes": [
      [
        "Mecanismo das teclas",
        "O TOQUE DE CADA COMANDO",
        "Membrana e switches oferecem respostas diferentes.",
        "Teclados mecânicos usam interruptores individuais. Força, curso, retorno tátil e som variam entre mecanismos."
      ],
      [
        "Layout",
        "TECLAS NO LUGAR CERTO",
        "Idioma e distribuição precisam atender ao seu uso.",
        "O padrão ABNT2 inclui teclas usadas no português brasileiro. Confira também a configuração de idioma no sistema."
      ],
      [
        "Formato",
        "ESPAÇO NA MESA",
        "Há modelos completos, compactos e sem bloco numérico.",
        "Escolha conforme a necessidade de atalhos, números e espaço para o mouse. Formatos compactos podem usar camadas de funções."
      ],
      [
        "Conexão",
        "PRONTO PARA DIGITAR",
        "Cabo, receptor sem fio ou Bluetooth.",
        "Verifique portas disponíveis e compatibilidade. Em modelos sem fio, considere autonomia e método de carregamento."
      ]
    ],
    "image": "/images/keyboard.webp",
    "alt": "Teclado em destaque, com seus componentes visíveis",
    "group": "peripheral"
  },
  {
    "kind": "mouse",
    "id": "mouse",
    "name": "Mouse",
    "mark": "MOVE",
    "title": "Precisão em movimento.",
    "subtitle": "Controle em cada clique.",
    "description": "O mouse transforma movimentos da mão em deslocamentos do cursor e ações na tela.",
    "notes": [
      [
        "Sensor",
        "LEITURA DO MOVIMENTO",
        "Detecta o deslocamento sobre a superfície.",
        "A precisão depende do sensor e da superfície. Um mousepad adequado ajuda a manter a leitura consistente."
      ],
      [
        "Sensibilidade",
        "DISTÂNCIA DO CURSOR",
        "DPI ajusta a relação entre mão e ponteiro.",
        "Um valor maior move o cursor mais longe com o mesmo movimento. Ajuste conforme resolução, espaço e preferência."
      ],
      [
        "Formato e peso",
        "CONFORTO NA MÃO",
        "A ergonomia muda conforme a pegada.",
        "Considere tamanho da mão, uso com a direita ou esquerda e tempo de trabalho. O formato deve permitir uma pegada confortável."
      ],
      [
        "Botões e conexão",
        "COMANDOS AO ALCANCE",
        "Atalhos e modos de conexão ampliam o controle.",
        "Botões extras podem receber funções por software. Compare cabo, receptor sem fio e Bluetooth conforme a aplicação."
      ]
    ],
    "image": "/images/mouse.webp",
    "alt": "Mouse em destaque, com seus componentes visíveis",
    "group": "peripheral"
  },
  {
    "kind": "headset",
    "id": "audio",
    "name": "Áudio e headset",
    "mark": "AUDIO",
    "title": "Ouça os detalhes.",
    "subtitle": "Faça sua voz chegar.",
    "description": "Fones, caixas de som e microfones cuidam da saída e da entrada de áudio do computador.",
    "notes": [
      [
        "Drivers de áudio",
        "SOM PARA OUVIR",
        "Convertem sinais elétricos em vibração sonora.",
        "Os transdutores dos fones e caixas produzem o som. Construção, ajuste e vedação influenciam o resultado mais que um número isolado."
      ],
      [
        "Microfone",
        "VOZ PARA COMPARTILHAR",
        "Transforma a sua voz em um sinal de áudio.",
        "Posição e ambiente influenciam a clareza. Ajuste o ganho e mantenha o microfone perto da boca, sem encostar."
      ],
      [
        "Conectores",
        "ENTRADA E SAÍDA",
        "P2, USB e conexões sem fio têm requisitos próprios.",
        "Conectores separados de fone e microfone podem exigir adaptador. Em USB, a conversão de áudio normalmente fica no próprio dispositivo."
      ],
      [
        "Conforto e volume",
        "USO PROLONGADO",
        "Ajuste o encaixe e mantenha volume confortável.",
        "Almofadas, peso e pressão fazem diferença ao longo do dia. Faça pausas e evite aumentar o volume para encobrir ambientes muito ruidosos."
      ]
    ],
    "image": "/images/headset.webp",
    "alt": "Áudio e headset em destaque, com seus componentes visíveis",
    "group": "peripheral"
  }
];

