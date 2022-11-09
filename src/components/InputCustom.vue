<template>
  <div class="bill-input">
    <label>
      <span>
        {{ title }}
      </span>
      <input
        type="text"
        id="bill"
        :style="{ backgroundImage: 'url(' + bgUrl + ')' }"
        placeholder="0"
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
    & span {
      margin-bottom: 8px;
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
