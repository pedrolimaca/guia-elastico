<script setup lang="ts">
import { ref } from 'vue'
import SecaoGuia from '../components/SecaoGuia.vue'
import CodeBlock from '../components/CodeBlock.vue'
import type { Fonte } from '../types'

const fontes: Fonte[] = [
  { nome: 'Vue: List Rendering (manter estado com key)', url: 'https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key' },
  { nome: 'Vue: Props', url: 'https://vuejs.org/guide/components/props.html' },
  { nome: 'Vue: Style Guide', url: 'https://vuejs.org/style-guide/' },
  { nome: 'Vue Router: Lazy Loading Routes', url: 'https://router.vuejs.org/guide/advanced/lazy-loading.html' },
  { nome: 'web.dev: Core Web Vitals', url: 'https://web.dev/articles/vitals' },
]
const codigo = `<!-- CardAnimal.vue (nome com várias palavras, em PascalCase) -->
<script setup lang="ts">
// Props tipadas: o Vue/TypeScript avisa se passarem algo errado
defineProps<{ nome: string; idade: number }>()
// Evento tipado: o filho AVISA o pai; o pai decide o que fazer
const emit = defineEmits<{ remover: [nome: string] }>()
<\/script>

<!-- Pai: :key único e estável (id), nunca o índice -->
<CardAnimal v-for="a in animais" :key="a.id" :nome="a.nome" :idade="a.idade" @remover="remover" />

/* Design tokens: um lugar só para cores e espaços */
:root { --cor-azul: #2f5bff; --esp-3: 1rem; }
.botao { background: var(--cor-azul); padding: var(--esp-3); }

// Rotas sob demanda: o JS da página só baixa quando a pessoa entra nela
{ path: '/imagens', component: () => import('../views/ImagensView.vue') }

// Estrutura de pastas: src/components (peças), src/views (páginas), src/router, src/stores`
interface Animal { id: number; nome: string }
const lista = ref<Animal[]>([{ id: 1, nome: 'Gato' }, { id: 2, nome: 'Cachorro' }, { id: 3, nome: 'Coelho' }])
</script>

<template>
  <SecaoGuia titulo="Boas práticas em projetos Vue" pergunta="Uma lista de animais é exibida com v-for, sem :key, e cada item tem um campo de texto. A pessoa digita algo no campo do segundo animal, e em seguida o primeiro animal é removido da lista. O que pode acontecer com o texto digitado, e por quê?" :fontes="fontes">
    <ul>
      <li><strong>Pastas:</strong> <code>components</code> para peças reutilizáveis, <code>views</code> para páginas, <code>router</code> e <code>stores</code>.</li>
      <li><strong>Nomes:</strong> componentes com mais de uma palavra (<code>CardAnimal</code>), para não confundir com tags HTML.</li>
      <li><strong>Props e eventos:</strong> dados descem por props tipadas, avisos sobem por eventos.</li>
      <li><strong><code>:key</code> no v-for:</strong> identifica cada item de forma única.</li>
      <li><strong>Design tokens:</strong> cores e espaços em variáveis CSS no <code>:root</code>.</li>
      <li><strong>Core Web Vitals:</strong> <strong>LCP</strong> (rapidez do maior conteúdo, até 2,5 s), <strong>INP</strong> (resposta aos toques e cliques, até 200 ms) e <strong>CLS</strong> (estabilidade visual, até 0,1).</li>
      <li><strong>Rotas sob demanda:</strong> <code>() =&gt; import()</code> reduz o JavaScript inicial e melhora o LCP.</li>
    </ul>
    <template #codigo><CodeBlock :codigo="codigo" legenda="Boas práticas juntas" /></template>
    <template #labs>
      <section class="caixa caixa--lab" aria-labelledby="lab-key">
        <h2 id="lab-key">Laboratório: a lista com :key</h2>
        <p>Digite algo no campo de "Cachorro" e remova "Gato". O texto continua com o Cachorro, porque esta lista usa <code>:key="a.id"</code>.</p>
        <div class="miolo">
          <ul class="animais">
            <li v-for="a in lista" :key="a.id">
              <label>{{ a.nome }} <input class="campo" placeholder="escreva aqui" /></label>
              <button class="botao" @click="lista = lista.filter(x => x.id !== a.id)">Remover</button>
            </li>
          </ul>
          <p v-if="!lista.length">Lista vazia. Recarregue a página para recomeçar.</p>
        </div>
      </section>
    </template>
    <template #resposta>
      <p>Sem <code>:key</code>, o Vue não sabe quem é quem e reaproveita os elementos do DOM <strong>pela posição</strong>. O texto digitado fica guardado dentro do <code>&lt;input&gt;</code> (no DOM), não nos dados da lista.</p>
      <p>Quando o primeiro animal é removido, o Vue atualiza o texto da posição 1 para o segundo animal e destrói o último elemento. O input da posição 1 mantém o que estava escrito nele, e o texto digitado para o segundo animal pode <strong>desaparecer ou ir parar no animal errado</strong>.</p>
      <p>Com <code>:key="animal.id"</code>, o Vue liga cada input ao seu animal e remove o elemento certo, então o texto continua no lugar certo. Evite usar o índice como key, que reproduz o mesmo problema.</p>
    </template>
  </SecaoGuia>
</template>

<style scoped>
.animais { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--esp-3); }
.animais li { display: flex; flex-wrap: wrap; align-items: end; gap: var(--esp-2); }
.animais label { display: flex; flex-direction: column; flex: 1 1 12rem; font-weight: 600; }
</style>
