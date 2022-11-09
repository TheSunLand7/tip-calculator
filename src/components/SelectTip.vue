<template>
  <div>
    <p>Select Tip %</p>
    <div class="percent-container">
      <div>5%</div>
      <div>10%</div>
      <div>15%</div>
      <div>25%</div>
      <div>50%</div>
      <input type="text" placeholder="Custom" />
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
  & div {
    background-color: var(--xy-c-very-dark-cyan);
    border-radius: 5px;
    color: var(--xy-c-very-light-grayish-cyan);
    font-size: 22px;
    padding: 8px 0;
    text-align: center;
  }
  & input {
    background-color: var(--xy-c-very-light-grayish-cyan);
    border: none;
    text-align: end;
    outline: 2px solid var(--xy-c-very-light-grayish-cyan);
    padding: 8px 5px;
    &::placeholder {
      color: var(--xy-c-very-dark-cyan);
      font-family: var(--font-principal);
      font-size: 22px;
    }
  }
}
</style>
