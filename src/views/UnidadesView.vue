<script setup lang="ts">
import SecaoGuia from '../components/SecaoGuia.vue'
import CodeBlock from '../components/CodeBlock.vue'
import LabUnidades from '../components/LabUnidades.vue'
import type { Fonte } from '../types'

const fontes: Fonte[] = [
  { nome: 'MDN: Values and units', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units' },
  { nome: 'MDN: CSS length', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
  { nome: 'web.dev: Viewport units (dvh)', url: 'https://web.dev/blog/viewport-units' },
]
const codigo = `html { font-size: 100%; }          /* 100% = respeita a fonte escolhida pela pessoa (padrão 16px) */

h1   { font-size: 2rem; }           /* rem: relativo ao <html> → 2 × 16 = 32px */
.btn { padding: 0.5em 1em; }        /* em: relativo à fonte do PRÓPRIO elemento: o botão cresce com o texto */
.col { width: 50%; }                /* %: relativo ao tamanho do PAI */
.hero { min-height: 100dvh; }       /* dvh: altura visível real no celular (a barra do navegador encolhe/some) */
.texto { max-width: 65ch; }         /* ch: largura do caractere "0"; ótimo para linhas legíveis */
.grade { grid-template-columns: 1fr 2fr; } /* fr: fração do espaço livre do Grid */
.faixa { width: 100vw; }            /* vw: 1% da largura da janela (cuidado: inclui a barra de rolagem) */
.borda { border: 1px solid; }       /* px: absoluto; bom para bordas finas e sombras */`
</script>

<template>
  <SecaoGuia titulo="Unidades CSS" pergunta="Uma pessoa com baixa visão aumenta o tamanho da fonte nas configurações do navegador. O texto definido em px continua do mesmo tamanho, e o definido em rem aumenta. Por que essa diferença acontece?" :fontes="fontes">
    <p><strong>Absolutas</strong> (px) valem sempre o mesmo. <strong>Relativas</strong> dependem de uma referência, e saber qual é a referência é tudo.</p>
    <div class="caixa tabela-rolavel">
      <table>
        <thead><tr><th>Unidade</th><th>Relativa a…</th><th>Use para</th></tr></thead>
        <tbody>
          <tr><td><code>px</code></td><td>nada (absoluta)</td><td>bordas finas, sombras</td></tr>
          <tr><td><code>rem</code></td><td>fonte do html</td><td>fontes e espaçamentos em geral</td></tr>
          <tr><td><code>em</code></td><td>fonte do próprio elemento</td><td>botões e ícones que crescem com o texto</td></tr>
          <tr><td><code>%</code></td><td>tamanho do pai</td><td>larguras fluidas</td></tr>
          <tr><td><code>fr</code></td><td>espaço livre no Grid</td><td>repartir colunas</td></tr>
          <tr><td><code>vw / vh</code></td><td>largura / altura da janela</td><td>seções de tela cheia, títulos fluidos</td></tr>
          <tr><td><code>dvh</code></td><td>altura visível dinâmica</td><td>tela cheia no celular (melhor que vh)</td></tr>
          <tr><td><code>ch</code></td><td>largura do caractere "0"</td><td>limitar a largura de textos</td></tr>
        </tbody>
      </table>
    </div>
    <template #codigo><CodeBlock :codigo="codigo" legenda="Cada unidade em seu uso típico" /></template>
    <template #labs>
      <section class="caixa caixa--lab" aria-labelledby="lab-un">
        <h2 id="lab-un">Laboratório: conversor de unidades</h2>
        <p>Digite um valor, escolha a unidade e veja quantos pixels dá.</p>
        <div class="miolo"><LabUnidades /></div>
      </section>
    </template>
    <template #resposta>
      <p>O navegador tem um tamanho de fonte padrão, de 16px, que a pessoa pode mudar nas configurações. Esse valor vira o tamanho da fonte do elemento <code>html</code>.</p>
      <p>O <code>rem</code> significa "root em": é um múltiplo desse tamanho. <code>1.5rem</code> = 1,5 × fonte do html. Se a pessoa muda para 24px, tudo em rem é recalculado e cresce junto.</p>
      <p>O <code>px</code> é fixo: 16px são 16px, não importa a configuração. Por isso texto em px ignora a preferência de quem precisa de letras maiores, o que é um problema de acessibilidade.</p>
    </template>
  </SecaoGuia>
</template>
