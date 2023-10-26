<template>
  <div>
    <h1>Listar Vendas</h1>
    <ul v-if="vendas.length > 0">
      <li v-for="venda in vendas" :key="venda.id">
        ID: {{ venda.id }} - Vendedor ID: {{ venda.vendedor_id }} - Valor: {{ venda.valor }}
      </li>
    </ul>
    <div v-else>
      Nenhuma venda encontrada.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vendas: []
    };
  },
  mounted() {
    // Obtenha o token de autenticação do localStorage
    const token = localStorage.getItem('token');

    // Fazer a requisição para obter a lista de vendas ao iniciar o componente
    fetch('http://localhost:80/api/venda/listar', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.vendas = data;
      })
      .catch(error => {
        console.error('Erro ao obter vendas:', error);
      });
  }
};
</script>