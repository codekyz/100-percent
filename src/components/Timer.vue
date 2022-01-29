<template>
  <section>
    <div class="time">
      <h1>00:00:00</h1>
    </div>
    <div class="buttons">
      <button>시작</button>
      <button>일시정지</button>
      <button>중지</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time {
  margin-top: 80px;
}

.buttons {
  margin-top: 50px;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 3rem;
  }
}

button {
  border: 1px solid #666;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
}
</style>