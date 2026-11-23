<script setup lang="ts">
import { useViewportStore } from '../stores/viewport'
// LABORATÓRIO 3 (global): indicador fixo no canto da tela, em todas as páginas.
const viewport = useViewportStore()
</script>

<template>
  <aside class="indicador" aria-live="off">
    <strong>{{ viewport.largura }}px</strong>
    <span>{{ viewport.breakpoint }}</span>
  </aside>
</template>

<style scoped>
.indicador { position: fixed; right: var(--esp-2); bottom: var(--esp-2); z-index: 20; background: var(--cor-marca); color: var(--cor-tinta); border: var(--borda); padding: var(--esp-1) var(--esp-2); font: 0.8125rem/1.3 var(--fonte-codigo); display: flex; flex-direction: column; max-width: calc(100vw - 1rem); }
.indicador strong { font-size: 1.125rem; }
</style>
