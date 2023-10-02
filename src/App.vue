<template>
  <div id="app">
    <header>
      <nav>
        <div class="container">
          <router-link to="/pagina-inicial">Página Inicial</router-link>
          <router-link to="/pagina-inicial" @click="encerrarSessao">Sair</router-link>
          <router-link to="/autenticar-usuario">Entrar</router-link>
          <router-link to="/registrar-usuario">Registrar-se</router-link>
          <router-link to="/email-vendedor">E-mail Vendedor</router-link>

          <!-- Dropdown "Vendedores" -->
          <div class="dropdown">
            <span class="dropdown-btn">Vendedores</span>
            <div class="dropdown-content">
              <p><router-link to="/cadastrar-vendedor">Cadastrar Vendedor</router-link></p>
              <p><router-link to="/listar-vendedores">Listar Vendedores</router-link></p>
              <p><router-link to="/editar-vendedor">Editar Vendedor</router-link></p>
              <p><router-link to="/excluir-vendedor">Excluir Vendedor</router-link></p>
            </div>
          </div>

          <!-- Dropdown "Vendas" -->
          <div class="dropdown">
            <span class="dropdown-btn">Vendas</span>
            <div class="dropdown-content">
              <p><router-link to="/cadastrar-venda">Cadastrar Venda</router-link></p>
              <p><router-link to="/listar-vendas">Listar Vendas</router-link></p>
              <p><router-link to="/listar-vendas-vendedor">Listar Vendas por Vendedor</router-link></p>
            </div>

          </div>
        </div>
      </nav>
    </header>
    
    <main>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>

    <footer>
      <div class="container">
        <!-- Conteúdo do rodapé, se necessário -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    encerrarSessao() {
      console.log('Encerrando sessão...');
      localStorage.removeItem('token');
      this.$router.push('/pagina-inicial');
    }
  }
};
</script>

<style>
/* Estilos Globais */
body {
  background-color: #333;
  color: #fff;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 50px;
}

input {
  margin: 10px 0px;
}

select {
  margin: 10px 0px;
}

header {
  background-color: #fff;
  color: #007bff;
  padding: 10px 0;
}

nav {
  display: flex;
  justify-content: space-between;
}

nav a {
  color: #007bff;
  text-decoration: none;
  margin-right: 20px;
}

main {
  padding: 40px 0;
}

footer {
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

ul, ol {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0px;
  color: #7B9B0E;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.custom-button {
  background-color: #7B9B0E;
  color: #333;
  padding: 10px;
  margin: 30px 0px;
  border-radius: 10px;
  width: 100%;
  font-size: 18px;
}

.button-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
}

/* Dropdown estilizado */
.dropdown {
  display: inline-block;
  position: relative;
  margin: 0px 50px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 250px;
  padding: 30px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>