<script setup lang="ts">
import SecaoGuia from '../components/SecaoGuia.vue'
import CodeBlock from '../components/CodeBlock.vue'
import LabLargura from '../components/LabLargura.vue'
import LabFlex from '../components/LabFlex.vue'
import type { Fonte } from '../types'

const fontes: Fonte[] = [
  { nome: 'MDN: Basic concepts of flexbox', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox' },
  { nome: 'MDN: repeat() (auto-fit e auto-fill)', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/repeat' },
  { nome: 'MDN: Grid layout basic concepts', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout' },
]
const codigoFlex = `.barra {
  display: flex;               /* itens ficam em UMA linha (uma dimensão) */
  justify-content: space-between; /* distribui no eixo principal (horizontal) */
  align-items: center;         /* alinha no eixo cruzado (vertical) */
  flex-wrap: wrap;             /* se faltar espaço, quebra para a linha de baixo */
  gap: 0.5rem;                 /* espaço entre os itens, sem margens manuais */
}`
const codigoGrid = `.cards {
  display: grid;               /* linhas E colunas (duas dimensões) */
  /* auto-fit: cria quantas colunas de no mínimo 14rem couberem e
     esticam (1fr) para ocupar o espaço que sobrar */
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}
/* Sem nenhuma media query, o layout já é responsivo! */`
</script>

<template>
  <SecaoGuia titulo="Flexbox e Grid" pergunta="Um contêiner usa grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)) e gap: 1rem. A partir de qual largura do contêiner, em px, os cards deixam de ficar em 1 coluna e passam para 2? Considerem 1rem = 16px e mostrem a conta." :fontes="fontes">
    <p><strong>Flexbox</strong> organiza em <em>uma dimensão</em>: uma linha ou uma coluna. É ótimo para barras de menu, botões lado a lado e centralizar coisas. <strong>Grid</strong> organiza em <em>duas dimensões</em>: linhas e colunas ao mesmo tempo. É ótimo para a estrutura da página e galerias de cards.</p>
    <p>Regra prática: o conteúdo manda no layout? Use Flexbox. O layout manda no conteúdo? Use Grid. Os dois combinam, e um Grid de cards pode ter Flexbox dentro de cada card.</p>
    <template #codigo>
      <CodeBlock :codigo="codigoFlex" legenda="Flexbox (uma dimensão)" />
      <CodeBlock :codigo="codigoGrid" legenda="Grid responsivo sem media query" />
    </template>
    <template #labs>
      <section class="caixa caixa--lab" aria-labelledby="lab-grid">
        <h2 id="lab-grid">Laboratório: largura do contêiner (Grid)</h2>
        <p>Arraste o controle e veja quando as colunas mudam.</p>
        <div class="miolo"><LabLargura /></div>
      </section>
      <section class="caixa caixa--lab" aria-labelledby="lab-flex">
        <h2 id="lab-flex">Laboratório: Flexbox</h2>
        <div class="miolo"><LabFlex /></div>
      </section>
    </template>
    <template #resposta>
      <p>Com <code>auto-fit</code> e <code>minmax(14rem, 1fr)</code>, cada coluna precisa de no mínimo 14rem = 14 × 16 = <strong>224px</strong>. O navegador cria uma nova coluna só quando todas cabem com esse mínimo e com os espaços (gap) entre elas.</p>
      <p>Para 2 colunas: 2 × 224 + 1 gap = 448 + 16 = <strong>464px</strong>.</p>
      <p>Resposta: a partir de <strong>464px</strong> de largura do contêiner os cards passam para 2 colunas. Abaixo disso, 1 coluna. Confira no laboratório: em 463px há 1 coluna e em 464px há 2.</p>
      <p>Para 3 colunas, a mesma conta: 3 × 224 + 2 × 16 = 672 + 32 = <strong>704px</strong>.</p>
    </template>
  </SecaoGuia>
</template>
