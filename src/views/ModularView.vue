<template>
  <div class="modular-view">
    <h2 data-aos="fade-down">Experiencia Interactiva</h2>
    <ModularGrid />
  </div>
</template>

<script setup>
import ModularGrid from '../components/ModularGrid.vue'
</script>

<style scoped>
.modular-view {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
