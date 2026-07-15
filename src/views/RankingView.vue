<template>
  <main>
    <h1>{{ titulo }}</h1>
    <p>{{ descricao }}</p>


      <ul>
        <li>Café Arabe - Abu dhabi (Nota: 9.5)</li>
        <li>Café Brasileiro - Lençois Maranhenses (Nota: 8.7)</li>
        <li>Café Colombiano - Bogotá (Nota: 9.2)</li>
        <li>Café Etíope - Chifre da Àfrica (Nota: 9.8)</li>
      </ul>
    <ul>
      <li v-for="cafe in cafesOrdenados" :key="cafe.id">
       Nome: {{ cafe.nome }}
       Local: {{ cafe.local }}
       Nota: {{ cafe.nota }}
      </li>
    </ul>
  </main>
</template>
<script setup>
import { computed, ref } from 'vue'

const titulo = ref('Ranking')
const descricao = ref('Veja os melhores participantes do torneio!')

const cafes = ([
  { id: 1, nome: 'Café Arabe', local: 'Abu dhabi', nota: 9.5 },
  { id: 2, nome: 'Café Brasileiro', local: 'Lençois Maranhenses', nota: 8.7 },
  { id: 3, nome: 'Café Colombiano', local: 'Loja Bogotá', nota: 9.2 },
  { id: 4, nome: 'Café Etíope', local: 'Loja Chifre da Àfrica', nota: 9.8 },
]);
const cafesOrdenados = computed(() => {
  return [ ...cafes].sort((a, b) => b.nota - a.nota);
});
</script>
<style scoped></style>
