<template>
  <div>
    <h1>Editar Vendedor</h1>

    <div v-if="vendedores.length > 0">
    <div class="input-group">
      <label for="vendedorId">Selecione o ID do Vendedor</label>
      <select v-model="vendedorId">
        <option v-for="vendedor in vendedores" :key="vendedor.id" :value="vendedor.id">
          {{ vendedor.id }}
        </option>
      </select>

      <br><br>

      <label for="nome">Nome</label>
      <input type="text" v-model="nome" required><br>

      <label for="email">E-mail</label>
      <input type="email" v-model="email" required><br>
    </div>
      <div class="button-center">
        <button @click="editarVendedor" class="custom-button">Editar Vendedor</button>
      </div>
    </div>
    
    <div v-else>
      Carregando vendedores...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vendedorId: null,
      nome: '',
      email: '',
      vendedores: [] // Esta lista deve ser populada com os vendedores disponíveis
    };
  },
  mounted() {
    this.carregarVendedores();
  },
  methods: {
    carregarVendedores() {
      // Obtenha o token de autenticação do localStorage
      const token = localStorage.getItem('token');

      axios.get('http://localhost:80/api/listarVendedores', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          this.vendedores = response.data;
        })
        .catch(error => {
          console.error('Erro ao obter vendedores:', error);
        });
    },
    editarVendedor() {
      // Obtenha o token de autenticação do localStorage
      const token = localStorage.getItem('token');

      const data = {
        id: this.vendedorId,
        nome: this.nome,
        email: this.email
      };

      axios.put(`http://localhost:80/api/vendedor/editar/${this.vendedorId}`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('Vendedor editado com sucesso:', response.data);
          // Limpar campos do formulário após a edição bem-sucedida, se necessário
          this.vendedorId = null;
          this.nome = '';
          this.email = '';
        })
        .catch(error => {
          console.error('Erro ao editar vendedor:', error);
        });
    }
  }
};
</script>