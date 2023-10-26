<template>
  <div>
    <h1>Cadastrar Vendedor</h1>
    <form @submit.prevent="cadastrarVendedor">
    <div class="input-group">
      <label for="nome">Nome</label>
      <input type="text" v-model="nome" required><br>

      <label for="email">E-mail</label>
      <input type="email" v-model="email" required><br>
    </div>
    
    <div class="button-center">
      <button type="submit" class="custom-button">Cadastrar Vendedor</button>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nome: '',
      email: ''
    };
  },
  methods: {
    cadastrarVendedor() {
      // Obtenha o token de autenticação do localStorage
      const token = localStorage.getItem('token');

      const data = {
        nome: this.nome,
        email: this.email
      };

      axios.post('http://localhost:80/api/vendedor/cadastrar', data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('Vendedor cadastrado com sucesso:', response.data);
          // Limpar campos do formulário após o cadastro bem-sucedido, se necessário
          this.nome = '';
          this.email = '';
        })
        .catch(error => {
          console.error('Erro ao cadastrar vendedor:', error);
        });
    }
  }
};
</script>