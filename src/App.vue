<script setup lang="ts">
import TipCalculator from "@/components/TipCalculator.vue";
</script>

<template>
  <h1><span>SPLI</span><span>TTER</span></h1>
  <main>
    <tip-calculator />
  </main>
</template>

<style scoped lang="postcss">
h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  padding: 40px 0;
  font-weight: lighter;
  width: 100%;
  color: var(--xy-c-very-dark-cyan);
  & span {
    letter-spacing: 8px;
  }
}
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: var(--vt-c-white);
  padding: 30px;
  border-radius: 20px 20px 0 0;
}
</style>
