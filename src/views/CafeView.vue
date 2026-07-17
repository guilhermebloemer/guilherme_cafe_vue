<template>
  <main class="page-content">
    <h2><i class="fa-solid fa-circle-dot main-icon"></i> {{ titulo }}</h2>

    <div class="lista-cafes">
      <div v-for="cafe in cafes" :key="cafe.id" class="cafe-card">
        <div class="info-esquerda">
          <div class="bean-box">
            <i class="fa-solid fa-seedling"></i>
          </div>
          <div class="textos">
            <h3>{{ cafe.nome }}</h3>
            <p>Origem: {{ cafe.local }}</p>
          </div>
        </div>
        <router-link to="/avaliar" class="btn-avaliar">Avaliar</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const titulo = ref('Cafés Participantes')

const cafes = ref([
  { id: 1, nome: 'Bourbon Amarelo', local: 'Minas Gerais' },
  { id: 2, nome: 'Catuaí Vermelho', local: 'Paraná' },
  { id: 3, nome: 'Arara', local: 'Espírito Santo' },
  { id: 4, nome: 'Mundo Novo', local: 'Bahia' }
])
</script>

<style scoped>
.page-content {
  background: #ffffff;
  padding: 40px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(60, 36, 21, 0.03);
}

h2 {
  font-size: 22px;
  font-weight: 800;
  color: #3C2415;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.main-icon {
  color: #65432A;
  font-size: 20px;
}

.lista-cafes {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.cafe-card {
  background: #ffffff;
  border: 1px solid #EAE3D8;
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-esquerda {
  display: flex;
  align-items: center;
  gap: 20px;
}

.bean-box {
  background: #F4EFEA;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.bean-box i {
  font-size: 20px;
  color: #8B5E3C;
}

.textos h3 {
  font-size: 16px;
  font-weight: 800;
  color: #3C2415;
  margin: 0 0 4px 0;
}

.textos p {
  margin: 0;
  color: #7A6A5A;
  font-size: 13px;
}

.btn-avaliar {
  border: 1px solid #65432A;
  color: #65432A;
  background: #ffffff;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-avaliar:hover {
  background: #65432A;
  color: #ffffff;
}
</style>