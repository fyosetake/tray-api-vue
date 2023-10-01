<template>
  <div>
    <h1>Excluir Vendedor</h1>
    <div class="input-group">
      <label for="vendedorId">Selecione o ID do Vendedor</label>
      <select v-model="vendedorId">
        <option v-for="vendedor in vendedores" :key="vendedor.id" :value="vendedor.id">
          {{ vendedor.id }}
        </option>
      </select>

      <br><br>

      <div class="button-center">
        <button @click="excluirVendedor" class="custom-button">Excluir Vendedor</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vendedorId: null,
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
    excluirVendedor() {
      // Obtenha o token de autenticação do localStorage
      const token = localStorage.getItem('token');

      axios.delete(`http://localhost:80/api/deletarVendedor/${this.vendedorId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('Vendedor excluído com sucesso:', response.data);
          // Limpar campo do ID do vendedor após a exclusão bem-sucedida, se necessário
          this.vendedorId = null;
        })
        .catch(error => {
          console.error('Erro ao excluir vendedor:', error);
        });
    }
  }
};
</script>