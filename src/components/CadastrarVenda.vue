<template>
  <div>
    <h1>Cadastrar Venda</h1>
    <form @submit.prevent="cadastrarVenda">
    <div class="input-group">
      <label for="vendedorId">ID do Vendedor</label>
      <input type="number" v-model="vendedorId" required><br>

      <label for="valor">Valor</label>
      <input type="number" v-model="valor" required><br>

      <label for="data">Data</label>
      <input type="date" v-model="data" required><br>
    </div>
    <div class="button-center">
      <button type="submit" class="custom-button">Cadastrar Venda</button>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vendedorId: null,
      valor: null,
      data: null
    };
  },
  methods: {
    cadastrarVenda() {
      // Obtenha o token de autenticação do localStorage
      const token = localStorage.getItem('token');

      const vendaData = {
        vendedor_id: this.vendedorId,
        valor: this.valor,
        data: this.data
      };

      axios.post('http://localhost:80/api/venda/cadastrar', vendaData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('Venda cadastrada com sucesso:', response.data);
          // Limpar campos do formulário após o cadastro bem-sucedido, se necessário
          this.vendedorId = null;
          this.valor = null;
          this.data = null;
        })
        .catch(error => {
          console.error('Erro ao cadastrar venda:', error);
        });
    }
  }
};
</script>