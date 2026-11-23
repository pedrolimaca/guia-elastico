<script setup lang="ts">
import type { Fonte } from '../types'
// Componente de layout de TODAS as seções. Cada seção tem as 4 partes pedidas:
// 1) explicação (slot padrão) 2) código (slot "codigo") 3) resposta da pergunta-guia 4) fontes.
defineProps<{
  titulo: string
  pergunta: string
  fontes: Fonte[]
}>()
</script>

<template>
  <article class="pagina">
    <h1>{{ titulo }}</h1>

    <section aria-labelledby="exp">
      <h2 id="exp">Explicando</h2>
      <slot />
    </section>

    <section aria-labelledby="cod">
      <h2 id="cod">Código comentado</h2>
      <slot name="codigo" />
    </section>

    <slot name="labs" />

    <section class="caixa" aria-labelledby="resp">
      <h2 id="resp">Pergunta-guia</h2>
      <p><strong>{{ pergunta }}</strong></p>
      <slot name="resposta" />
    </section>

    <section aria-labelledby="fon">
      <h2 id="fon">Fontes consultadas</h2>
      <ul>
        <li v-for="f in fontes" :key="f.url"><a :href="f.url" target="_blank" rel="noopener">{{ f.nome }}</a></li>
      </ul>
    </section>
  </article>
</template>
