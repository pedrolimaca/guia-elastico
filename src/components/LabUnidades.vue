<script setup lang="ts">
import { ref, computed } from 'vue'
import { useViewportStore } from '../stores/viewport'

// LABORATÓRIO 2: conversor de unidades para px.
type Unidade = 'rem' | 'em' | '%' | 'vw' | 'vh'
const valor = ref<number>(1.5)
const unidade = ref<Unidade>('rem')
const fonteRaiz = ref<number>(16)     // tamanho da fonte do <html> (config. do navegador)
const fontePai = ref<number>(20)      // tamanho da fonte do elemento pai (usado pelo em)
const larguraPai = ref<number>(400)   // largura do pai (usada pelo %)
const viewport = useViewportStore()
const alturaJanela = ref<number>(window.innerHeight)

// Cada unidade "olha" para uma referência diferente. Essa é a ideia central da seção 2.
const resultado = computed<{ px: number; conta: string }>(() => {
  const v = valor.value
  switch (unidade.value) {
    case 'rem': return { px: v * fonteRaiz.value, conta: `${v} × ${fonteRaiz.value}px (fonte do html)` }
    case 'em': return { px: v * fontePai.value, conta: `${v} × ${fontePai.value}px (fonte do pai)` }
    case '%': return { px: (v / 100) * larguraPai.value, conta: `${v}% × ${larguraPai.value}px (largura do pai)` }
    case 'vw': return { px: (v / 100) * viewport.largura, conta: `${v}% × ${viewport.largura}px (largura da janela)` }
    default: return { px: (v / 100) * alturaJanela.value, conta: `${v}% × ${alturaJanela.value}px (altura da janela)` }
  }
})
</script>

<template>
  <div class="grade-campos">
    <label>Valor<br /><input v-model.number="valor" type="number" step="0.1" class="campo" /></label>
    <label>Unidade<br />
      <select v-model="unidade" class="campo">
        <option>rem</option><option>em</option><option>%</option><option>vw</option><option>vh</option>
      </select>
    </label>
    <label>Fonte do html (px)<br /><input v-model.number="fonteRaiz" type="number" class="campo" /></label>
    <label>Fonte do pai (px)<br /><input v-model.number="fontePai" type="number" class="campo" /></label>
    <label>Largura do pai (px)<br /><input v-model.number="larguraPai" type="number" class="campo" /></label>
  </div>
  <p class="saida"><strong>{{ valor }}{{ unidade }}</strong> = <strong>{{ +resultado.px.toFixed(2) }}px</strong></p>
  <p>Conta: {{ resultado.conta }}</p>
  <p class="dica">Dica: troque a fonte do html para 24 e veja o rem crescer, enquanto 24px continuaria 24px.</p>
</template>

<style scoped>
.grade-campos { display: grid; grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); gap: var(--esp-3); }
.grade-campos .campo { width: 100%; }
.saida { font: 800 1.5rem var(--fonte-titulo); margin: var(--esp-3) 0 var(--esp-2); }
.dica { font-size: 0.875rem; color: var(--cor-tinta-suave); }
</style>
