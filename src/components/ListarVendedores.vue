<template>
  <div>
    <h1>Listar Vendedores</h1>
    <ul v-if="vendedores.length > 0">
      <li v-for="vendedor in vendedores" :key="vendedor.id">
        ID: {{ vendedor.id }} - Nome: {{ vendedor.nome }} - Email: {{ vendedor.email }}
      </li>
    </ul>
    <div v-else>
      Nenhum vendedor encontrado.
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vendedores: []
    };
  },
  mounted() {
    // Obtenha o token de autenticação do localStorage
    const token = localStorage.getItem('token');

    // Fazer a requisição para obter a lista de vendedores ao iniciar o componente
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
  }
};
</script>