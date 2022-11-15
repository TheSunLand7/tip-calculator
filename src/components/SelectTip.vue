<template>
  <div>
    <p>Select Tip %</p>
    <div class="percent-container" @click="changeBg">
      <button
        v-for="(percent, i) in percents"
        :key="i"
        ref="button"
        :value="percent"
        @click="$emit('selected', $refs.button, i)"
      >
        {{ percent }}%
      </button>
      <input
        type="number"
        placeholder="Custom"
        ref="input"
        @input="$emit('inputTip', $refs.input)"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isActive: false,
      activeClass: "active",
      percents: [5, 10, 15, 25, 50],
      selected: "",
    };
  },
  methods: {
    removeBg(buttons: HTMLButtonElement[]) {
      buttons.forEach((button) => {
        if (button.getAttribute("class") === "active") {
          button.classList.remove("active");
        }
      });
    },
    changeBg(event: Event) {
      if ((event.target as HTMLButtonElement).nodeName === "BUTTON") {
        this.removeBg(this.$refs.button as HTMLButtonElement[]);
        (event.target as HTMLButtonElement).classList.add("active");
        this.selected = (event.target as HTMLButtonElement).value;
      } else if ((event.target as HTMLInputElement).nodeName === "INPUT") {
        this.removeBg(this.$refs.button as Array<HTMLButtonElement>);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
p {
  color: var(--xy-c-very-dark-cyan);
  margin-bottom: 10px;
}
.percent-container {
  display: grid;
  gap: 10px;
  grid-template: repeat(3, max-content) / repeat(2, minmax(130px, 1fr));
  & button {
    background-color: var(--xy-c-very-dark-cyan);
    border-radius: 5px;
    color: var(--xy-c-very-light-grayish-cyan);
    font-size: 22px;
    padding: 8px 0;
    border: none;
    font-family: var(--font-principal);
    text-align: center;
  }
  & .active {
    background-color: var(--xy-c-strong-cyan);
  }
  & input {
    background-color: var(--xy-c-very-light-grayish-cyan);
    border-radius: 5px;
    border: none;
    color: var(--xy-c-very-dark-cyan);
    font-family: var(--font-principal);
    font-size: 22px;
    outline: 2px solid var(--xy-c-very-light-grayish-cyan);
    padding: 8px 15px;
    text-align: end;
    transition: outline 100ms ease-in-out;
    &:focus {
      outline: 2px solid var(--xy-c-strong-cyan);
    }
  }
}

@media (min-width: 768px) {
  .percent-container {
    & button:hover {
      background-color: var(--xy-c-light-grayish-cyan);
      color: var(--xy-c-very-dark-cyan);
      cursor: pointer;
    }
    & input:hover {
      cursor: pointer;
      outline: 2px solid var(--xy-c-strong-cyan);
    }
  }
}

@media (min-width: 1440px) {
  .percent-container {
    grid-template: repeat(2, max-content) / repeat(3, minmax(130px, 1fr));
  }
}
</style>
