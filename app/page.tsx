'use client';
import { ArrowDown, ArrowUpRight, Cpu, Layers3, Plus, Minus } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { extraParts, type HardwarePart } from './hardware';
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
const parts: HardwarePart[] = [
  { kind:'processor',id:'processador',name:'Processador',mark:'CPU',title:'Pequeno no tamanho.',subtitle:'Gigante nas ideias.',description:'Por trás de cada comando, existe um processador. Descubra o que faz o cérebro do seu computador.',notes:cpu,image:'/images/processor.png',alt:'Processador AMD Ryzen com superfície metálica e circuito verde',group:'internal' },
  { kind:'motherboard',id:'placa-mae',name:'Placa-mãe',mark:'MB',title:'Toda peça importa.',subtitle:'Aqui, elas se conectam.',description:'A base que conecta os componentes e permite que o seu computador trabalhe em conjunto.',notes:board,image:'/images/motherboard.png',alt:'Placa-mãe MSI com soquete, slots de memória, PCIe e dissipadores',group:'internal' },
  ...extraParts,
];
function Stage({part, inView}: {part: HardwarePart; inView: boolean}) {
  const [active,setActive]=useState<number|null>(null);
  const stageRef=useRef<HTMLDivElement>(null);
  const productRef=useRef<HTMLDivElement>(null);
  const cards=useRef<(HTMLDivElement|null)[]>([]);
  const [lines,setLines]=useState<{points:string;x:number;y:number}[]>([]);
  useEffect(()=>{
    const stage=stageRef.current;
    const product=productRef.current;
    if(!stage||!product) return;
    function measure(){
      if(!stage||!product)return;
      const box=stage.getBoundingClientRect();
      const p=product.getBoundingClientRect();
      const mobile=window.matchMedia('(max-width: 900px)').matches;
      setLines(cards.current.map((card,i)=>{
        if(!card)return {points:'',x:0,y:0};
        const c=card.getBoundingClientRect();
        const left=i%2===0;
        const x=p.left-box.left+p.width*(left?.3:.7);
        const y=p.top-box.top+p.height*(i<2?.35:.65);
        const endX=mobile?c.left-box.left+c.width/2:(left?c.right-box.left:c.left-box.left);
        const endY=mobile?c.top-box.top:c.top-box.top+58;
        const elbow=mobile?(left?8:box.width-8):(x+endX)/2;
        const points=mobile?`${x},${y} ${elbow},${y} ${elbow},${endY-12} ${endX},${endY-12} ${endX},${endY}`:`${x},${y} ${elbow},${endY} ${endX},${endY}`;
        return {points,x,y};
      }));
    }
    const resize=new ResizeObserver(measure);
    resize.observe(stage);resize.observe(product);
    cards.current.forEach(card=>{if(card)resize.observe(card);});
    measure();
    return()=>resize.disconnect();
  },[]);
  return <div ref={stageRef} className={`stage ${part.kind} ${inView?'in-view':''}`}>
    <div className="orbit orbit-one" aria-hidden="true"/><div className="orbit orbit-two" aria-hidden="true"/>
    <span className="watermark" aria-hidden="true">{part.mark}</span>
    <svg className="connections" aria-hidden="true">{lines.map((line,i)=><g key={i} className={active===i?'selected-line':''}><polyline points={line.points}/><circle cx={line.x} cy={line.y} r="5"/></g>)}</svg>
    <div ref={productRef} className="product"><img src={part.image} alt={part.alt} width={600} height={600} fetchPriority={part.kind==='processor'?'high':'auto'} loading={part.kind==='processor'?'eager':'lazy'}/></div>
    {part.notes.map(([title,label,text,detail],i)=><div ref={node=>{cards.current[i]=node;}} key={title} className={`callout callout-${i} ${active===i?'active':''}`} style={{'--delay':`${200+i*100}ms`} as CSSProperties}>
      <button type="button" className="callout-toggle" onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i} aria-controls={`${part.kind}-${i}`}><span className="callout-label">{label}</span><span className="callout-heading">{title}<span className="expand-icon">{active===i?<Minus size={14}/>:<Plus size={14}/>}</span></span><span className="callout-summary">{text}</span></button>
      <div className="callout-detail" id={`${part.kind}-${i}`} hidden={active!==i}>{detail}</div>
    </div>)}
    <span className="visual-caption">{part.name.toUpperCase()} · {part.group==='internal'?'COMPONENTE INTERNO':'PERIFÉRICO'}</span>
  </div>;
}
function PartSection({part,index,onEnter}:{part:HardwarePart;index:number;onEnter:(id:string)=>void}){
  const ref=useRef<HTMLElement>(null);
  const [visible,setVisible]=useState(index===0);
  const [inView,setInView]=useState(index===0);
  useEffect(()=>{
    const section=ref.current;if(!section)return;
    const observer=new IntersectionObserver(([entry])=>{
      setInView(entry.isIntersecting);
      if(entry.isIntersecting)setVisible(true);
    },{threshold:0});
    const tracker=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)onEnter(part.id);},{rootMargin:'-15% 0px -65% 0px',threshold:0});
    observer.observe(section);tracker.observe(section);
    return()=>{observer.disconnect();tracker.disconnect();};
  },[part.id,onEnter]);
  const Heading=index===0?'h1':'h2';
  const next=parts[index+1];
  return <section ref={ref} className={`hardware-section ${index%2?'tinted-section':''} ${visible?'visible':''}`} id={part.id} aria-labelledby={`${part.id}-title`}>
    <div className="intro"><div className="eyebrow"><span className="section-index">{String(index+1).padStart(2,'0')} / {parts.length}</span><span className="eyebrow-line"/>{part.group==='internal'?'POR DENTRO DO COMPUTADOR':'NA SUA MESA'} · {part.name.toUpperCase()}</div><div className="intro-row"><Heading id={`${part.id}-title`}>{part.title}<br/><span>{part.subtitle}</span></Heading><p>{part.description}</p></div></div>
    <Stage part={part} inView={inView}/>
    <div className="section-bottom"><span><Plus size={14}/> Clique nos balões para conhecer cada detalhe</span>{next?<a href={`#${next.id}`}>A seguir: {next.name} <ArrowDown size={16}/></a>:<a href="#processador">Voltar ao processador <ArrowUpRight size={16}/></a>}</div>
  </section>;
}
export default function Home(){
  const [current,setCurrent]=useState('processador');
  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header"><a className="brand" href="#processador" aria-label="Núcleo, início"><span className="brand-symbol"><Cpu size={22} strokeWidth={1.7}/></span>núcleo<span className="brand-dot">.</span></a><nav aria-label="Grupos de componentes"><a href="#processador">Componentes</a><a href="#monitor">Periféricos</a></nav><span className="header-note">15 peças, um computador</span></header>
    <nav className="parts-nav" aria-label="Todas as peças"><div className="parts-nav-inner">{parts.map((part,i)=><a key={part.id} href={`#${part.id}`} aria-current={current===part.id?'location':undefined}><span>{String(i+1).padStart(2,'0')}</span>{part.name}</a>)}</div></nav>
    <main id="conteudo">{parts.map((part,index)=><PartSection key={part.id} part={part} index={index} onEnter={setCurrent}/>)}<div className="closing-note"><div className="compatibility"><span className="note-icon"><Layers3 size={22}/></span><div><h3>Uma boa montagem começa pela compatibilidade.</h3><p>Confira encaixes, dimensões, potência e conexões. Nem toda peça é obrigatória: vídeo, rede e áudio podem estar integrados à sua plataforma.</p></div></div></div></main>
    <footer><a className="brand footer-brand" href="#processador">núcleo<span className="brand-dot">.</span></a><span>Entenda cada peça. Escolha com confiança.</span><a className="back-top" href="#processador">Voltar ao início <ArrowUpRight size={16}/></a></footer>
  </>;
}
