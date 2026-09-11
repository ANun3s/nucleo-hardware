import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const sans = Geist({variable:'--font-geist-sans',subsets:['latin']});
const mono = Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata: Metadata = {title:'Núcleo | Hardware por dentro',description:'Explore 15 peças do computador com imagens, animações e balões interativos. Conheça componentes internos, armazenamento, refrigeração e periféricos.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;}

