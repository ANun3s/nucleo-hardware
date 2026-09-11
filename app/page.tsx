'use client';
import { ArrowDown, ArrowUpRight, Cpu, Layers3, Plus, Minus } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
const cpu = [
  ['Núcleos e threads','TRABALHO EM PARALELO','Mais caminhos para executar suas tarefas.','Os núcleos processam instruções. As threads organizam tarefas simultâneas, ajudando em edição, renderização e multitarefa.'],
  ['Frequência','RITMO DE PROCESSAMENTO','Velocidade para responder a cada comando.','Medida em GHz, indica ciclos por segundo. O desempenho também depende da arquitetura, do programa e da temperatura.'],
  ['Memória cache','DADOS SEMPRE POR PERTO','Acesso rápido ao que o processador mais usa.','Uma memória interna que guarda dados e instruções frequentes, reduzindo a espera por informações da memória RAM.'],
  ['Soquete','O ENCAIXE CERTO','A conexão entre processador e placa-mãe.','O processador precisa de uma placa com soquete compatível. Confira também o chipset e a versão da BIOS antes de escolher as peças.'],
];
const board = [
  ['Soquete da CPU','ONDE TUDO COMEÇA','Recebe e conecta o processador ao sistema.','O mecanismo de retenção mantém a CPU no lugar. Cada plataforma exige um soquete específico e suporte da BIOS.'],
  ['Slots de memória','ESPAÇO PARA TRABALHAR','Aqui ficam os módulos de memória RAM.','A RAM guarda temporariamente os dados dos programas em uso. A geração e a capacidade suportadas dependem da placa e do processador.'],
  ['Slots PCIe','MAIS POSSIBILIDADES','Conecte a placa de vídeo e outras expansões.','Esses slots conectam dispositivos de alta velocidade. Formato, geração e quantidade de pistas determinam as possibilidades de expansão.'],
  ['Conexões M.2','ARMAZENAMENTO COMPACTO','Espaço para SSDs diretamente na placa.','SSDs compatíveis com M.2 ocupam pouco espaço e dispensam cabos de dados. Confira o protocolo e os tamanhos aceitos em cada conexão.'],
];
function Stage({kind, notes}: {kind: 'processor' | 'motherboard'; notes: string[][]}) {
  const [active,setActive] = useState<number|null>(null);
  const processor = kind === 'processor';
  const paths = processor ? ['280,109 356,109 455,210','840,109 764,109 664,210','280,382 356,382 455,345','840,382 764,382 664,345'] : ['280,109 368,109 548,200','840,109 756,109 641,164','280,382 373,382 495,336','840,382 746,382 585,400'];
  return <div className={`stage ${kind}`}>
    <div className="orbit orbit-one" aria-hidden="true"/><div className="orbit orbit-two" aria-hidden="true"/>
    <span className="watermark" aria-hidden="true">{processor?'CPU':'MB'}</span>
    <svg className="connections" viewBox="0 0 1120 560" preserveAspectRatio="none" aria-hidden="true">{paths.map((points,i)=>{const last=points.split(' ').at(-1)!.split(',');return <g key={points} className={active===i?'selected-line':''}><polyline points={points}/><circle cx={last[0]} cy={last[1]} r="5"/></g>;})}</svg>
    <div className="product"><img src={`/images/${kind}.png`} alt={processor?'Processador AMD Ryzen visto de cima, com superfície metálica e circuito verde':'Placa-mãe MSI com soquete, slots de memória, PCIe e dissipadores visíveis'} width={processor?2000:658} height={processor?2000:810} fetchPriority={processor?'high':'auto'} loading={processor?'eager':'lazy'}/></div>
    {notes.map(([title,label,text,detail],i)=><div key={title} className={`callout callout-${i} ${active===i?'active':''}`} style={{'--delay':`${450+i*130}ms`} as CSSProperties}>
      <button className="callout-toggle" onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i} aria-controls={`${kind}-${i}`}><span className="callout-label">{label}</span><span className="callout-heading">{title}<span className="expand-icon">{active===i?<Minus size={14}/>:<Plus size={14}/>}</span></span><span className="callout-summary">{text}</span></button>
      <div className="callout-detail" id={`${kind}-${i}`} hidden={active!==i}>{detail}</div>
    </div>)}
    <span className="visual-caption">{processor?'AMD RYZEN · PROCESSADOR DESKTOP':'MSI MAG · PLACA-MÃE ATX'}</span>
  </div>;
}
export default function Home() {
  const boardRef=useRef<HTMLElement>(null);
  const [visible,setVisible]=useState(false);
  useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.08});if(boardRef.current)observer.observe(boardRef.current);return()=>observer.disconnect();},[]);
  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header"><a className="brand" href="#" aria-label="Núcleo, início"><span className="brand-symbol"><Cpu size={22} strokeWidth={1.7}/></span>núcleo<span className="brand-dot">.</span></a><nav aria-label="Navegação principal"><a href="#processador">Processador</a><a href="#placa-mae">Placa-mãe</a></nav><span className="header-note"><span/>Hardware por dentro</span></header>
    <main id="conteudo">
      <section className="hardware-section cpu-section visible" id="processador" aria-labelledby="cpu-title"><div className="intro"><div className="eyebrow"><span className="section-index">01 / 02</span><span className="eyebrow-line"/>CONHEÇA O PROCESSADOR</div><div className="intro-row"><h1 id="cpu-title">Pequeno no tamanho.<br/><span>Gigante nas ideias.</span></h1><p>Por trás de cada comando, existe um processador. Descubra o que faz o cérebro do seu computador.</p></div></div><Stage kind="processor" notes={cpu}/><div className="section-bottom"><span><Plus size={14}/> Clique nos balões para conhecer cada detalhe</span><a href="#placa-mae">Explore a próxima peça <ArrowDown size={16}/></a></div></section>
      <section ref={boardRef} className={`hardware-section board-section ${visible?'visible':''}`} id="placa-mae" aria-labelledby="board-title"><div className="intro"><div className="eyebrow"><span className="section-index">02 / 02</span><span className="eyebrow-line"/>CONHEÇA A PLACA-MÃE</div><div className="intro-row"><h2 id="board-title">Toda peça importa.<br/><span>Aqui, elas se conectam.</span></h2><p>A base que conecta os componentes e permite que o seu computador trabalhe em conjunto.</p></div></div><Stage kind="motherboard" notes={board}/><div className="compatibility"><span className="note-icon"><Layers3 size={22}/></span><div><h3>Uma boa montagem começa pela compatibilidade.</h3><p>Confira o soquete, a memória suportada e o formato da placa antes de escolher seus componentes.</p></div></div></section>
    </main>
    <footer><a className="brand footer-brand" href="#">núcleo<span className="brand-dot">.</span></a><span>Entenda cada peça. Escolha com confiança.</span><a className="back-top" href="#processador">Voltar ao início <ArrowUpRight size={16}/></a></footer>
  </>;
}
