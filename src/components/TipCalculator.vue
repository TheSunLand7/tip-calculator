<script lang="ts">
import InputCustom from "@/components/InputCustom.vue";
import SelectTip from "@/components/SelectTip.vue";
export default { components: { InputCustom, SelectTip } };
</script>

<template>
  <div class="container-tip">
    <div class="input-custom">
      <input-custom title="Bills" bgUrl="/images/icon-dollar.svg" />
    </div>
    <div class="select-tip">
      <select-tip />
    </div>
    <div class="input-custom">
      <input-custom title="Number of people" bgUrl="/images/icon-person.svg" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.input-custom,
.select-tip {
  margin-bottom: 30px;
}

@media (min-width: 1440px) {
  .container-tip {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}
</style>
