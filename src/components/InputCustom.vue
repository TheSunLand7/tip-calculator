<template>
  <div class="bill-input">
    <label>
      <div>
        <span>
          {{ title }}
        </span>
        <p v-if="isError">{{ message }}</p>
      </div>
      <input
        type="number"
        id="bill"
        :style="{ backgroundImage: `url(${bgUrl})` }"
        placeholder="0"
        v-model="valor"
        ref="input"
        :class="isError ? errorClass : ''"
        @input="$emit('inputValue', $refs.input)"
      />
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    bgUrl: String,
  },
  data() {
    return {
      isError: false,
      errorClass: "error",
      valor: "",
      message: "Can't be zero",
    };
  },
  watch: {
    valor(val) {
      val === 0 ? (this.isError = true) : (this.isError = false);
    },
  },
};
</script>

<style scoped lang="postcss">
.bill-input {
  & input {
    background: no-repeat 15px scroll var(--xy-c-very-light-grayish-cyan);
    border-radius: 5px;
    border: none;
    color: var(--xy-c-very-dark-cyan);
    font-family: var(--font-principal);
    font-size: 20px;
    outline: 2px solid var(--xy-c-very-light-grayish-cyan);
    padding: 6px 15px 6px 35px;
    text-align: end;
  }
  & input:focus {
    outline: 2px solid var(--xy-c-strong-cyan);
  }
  & label {
    display: flex;
    flex-direction: column;
    color: var(--xy-c-very-dark-cyan);
    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      & p {
        color: red;
      }
    }
  }
  & .error {
    outline: 2px solid red;
    &:focus {
      outline: 2px solid red;
    }
  }
}

@media (min-width: 1024px) {
  .bill-input {
    & input {
      cursor: pointer;
      transition: outline 100ms ease-in-out;
    }
    & input:hover {
      outline: 2px solid var(--xy-c-strong-cyan);
    }
  }
}
</style>
