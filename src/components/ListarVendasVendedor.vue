<template>
  <div>
    <h1>Listar Vendas do Vendedor {{ vendedorId }}</h1>
    <div class="input-group">
      <label for="vendedorId">Selecione o ID do Vendedor</label>
      <select v-model="vendedorId">
        <option v-for="vendedor in vendedores" :key="vendedor.id" :value="vendedor.id">
          {{ vendedor.id }}
        </option>
      </select>
    </div>

    <ul v-if="vendas.length > 0">
      <li v-for="venda in vendas" :key="venda.id">
        ID: {{ venda.id }} - Valor: {{ venda.valor }} - Data: {{ venda.data }}
      </li>
    </ul>
    <div v-else>
      Nenhuma venda encontrada para este vendedor.
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vendedorId: null,
      vendas: [],
      vendedores: []
    };
  },
  mounted() {
    this.carregarVendedores();
  },
  watch: {
    vendedorId: {
      immediate: true,
      handler(newVendedorId) {
        if (newVendedorId) {
          this.carregarVendas(newVendedorId);
        }
      }
    }
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
    carregarVendas(vendedorId) {
      // Obtenha o token de autenticação do localStorage
      const token = localStorage.getItem('token');

      axios.get(`http://localhost:80/api/venda/listar/vendedor/${vendedorId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          this.vendas = response.data;
        })
        .catch(error => {
          console.error('Erro ao obter vendas:', error);
        });
    }
  }
};
</script>