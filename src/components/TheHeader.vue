<template>
  <nav class="navigation">
      <img class="navigation--image" src="../assets/logo.svg" alt="">
      <ul class="navigation--links">
        <li>Início</li>
        <li>Preços</li>
        <li>Sobre nós</li>
      </ul>

      <div class="navigation--buttons">
        <button>Login</button>
        <button>Assine</button>
      </div>
    </nav>
</template>

<script>
</script>

<style lang="scss" scoped>
.navigation {
  width: 100vw;
  height: 5em;
  padding: 2em;
  border: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;

  .navigation--image {
    width: 3em;
    height: 3em;
  }

  .navigation--links {
    display: flex;
    list-style: none;

    li {
      padding: 0 1em;
    }
  }

  .navigation--buttons{
    align-self: flex-end;
    justify-self: flex-end;
  }
}
</style>