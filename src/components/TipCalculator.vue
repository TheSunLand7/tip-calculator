<script lang="ts">
import InputCustom from "@/components/InputCustom.vue";
import SelectTip from "@/components/SelectTip.vue";

export default {
  data() {
    return {
      buttonValue: 0,
    };
  },
  components: { InputCustom, SelectTip },
  methods: {
    buttonSelected(button: Array<HTMLButtonElement>, id: number) {
      this.buttonValue = +button[id].value;
    },
  },
};
</script>

<template>
  <div class="container-tip">
    <div class="input-custom">
      <InputCustom title="Bills" bgUrl="/images/icon-dollar.svg" />
    </div>
    <div class="select-tip">
      <SelectTip @selected="buttonSelected" />
    </div>
    <div class="input-custom">
      <InputCustom title="Number of people" bgUrl="/images/icon-person.svg" />
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
