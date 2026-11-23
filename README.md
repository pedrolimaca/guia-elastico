# Elástico — guia interativo de responsividade

Guia feito em Vue 3 que ensina a criar páginas que funcionam em qualquer tela.
Projeto da disciplina, feito em dupla.

**Site publicado:** (cole aqui o link da Vercel/Netlify)
**Integrantes:** (nomes da dupla)

## O que tem
- 6 seções (viewport, unidades, flex/grid, imagens, boas práticas em Vue, desafio), cada uma com explicação, código comentado, pergunta-guia respondida e fontes
- 5 laboratórios: slider de largura do Grid, conversor de unidades, indicador fixo de largura/breakpoint, imagem com atraso (CLS) e playground de Flexbox (mais a lista com `:key`)

## Tecnologias
Vue 3 + TypeScript, Vite (`npm create vue@latest`), Vue Router (rotas sob demanda), Pinia (largura da janela).

## Rodar
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist
```

## Publicar (Vercel)
Importe o repositório em vercel.com. O `vercel.json` já faz as rotas funcionarem ao recarregar a página.

## Regras de responsividade seguidas
CSS mobile-first com `min-width`, fontes e espaços em rem, tokens em `:root` (`src/assets/main.css`), sem rolagem horizontal, menu vira botão no celular.
