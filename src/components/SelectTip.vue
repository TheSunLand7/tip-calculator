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
    border-radius: 5px;
    border: none;
    color: var(--xy-c-very-dark-cyan);
    font-family: var(--font-principal);
    font-size: 22px;
    outline: 2px solid var(--xy-c-very-light-grayish-cyan);
    padding: 8px 15px;
    text-align: end;
    transition: outline 100ms ease-in-out;
  }
}

@media (min-width: 768px) {
  .percent-container {
    & div:hover {
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
