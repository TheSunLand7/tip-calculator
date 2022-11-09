<script setup lang="ts">
import TipCalculator from "@/components/TipCalculator.vue";
import CalculatorApp from "@/components/CalculatorApp.vue";
</script>

<template>
  <h1><span>SPLI</span><span>TTER</span></h1>
  <main>
    <div class="tip-calculator">
      <tip-calculator />
    </div>
    <div class="calculator">
      <calculator-app />
    </div>
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
.calculator {
  margin-top: 10px;
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

@media (min-width: 1024px) {
  h1 {
    position: absolute;
    top: 0;
  }
  main {
    width: 70%;
    height: 500px;
    display: grid;
    gap: 20px;
    border-radius: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  .tip-calculator {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .calculator {
    margin: 0;
  }
}

@media (min-width: 1440px) {
  h1 {
    padding: 60px 0;
  }
  main {
    width: 60%;
    gap: 40px;
    padding: 40px 30px;
  }
}
</style>
