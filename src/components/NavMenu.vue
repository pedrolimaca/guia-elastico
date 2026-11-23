<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { secoes } from '../router'

const aberto = ref(false)
const route = useRoute()
// Fecha o menu do celular ao trocar de página
watch(() => route.path, () => { aberto.value = false })
</script>

<template>
  <header class="topo">
    <div class="topo__barra">
      <RouterLink to="/" class="marca">Elástico</RouterLink>
      <!-- No celular o menu vira este botão -->
      <button class="botao botao--menu" :aria-expanded="aberto" aria-controls="menu" @click="aberto = !aberto">
        {{ aberto ? 'Fechar' : 'Menu' }}
      </button>
    </div>
    <nav id="menu" class="menu" :class="{ 'menu--aberto': aberto }" aria-label="Seções do guia">
      <RouterLink v-for="s in secoes" :key="s.path" :to="s.path">{{ s.nome }}</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.topo { background: var(--cor-tinta); color: var(--cor-papel); border-bottom: 0.25rem solid var(--cor-marca); position: sticky; top: 0; z-index: 10; }
.topo__barra { display: flex; justify-content: space-between; align-items: center; gap: var(--esp-3); padding: var(--esp-2) var(--esp-3); }
.marca { font: 800 1.5rem var(--fonte-titulo); color: var(--cor-marca); text-decoration: none; }
.botao--menu { background: var(--cor-marca); color: var(--cor-tinta); border-color: var(--cor-marca); }
.menu { display: none; flex-direction: column; padding: 0 var(--esp-3) var(--esp-3); }
.menu--aberto { display: flex; }
.menu a { color: var(--cor-papel); text-decoration: none; padding: var(--esp-2) 0; border-bottom: 1px solid var(--cor-tinta-suave); font-weight: 600; }
.menu a.router-link-active { color: var(--cor-marca); }
@media (min-width: 48rem) {
  .topo { display: flex; justify-content: space-between; align-items: center; padding-inline: var(--esp-3); }
  .botao--menu { display: none; }
  .menu, .menu--aberto { display: flex; flex-direction: row; flex-wrap: wrap; gap: var(--esp-3); padding: 0; }
  .menu a { border: 0; padding: var(--esp-2) 0; }
  .menu a.router-link-active { box-shadow: 0 0.25rem 0 var(--cor-marca); }
}
</style>
