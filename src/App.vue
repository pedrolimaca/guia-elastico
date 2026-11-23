<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useViewportStore } from './stores/viewport'
import NavMenu from './components/NavMenu.vue'
import WidthBadge from './components/WidthBadge.vue'

const viewport = useViewportStore()
let parar: () => void
onMounted(() => { parar = viewport.iniciar() })
onUnmounted(() => parar?.())
</script>

<template>
  <NavMenu />
  <main><RouterView /></main>
  <WidthBadge />
</template>
