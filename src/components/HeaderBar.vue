<template>
  <header class="header">
    <img src="../assets/logo.png" />
    <nav class="nav">
      <a>login</a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.nav {
  display: flex;
}

a {
  margin-right: 10px;
  font-size: 1rem;
}

img {
  width: 200px;
  margin: 20px 20px 0 20px;
}

@media screen and (max-width: 800px) {
  img {
    width: 20%;
    margin: 20px 10px 0 10px;
  }
  a {
    font-size: 0.8rem;
  }
}
</style>