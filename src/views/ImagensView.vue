<script setup lang="ts">
import SecaoGuia from '../components/SecaoGuia.vue'
import CodeBlock from '../components/CodeBlock.vue'
import LabImagem from '../components/LabImagem.vue'
import type { Fonte } from '../types'

const fontes: Fonte[] = [
  { nome: 'MDN: Responsive images', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images' },
  { nome: 'web.dev: Cumulative Layout Shift (CLS)', url: 'https://web.dev/articles/cls' },
  { nome: 'web.dev: Optimize CLS', url: 'https://web.dev/articles/optimize-cls' },
  { nome: 'MDN: object-fit', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit' },
]
const codigo = `<!-- width e height no HTML: o navegador calcula a proporção e reserva o espaço antes de baixar -->
<img
  src="foto-800.jpg"
  srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1600.jpg 1600w"  <!-- versões da imagem -->
  sizes="(min-width: 64rem) 50vw, 100vw"   <!-- quanto espaço ela ocupa na tela -->
  width="800" height="450"
  loading="lazy"                           <!-- só baixa quando chegar perto da tela -->
  alt="Descrição da foto">

/* CSS */
img { max-width: 100%; height: auto; }    /* nunca passa do contêiner e mantém a proporção */
.capa { aspect-ratio: 16 / 9; width: 100%; object-fit: cover; } /* corta sem deformar */

/* Não use loading="lazy" na imagem principal do topo (LCP): ela deve carregar logo. */`
</script>

<template>
  <SecaoGuia titulo="Imagens responsivas" pergunta="Ao abrir uma página, o texto aparece primeiro. Quando a imagem termina de carregar, ela empurra o texto para baixo. Por que isso acontece quando a imagem não tem width e height no HTML? Qual métrica do Google mede esse problema?" :fontes="fontes">
    <p>Imagens são o conteúdo mais pesado e o que mais quebra layouts. Os cuidados básicos:</p>
    <ul>
      <li><code>max-width: 100%</code> e <code>height: auto</code>: a imagem encolhe com o contêiner sem deformar.</li>
      <li><code>width</code> e <code>height</code> no HTML: reservam o espaço antes do carregamento.</li>
      <li><code>loading="lazy"</code>: adia imagens fora da tela. Não use na imagem principal do topo.</li>
      <li><code>aspect-ratio</code> e <code>object-fit</code>: padronizam a proporção e cortam sem esticar.</li>
      <li><code>srcset</code> e <code>sizes</code>: o navegador escolhe a versão mais adequada ao aparelho.</li>
    </ul>
    <template #codigo><CodeBlock :codigo="codigo" legenda="Imagem responsiva completa" /></template>
    <template #labs>
      <section class="caixa caixa--lab" aria-labelledby="lab-img">
        <h2 id="lab-img">Laboratório: o texto que pula</h2>
        <p>Carregue as duas imagens e compare o texto embaixo de cada uma.</p>
        <div class="miolo"><LabImagem /></div>
      </section>
    </template>
    <template #resposta>
      <p>O navegador monta a página antes de baixar as imagens. Sem <code>width</code> e <code>height</code>, ele não sabe o tamanho da imagem, então reserva altura <strong>zero</strong>, e o texto sobe para ocupar aquele lugar.</p>
      <p>Quando a imagem termina de baixar, o navegador descobre o tamanho real e precisa recalcular o layout. A imagem ganha altura e empurra tudo o que estava embaixo. Com os atributos, o navegador calcula a proporção (ex.: 2:1) e reserva o espaço desde o início, então nada se mexe.</p>
      <p>A métrica do Google é o <strong>CLS (Cumulative Layout Shift)</strong>, o deslocamento cumulativo de layout. Um bom valor é até 0,1.</p>
    </template>
  </SecaoGuia>
</template>
