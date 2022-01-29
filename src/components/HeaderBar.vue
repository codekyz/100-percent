<template>
  <header>
    <img src="../assets/logo.png" />
    <nav>
      <router-link to="/todo">Todo</router-link>
      <router-link to="/timer">Timer</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #666;
}

nav {
  display: flex;
}

a {
  margin-right: 10px;
  font-size: 1.5rem;
}

img {
  width: 200px;
  margin: 20px 20px 0 20px;
}

@media screen and (max-width: 800px) {
  img {
    width: 20%;
  }
  a {
    font-size: 1rem;
  }
}
</style>