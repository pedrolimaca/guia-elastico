import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Store Pinia: guarda a largura da janela. Quem precisar (indicador, laboratórios) só lê daqui.
export const useViewportStore = defineStore('viewport', () => {
  const largura = ref<number>(window.innerWidth)

  // Os mesmos pontos de quebra usados no CSS (40rem = 640px e 64rem = 1024px, com 1rem = 16px)
  const breakpoint = computed<string>(() => {
    if (largura.value >= 1024) return 'desktop (≥ 1024px)'
    if (largura.value >= 640) return 'tablet (≥ 640px)'
    return 'celular (< 640px)'
  })

  function atualizar(): void {
    largura.value = window.innerWidth
  }
  function iniciar(): () => void {
    window.addEventListener('resize', atualizar)
    return () => window.removeEventListener('resize', atualizar)
  }
  return { largura, breakpoint, iniciar }
})
