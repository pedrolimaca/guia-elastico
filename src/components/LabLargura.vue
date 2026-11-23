<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// LABORATÓRIO 1: controle deslizante que muda a largura do contêiner do Grid.
const largura = ref<number>(480)          // valor do slider, em px
const colunas = ref<number>(1)            // quantas colunas o navegador realmente criou
const larguraReal = ref<number>(0)        // largura medida (pode ser menor que o slider no celular)
const grade = ref<HTMLElement | null>(null)
let observador: ResizeObserver | undefined

// O ResizeObserver avisa sempre que o tamanho da grade muda; aí contamos as colunas
// lendo o grid-template-columns JÁ CALCULADO pelo navegador (ex.: "224px 224px").
onMounted(() => {
  if (!grade.value) return
  observador = new ResizeObserver(() => {
    if (!grade.value) return
    larguraReal.value = Math.round(grade.value.getBoundingClientRect().width)
    colunas.value = getComputedStyle(grade.value).gridTemplateColumns.split(' ').length
  })
  observador.observe(grade.value)
})
onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <div>
    <label for="lg">Largura do contêiner: <strong>{{ largura }}px</strong></label><br />
    <input id="lg" v-model.number="largura" type="range" min="200" max="1000" step="1" class="slider" />
    <p class="info">
      Largura medida: <strong>{{ larguraReal }}px</strong> → <strong>{{ colunas }}</strong>
      {{ colunas === 1 ? 'coluna' : 'colunas' }}
      <span v-if="larguraReal < largura"> (a tela é menor que o slider, por isso a largura medida é menor)</span>
    </p>
    <div class="palco">
      <div ref="grade" class="grade" :style="{ width: largura + 'px' }">
        <div v-for="n in 6" :key="n" class="card">{{ n }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider { width: 100%; accent-color: var(--cor-azul); margin: var(--esp-2) 0; }
.info { margin-bottom: var(--esp-2); }
.palco { overflow: hidden; border: 2px dashed var(--cor-tinta-suave); padding: var(--esp-2) 0; }
/* A regra do exemplo da pergunta-guia 3 */
.grade { display: grid; grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); gap: 1rem; max-width: 100%; }
.card { background: var(--cor-azul); color: #fff; border: var(--borda); font: 800 1.5rem var(--fonte-titulo); padding: var(--esp-3); text-align: center; }
</style>
