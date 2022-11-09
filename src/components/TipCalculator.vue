<script lang="ts">
import InputCustom from "@/components/InputCustom.vue";
import SelectTip from "@/components/SelectTip.vue";
export default { components: { InputCustom, SelectTip } };
</script>

<template>
  <input-custom title="Bills" bgUrl="/images/icon-dollar.svg" />
  <select-tip />
  <input-custom title="Number of people" bgUrl="/images/icon-person.svg" />
</template>
