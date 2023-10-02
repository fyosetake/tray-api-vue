<template>
  <div>
    <h1>Enviar E-mail para Vendedor</h1>
    <div class="input-group">
      <label for="vendedorId">Selecione o ID do Vendedor</label>
      <select v-model="vendedorId">
        <option v-for="vendedor in vendedores" :key="vendedor.id" :value="vendedor.id">
          {{ vendedor.id }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <label for="data">Selecione a Data</label>
      <input type="date" v-model="data">
    </div>
      <div class="button-center">
        <button @click="enviarEmail" class="custom-button">Enviar E-mail</button>
      </div>
    <div v-if="resultadoEmail">
      E-mail enviado com sucesso para o vendedor ID: {{ vendedorId }} na data: {{ data }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vendedorId: null,
      data: null,
      vendedores: [],
      resultadoEmail: null
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
    enviarEmail() {
      // Obtenha o token de autenticação do localStorage
      const token = localStorage.getItem('token');

      axios.post('http://localhost:80/api/enviarEmail', {
        data: this.data,
        vendedor_id: this.vendedorId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          this.resultadoEmail = response.data.message;

          // Limpar os dados após o envio do e-mail
          this.vendedorId = null;
          this.data = null;
        })
        .catch(error => {
          console.error('Erro ao enviar e-mail:', error);
        });
    }
  }
};
</script>