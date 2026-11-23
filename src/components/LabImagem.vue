<script setup lang="ts">
import { ref } from 'vue'

// LABORATÓRIO 4: imagem carregada com atraso, com e sem width/height, para ver o texto "pular" (CLS).
// A imagem é um SVG gerado aqui mesmo (sem internet) e entregue depois de 2 segundos.
const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='300'><rect width='600' height='300' fill='#2f5bff'/><text x='300' y='165' font-size='48' fill='white' text-anchor='middle' font-family='sans-serif'>600 × 300</text></svg>"
const origem = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)

const srcCom = ref<string>('')
const srcSem = ref<string>('')
const carregando = ref<boolean>(false)

function iniciar(): void {
  srcCom.value = ''; srcSem.value = ''; carregando.value = true
  setTimeout(() => { srcCom.value = origem; srcSem.value = origem; carregando.value = false }, 2000)
}
</script>

<template>
  <button class="botao" :disabled="carregando" @click="iniciar">{{ carregando ? 'Carregando…' : 'Carregar imagens (2 s de atraso)' }}</button>
  <div class="lado-a-lado">
    <div>
      <h3>Sem width e height</h3>
      <img :src="srcSem || undefined" alt="Imagem de exemplo, sem dimensões declaradas" />
      <p>Este texto fica embaixo da imagem. Repare: quando ela chega, o texto <strong>pula</strong> para baixo.</p>
    </div>
    <div>
      <h3>Com width="600" height="300"</h3>
      <img :src="srcCom || undefined" width="600" height="300" alt="Imagem de exemplo, com dimensões declaradas" class="reservada" />
      <p>Este texto fica embaixo da imagem. O espaço já estava reservado: o texto <strong>não se mexe</strong>.</p>
    </div>
  </div>
</template>

<style scoped>
.lado-a-lado { display: grid; gap: var(--esp-3); margin-top: var(--esp-3); }
img { display: block; width: 100%; }
img:not([src]) { visibility: hidden; }
/* sem atributos, a imagem não carregada tem altura 0; com atributos, o navegador calcula a proporção 2:1 */
img.reservada { height: auto; background: var(--cor-papel); outline: 2px dashed var(--cor-tinta-suave); }
@media (min-width: 40rem) { .lado-a-lado { grid-template-columns: 1fr 1fr; } }
</style>
