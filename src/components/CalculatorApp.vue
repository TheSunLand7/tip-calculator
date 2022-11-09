<template>
  <div class="main-container">
    <div>
      <div class="container__calc">
        <div>
          <p class="text">Tip Amount</p>
          <p>/ person</p>
        </div>
        <span class="amount">$4.27</span>
      </div>
      <div class="container__calc" id="total">
        <div>
          <p class="text">Total</p>
          <p>/ person</p>
        </div>
        <span class="amount">$32.79</span>
      </div>
    </div>
    <button>RESET</button>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="postcss" scoped>
.main-container {
  background-color: var(--xy-c-very-dark-cyan);
  border-radius: 10px;
  padding: 30px 15px 15px;
  height: auto;
  & .text {
    color: var(--xy-c-light-grayish-cyan);
    & ~ p {
      color: var(--xy-c-grayish-cyan);
    }
  }
  & .amount {
    color: var(--xy-c-strong-cyan);
    font-size: 30px;
  }
  & .container__calc {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  & #total {
    margin: 20px 0 30px;
  }
  & button {
    align-items: center;
    background-color: var(--xy-c-strong-cyan);
    border-radius: 5px;
    border: none;
    color: var(--xy-c-very-dark-cyan);
    display: flex;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    padding: 12px 0;
    width: 100%;
    transition: background-color 100ms ease;
  }
}

@media (min-width: 1024px) {
  .main-container {
    height: 100%;
    padding: 40px 30px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & #total {
      margin-top: 40px;
    }
    & .text {
      font-size: 20px;
    }

    & .amount {
      font-size: 40px;
    }
    & button:hover {
      cursor: pointer;
      background-color: var(--xy-c-light-grayish-cyan);
    }
  }
}
</style>
