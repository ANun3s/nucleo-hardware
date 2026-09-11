# Núcleo: projeto para VS Code

Site com 15 peças e periféricos, 60 balões explicativos, animações e layout responsivo.

## Abrir e executar

1. Extraia todo o ZIP.
2. Abra nucleo-hardware.code-workspace no VS Code, ou use Arquivo > Abrir Pasta.
3. Você precisa do Node.js 22.13 ou superior instalado.
4. Abra Terminal > Novo Terminal e execute um comando de cada vez:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra o endereço Local exibido no terminal, normalmente http://localhost:3000.
Salve os arquivos para atualizar a prévia. Use Ctrl+C para encerrar o servidor.
No macOS ou Linux, use npm no lugar de npm.cmd.

## Arquivos para editar

- app/page.tsx: estrutura, navegação, balões, animações e dados das duas primeiras peças.
- app/hardware.ts: conteúdo das outras 13 peças.
- app/globals.css: cores, tamanhos, espaçamento e layout para celular.
- app/layout.tsx: título, descrição, idioma e fontes.
- public/images/: todas as imagens do site.

## Gerar a versão final

```powershell
npm.cmd run build
```

Os arquivos estáticos ficam em dist/client.
O projeto usa React, TypeScript, Vinext e Vite. Para visualizar, execute o servidor; os arquivos TSX não abrem diretamente no navegador.

## Conteúdo do pacote

Código-fonte, componentes, imagens, configurações e package-lock.json.
As dependências são instaladas com npm ci. O ZIP não inclui node_modules, caches, histórico Git ou arquivos temporários.
A configuração .openai/hosting.json mantém as opções locais, sem vínculo com a publicação original.

## Imagens

As imagens pertencem aos respectivos titulares. Os textos explicam conceitos gerais, não as especificações exatas dos modelos ilustrados.
Processador: https://tkcomputerkh.com/brand/amd/ryzen-9-7950x
Placa-mãe: https://www.msi.com/Motherboard/MAG-B650-TOMAHAWK-WIFI
Fontes das demais imagens: public/images/sources.json.