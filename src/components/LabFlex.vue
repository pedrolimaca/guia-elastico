<script setup lang="ts">
import { ref } from 'vue'

// LABORATÓRIO 5: mexa nas propriedades do Flexbox e veja os itens se moverem.
const justify = ref<string>('flex-start')
const align = ref<string>('stretch')
const wrap = ref<string>('nowrap')
const qtd = ref<number>(5)
const opcoesJustify = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around']
const opcoesAlign = ['stretch', 'flex-start', 'center', 'flex-end']
</script>

<template>
  <div class="controles">
    <label>justify-content<br /><select v-model="justify" class="campo"><option v-for="o in opcoesJustify" :key="o">{{ o }}</option></select></label>
    <label>align-items<br /><select v-model="align" class="campo"><option v-for="o in opcoesAlign" :key="o">{{ o }}</option></select></label>
    <label>flex-wrap<br /><select v-model="wrap" class="campo"><option>nowrap</option><option>wrap</option></select></label>
    <label>itens: {{ qtd }}<br /><input v-model.number="qtd" type="range" min="1" max="12" /></label>
  </div>
  <div class="flex" :style="{ justifyContent: justify, alignItems: align, flexWrap: wrap }">
    <div v-for="n in qtd" :key="n" class="item" :style="{ height: 2.5 + (n % 3) * 1.25 + 'rem' }">{{ n }}</div>
  </div>
  <pre class="css">display: flex; gap: 0.5rem;
justify-content: {{ justify }};
align-items: {{ align }};
flex-wrap: {{ wrap }};</pre>
</template>

<style scoped>
.controles { display: grid; grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); gap: var(--esp-3); margin-bottom: var(--esp-3); }
.controles .campo { width: 100%; }
.flex { display: flex; gap: 0.5rem; min-height: 9rem; border: 2px dashed var(--cor-tinta-suave); padding: var(--esp-2); overflow: hidden; }
.item { min-width: 3rem; flex: 0 0 auto; background: var(--cor-azul); color: #fff; border: var(--borda); display: grid; place-items: center; font: 800 1.25rem var(--fonte-titulo); }
.css { background: var(--cor-tinta); color: var(--cor-papel); padding: var(--esp-3); font: 0.8125rem var(--fonte-codigo); overflow-x: auto; margin: var(--esp-3) 0 0; }
</style>
