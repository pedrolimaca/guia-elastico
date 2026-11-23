<script setup lang="ts">
import { secoes } from '../router'
</script>

<template>
  <div class="pagina">
    <h1>Elástico</h1>
    <p>Um guia para criar páginas que funcionam em qualquer tela, do celular ao monitor grande. Cada seção tem explicação curta, código comentado, uma pergunta respondida e as fontes. Tem também laboratórios para você mexer e ver o conceito acontecer.</p>
    <p>Dica: o quadradinho amarelo no canto da tela mostra a largura da janela. Redimensione e acompanhe.</p>
    <nav class="trilha" aria-label="Seções">
      <RouterLink v-for="s in secoes" :key="s.path" :to="s.path" class="caixa trilha__item">
        <h2>{{ s.titulo }}</h2>
      </RouterLink>
    </nav>
    <p class="nota">Feito com Vue 3, Vite, Vue Router e Pinia.</p>
  </div>
</template>

<style scoped>
.trilha { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--esp-3); margin-top: var(--esp-4); }
.trilha__item { margin: 0; text-decoration: none; color: var(--cor-tinta); }
.trilha__item h2 { margin: 0; font-size: 1.25rem; }
.trilha__item:hover { background: var(--cor-marca); }
.nota { font-size: 0.875rem; color: var(--cor-tinta-suave); margin-top: var(--esp-4); }
</style>
