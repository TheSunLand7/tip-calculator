<script setup lang="ts">
import TipCalculator from "@/components/TipCalculator.vue";
</script>

<template>
  <h1><span>SPLI</span><span>TTER</span></h1>
  <main>
    <tip-calculator />
  </main>
</template>

<style scoped>
h1 {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  width: 100%;
  color: var(--xy-c-very-dark-cyan);
}
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--vt-c-white);
  padding: 40px;
  border-radius: 20px 20px 0 0;
}
</style>
