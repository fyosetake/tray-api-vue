<template>
  <div>
    <h1>Registrar Usuário</h1>
    <form @submit.prevent="registrarUsuario">
      <div class="input-group">
        <label for="nome">Nome</label>
        <input type="text" v-model="nome" required><br>

        <label for="email">E-mail</label>
        <input type="email" v-model="email" required><br>

        <label for="senha">Senha</label>
        <input placeholder="Mínimo 6 caracteres" type="password" v-model="senha" required><br>
      </div>

      <div class="button-center">
        <button type="submit" class="custom-button">Registrar</button>
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
      email: '',
      senha: ''
    };
  },
  methods: {
    registrarUsuario() {
      const usuarioData = {
        name: this.nome,
        email: this.email,
        password: this.senha
      };

      axios.post('http://localhost:80/api/registrar', usuarioData)
        .then(response => {
          console.log('Usuário registrado com sucesso:', response.data);
          this.$router.push('/autenticar-usuario');
        })
        .catch(error => {
          console.error('Erro ao registrar usuário:', error);
        });
    }
  }
};
</script>