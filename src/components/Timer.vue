<template>
  <section class="timer">
    <div class="time">
      <p class="time-stamp">00:00:00</p>
    </div>
    <div class="buttons">
      <button class="btn">시작</button>
      <button class="btn">일시정지</button>
      <button class="btn">중지</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time {
  margin-top: 80px;
}

.time-stamp {
  font-weight: 800;
  font-size: 2rem;
}

.buttons {
  margin-top: 50px;
}

@media screen and (min-width: 800px) {
  .time-stamp {
    font-size: 3rem;
  }
}

.btn {
  border: 1px solid #666;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
}
</style>