<script setup lang="ts">
import CalculatorApp from "@/components/CalculatorApp.vue";
import InputCustom from "./components/InputCustom.vue";
import SelectTip from "./components/SelectTip.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      value: 0,
      billValue: 0,
      peopleValue: 0,
    };
  },
  methods: {
    buttonSelected(button: Array<HTMLButtonElement>, id: number) {
      this.value = +button[id].value;
    },
    inputTipValue(input: HTMLInputElement) {
      this.value = +input.value;
    },
    inputBillValue(input: HTMLInputElement) {
      this.billValue = +input.value;
    },
    inputPeopleValue(input: HTMLInputElement) {
      this.peopleValue = +input.value;
    },
    reset(event: Event) {
      console.log(event);
    },
  },
};
</script>

<template>
  <h1><span>SPLI</span><span>TTER</span></h1>
  <main>
    <div class="tip-calculator">
      <div class="container-tip">
        <div class="input-custom">
          <InputCustom
            title="Bills"
            bgUrl="/images/icon-dollar.svg"
            @inputValue="inputBillValue"
          />
        </div>
        <div class="select-tip">
          <SelectTip @selected="buttonSelected" @inputTip="inputTipValue" />
        </div>
        <div class="input-custom">
          <InputCustom
            title="Number of people"
            bgUrl="/images/icon-person.svg"
            @inputValue="inputPeopleValue"
          />
        </div>
      </div>
    </div>
    <div class="calculator">
      <CalculatorApp :total="value" :bill="billValue" :people="peopleValue" />
    </div>
  </main>
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by
    <a href="https://my-portfolio-v2-1.pages.dev/">xiayudev&trade;</a>.
  </div>
</template>
<style scoped lang="postcss">
.attribution {
  display: none;
  position: absolute;
  bottom: 2em;
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
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
.input-custom,
.select-tip {
  margin-bottom: 30px;
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
  .attribution {
    display: block;
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
  .container-tip {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}
</style>
