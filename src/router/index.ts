import { createRouter, createWebHistory } from 'vue-router'

// Uma rota por seção. Todas (menos a home) carregam sob demanda com import() dinâmico:
// o navegador só baixa o JavaScript da página quando a pessoa entra nela.
export const secoes = [
  { path: '/viewport', nome: 'Viewport', titulo: '1. Por que responsividade importa' },
  { path: '/unidades', nome: 'Unidades', titulo: '2. Unidades CSS' },
  { path: '/flex-grid', nome: 'Flex e Grid', titulo: '3. Flexbox e Grid' },
  { path: '/imagens', nome: 'Imagens', titulo: '4. Imagens responsivas' },
  { path: '/vue', nome: 'Boas práticas', titulo: '5. Boas práticas em Vue' },
  { path: '/desafio', nome: 'Desafio', titulo: 'Desafio' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/viewport', component: () => import('../views/ViewportView.vue') },
    { path: '/unidades', component: () => import('../views/UnidadesView.vue') },
    { path: '/flex-grid', component: () => import('../views/FlexGridView.vue') },
    { path: '/imagens', component: () => import('../views/ImagensView.vue') },
    { path: '/vue', component: () => import('../views/BoasPraticasView.vue') },
    { path: '/desafio', component: () => import('../views/DesafioView.vue') },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
