<script setup lang="ts">
// Mostra um exemplo de código. A rolagem horizontal fica DENTRO do bloco (pre com overflow-x),
// assim a página nunca ganha barra de rolagem lateral.
defineProps<{ codigo: string; legenda?: string }>()
</script>

<template>
  <figure class="codigo">
    <figcaption v-if="legenda">{{ legenda }}</figcaption>
    <pre><code>{{ codigo }}</code></pre>
  </figure>
</template>

<style scoped>
.codigo { margin: var(--esp-3) 0; border: var(--borda); background: var(--cor-tinta); color: var(--cor-papel); min-width: 0; }
figcaption { background: var(--cor-azul); padding: var(--esp-1) var(--esp-3); font: 600 0.875rem var(--fonte-texto); }
pre { margin: 0; padding: var(--esp-3); overflow-x: auto; font: 0.8125rem/1.55 var(--fonte-codigo); }
code { background: none; padding: 0; font-size: inherit; }
</style>
