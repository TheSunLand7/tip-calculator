<script lang="ts">
import InputCustom from "@/components/InputCustom.vue";
import SelectTip from "@/components/SelectTip.vue";
import CalculatorApp from "./CalculatorApp.vue";
export default { components: { InputCustom, SelectTip, CalculatorApp } };
</script>

<template>
  <input-custom
    title="Bills"
    bgUrl="/images/icon-dollar.svg"
    class="input-custom"
  />
  <select-tip class="select-tip" />
  <input-custom
    title="Number of people"
    bgUrl="/images/icon-person.svg"
    class="input-custom"
  />
  <calculator-app class="calculator" />
</template>

<style lang="postcss">
.input-custom,
.select-tip {
  margin-bottom: 30px;
}
.calculator {
  margin-top: 10px;
}
</style>
