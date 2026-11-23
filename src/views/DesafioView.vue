<script setup lang="ts">
import { ref, computed } from 'vue'

// Desafio: a resposta só se descobre usando o laboratório de Grid (seção 3) deste guia.
const resposta = ref<string>('')
const tentou = ref<boolean>(false)
const certa = computed<boolean>(() => Number(resposta.value) === 704)
</script>

<template>
  <div class="pagina">
    <h1>Desafio</h1>
    <section class="caixa">
      <h2>No nosso laboratório de Grid, a partir de qual largura (em px) do contêiner aparecem 3 colunas?</h2>
      <p>Use o <RouterLink to="/flex-grid">laboratório do Grid</RouterLink> e confira com a conta da pergunta-guia 3. Digite só o número.</p>
      <p>
        <label for="resp">Sua resposta (px)</label><br />
        <input id="resp" v-model="resposta" type="number" inputmode="numeric" class="campo" @input="tentou = false" />
        <button class="botao" @click="tentou = true">Conferir</button>
      </p>
      <p v-if="tentou && certa" class="ok">Isso mesmo! 3 × 224 + 2 × 16 = 704px.</p>
      <p v-else-if="tentou">Ainda não. Cada coluna precisa de 14rem (224px) e há 1rem (16px) de gap entre colunas. Teste no slider.</p>
    </section>
  </div>
</template>

<style scoped>
.ok { color: var(--cor-ok); font-weight: 600; }
</style>
