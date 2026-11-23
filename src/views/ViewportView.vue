<script setup lang="ts">
import SecaoGuia from '../components/SecaoGuia.vue'
import CodeBlock from '../components/CodeBlock.vue'
import type { Fonte } from '../types'

const fontes: Fonte[] = [
  { nome: 'MDN: Viewport meta tag', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag' },
  { nome: 'MDN: Using media queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries' },
  { nome: 'web.dev: Responsive web design basics', url: 'https://web.dev/articles/responsive-web-design-basics' },
]
const codigo = `<!-- index.html, dentro do <head> -->
<!-- width=device-width: a largura do layout = largura real da tela do aparelho -->
<!-- initial-scale=1: sem zoom inicial -->
<meta name="viewport" content="width=device-width, initial-scale=1">

/* style.css — mobile-first */
.cards { display: grid; gap: 1rem; }      /* celular: 1 coluna (fora de media query) */

@media (min-width: 40rem) {                /* a partir de 640px, melhora o layout */
  .cards { grid-template-columns: 1fr 1fr; }
}`
</script>

<template>
  <SecaoGuia titulo="Por que responsividade importa" pergunta="Um site tem media queries bem escritas, mas não tem a meta tag viewport. No celular, ele aparece como a versão de computador, só que minúscula. Por que isso acontece, e o que a meta viewport muda?" :fontes="fontes">
    <p>Mais da metade do acesso à web vem de celulares, e cada pessoa usa uma tela diferente. Responsividade é fazer a mesma página se adaptar ao espaço disponível, em vez de criar um site para cada aparelho.</p>
    <p>Existem três ingredientes: a <code>meta viewport</code> no HTML, layouts flexíveis (porcentagens, Flexbox, Grid) e <code>media queries</code> para ajustar o que for preciso. No CSS, começamos pelo celular (mobile-first) e usamos <code>min-width</code> para ampliar o layout.</p>
    <template #codigo><CodeBlock :codigo="codigo" legenda="Meta viewport + media query mobile-first" /></template>
    <template #resposta>
      <p>Quando não há meta viewport, os navegadores de celular assumem uma tela virtual larga, tipicamente cerca de <strong>980px</strong>, para que sites antigos (feitos só para computador) caibam. Eles desenham a página nessa largura e depois a reduzem para encaixar na tela física. Por isso aparece a versão de computador, minúscula.</p>
      <p>As media queries funcionam, mas leem a largura <em>virtual</em> (980px), então nunca disparam a regra do celular. Com <code>width=device-width</code>, a largura do viewport passa a ser a largura real do aparelho (ex.: 390px) e <code>initial-scale=1</code> evita o zoom inicial. Agora as media queries enxergam o tamanho certo.</p>
      <p>Teste: o indicador amarelo no canto mostra a largura que o navegador usa. Neste site ele marca a largura real do seu celular porque a meta viewport está no <code>index.html</code>.</p>
    </template>
  </SecaoGuia>
</template>
