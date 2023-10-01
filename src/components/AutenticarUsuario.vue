<template>
  <div>
    <h1>Autenticar</h1>
    <form @submit.prevent="fazerLogin">
    <div class="input-group">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required><br>

      <label for="senha">Senha:</label>
      <input type="password" v-model="senha" required><br>
    </div>
    
    <div class="button-center">
      <button type="submit" class="custom-button">Autenticar</button>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    async fazerLogin() {
      const credenciais = {
        email: this.email,
        password: this.senha
      };

      try {
        const response = await axios.post('http://localhost:80/api/autenticar', credenciais);
        const token = response.data.token;

        // Armazene o token no Local Storage
        localStorage.setItem('token', token);

        console.log('Login bem-sucedido:', token);

        // Após o login, você pode redirecionar o usuário para a página necessária
        this.$router.push('/pagina-inicial');
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Exiba uma mensagem de erro para o usuário, se necessário
      }
    }
  }
};
</script>
