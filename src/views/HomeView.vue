<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <nav>
      <ul>
        <li>Início</li>
        <li>Preços</li>
        <li>Sobre nós</li>
      </ul>
    </nav>

    <section>
      <h1>Clube de Assinaturas do Livro Aleatório</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus lacus, porttitor a consectetur nec, blandit id eros. Nullam at quam erat. Aliquam malesuada placerat tortor, bibendum tincidunt lacus suscipit vitae. Suspendisse felis nibh, finibus sit amet turpis facilisis, semper dapibus mauris. Etiam ipsum nisl, finibus nec egestas id, mattis eu turpis. Phasellus facilisis varius erat, id ornare metus. Quisque id facilisis ipsum, et tempus eros. In nec lorem aliquam est posuere dapibus quis in dui. Nullam sapien lectus, placerat quis lobortis eu, volutpat ut orci. Nullam sagittis orci vel felis placerat fringilla. Nam ornare accumsan erat eget venenatis. Vivamus ut ultrices magna. </p>
    </section>

    <section>
      <h2>Sobre nós</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus lacus, porttitor a consectetur nec, blandit id eros. Nullam at quam erat. Aliquam malesuada placerat tortor, bibendum tincidunt lacus suscipit vitae. Suspendisse felis nibh, finibus sit amet turpis facilisis, semper dapibus mauris. Etiam ipsum nisl, finibus nec egestas id, mattis eu turpis. Phasellus facilisis varius erat, id ornare metus. Quisque id facilisis ipsum, et tempus eros. In nec lorem aliquam est posuere dapibus quis in dui. Nullam sapien lectus, placerat quis lobortis eu, volutpat ut orci. Nullam sagittis orci vel felis placerat fringilla. Nam ornare accumsan erat eget venenatis. Vivamus ut ultrices magna. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus lacus, porttitor a consectetur nec, blandit id eros. Nullam at quam erat. Aliquam malesuada placerat tortor, bibendum tincidunt lacus suscipit vitae. Suspendisse felis nibh, finibus sit amet turpis facilisis, semper dapibus mauris. Etiam ipsum nisl, finibus nec egestas id, mattis eu turpis. Phasellus facilisis varius erat, id ornare metus. Quisque id facilisis ipsum, et tempus eros. In nec lorem aliquam est posuere dapibus quis in dui. Nullam sapien lectus, placerat quis lobortis eu, volutpat ut orci. Nullam sagittis orci vel felis placerat fringilla. Nam ornare accumsan erat eget venenatis. Vivamus ut ultrices magna. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus lacus, porttitor a consectetur nec, blandit id eros. Nullam at quam erat. Aliquam malesuada placerat tortor, bibendum tincidunt lacus suscipit vitae. Suspendisse felis nibh, finibus sit amet turpis facilisis, semper dapibus mauris. Etiam ipsum nisl, finibus nec egestas id, mattis eu turpis. Phasellus facilisis varius erat, id ornare metus. Quisque id facilisis ipsum, et tempus eros. In nec lorem aliquam est posuere dapibus quis in dui. Nullam sapien lectus, placerat quis lobortis eu, volutpat ut orci. Nullam sagittis orci vel felis placerat fringilla. Nam ornare accumsan erat eget venenatis. Vivamus ut ultrices magna. </p>
    </section>

    <section>
      <h2>Preços</h2>

      <div class="price-card">
        <h3>Modelo 1</h3>
      </div>

      <div class="price-card">
        <h3>Modelo 2</h3>
      </div>

      <div class="price-card">
        <h3>Modelo 3</h3>
      </div>
    </section>

    <section>
      <h2>Cadastre-se</h2>

      <form action="">
        <label for="">Nome completo</label>
        <input type="text">

        <label for="">E-mail</label>
        <input type="email">

        <label for="">Senha</label>
        <input type="password">

        <label for="">Confirmação de Senha</label>
        <input type="password">

        <button type="submit">Cadastrar-se</button>
      </form>
    </section>

    <footer>
      <p>
        © 2022 - Clube do Livro Aleatório por Gabriel Gomes. Todos os direitos reservados. Política de Privacidade | Termos de Uso
      </p>
      <p>
        Os produtos apresentados estão sujeitos a variações de preço conforme determinação dos Termos de Uso.
      </p>

      <div class="socials">
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Whatsapp</li>
          <li>LinkedIn</li>
          <li>WattPad</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
