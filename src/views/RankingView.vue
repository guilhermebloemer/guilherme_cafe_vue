<template>
  <main class="ranking-layout">
    <section class="ranking-section">
      <h2><i class="fa-solid fa-trophy"></i> {{ titulo }}</h2>
      <p class="descricao-sub">{{ descricao }}</p>
      
      <div class="ranking-container">
        <div v-for="(cafe, index) in cafesOrdenados" :key="cafe.id" class="ranking-item">
          <div class="posicao-info">
            <div class="podio-medalha">
              <i v-if="index === 0" class="fa-solid fa-medal ouro"></i>
              <i v-else-if="index === 1" class="fa-solid fa-medal prata"></i>
              <i v-else-if="index === 2" class="fa-solid fa-medal bronze"></i>
            </div>
            <span class="posicao-numero">{{ index + 1 }}º</span>
            <div>
              <h3>{{ cafe.nome }}</h3>
              <p>{{ cafe.local }}</p>
            </div>
          </div>
          <div class="media-ranking">{{ cafe.nota.toFixed(1) }}</div>
        </div>
      </div>
    </section>

    <aside class="metodologia-section">
      <div class="metodologia-card">
        <div class="metodologia-header">
          <i class="fa-solid fa-bullseye"></i>
          <h3>Metodologia</h3>
        </div>
        <p class="metodologia-texto">
          As avaliações são baseadas nos critérios da metodologia SCA:
        </p>
        <ul>
          <li>Aroma</li>
          <li>Doçura</li>
          <li>Acidez</li>
          <li>Corpo</li>
          <li>Finalização</li>
        </ul>
        <p class="metodologia-rodape">
          Notas de 0 a 10 para cada critério. A média final é calculada pela média aritmética dos critérios.
        </p>
      </div>
    </aside>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

const titulo = ref('Ranking Geral')
const descricao = ref('Veja os melhores participantes do torneio!')

const cafes = ref([
  { id: 4, nome: 'Café Etíope', local: 'Chifre da África', nota: 9.8 },
  { id: 1, nome: 'Café Árabe', local: 'Abu Dhabi', nota: 9.5 },
  { id: 3, nome: 'Café Colombiano', local: 'Bogotá', nota: 9.2 },
  { id: 2, nome: 'Café Brasileiro', local: 'Lençóis Maranhenses', nota: 8.7 }
])

const cafesOrdenados = computed(() => {
  return [...cafes.value].sort((a, b) => b.nota - a.nota)
})
</script>

<style scoped>
.ranking-layout {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: grid;
  grid-template-columns: 1.7fr 1.3fr;
  gap: 20px;
}

.ranking-section, .metodologia-section {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(60, 36, 21, 0.03);
}

h2 {
  font-size: 20px;
  font-weight: 700;
  color: #3C2415;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
}

h2 i {
  color: #65432A;
}

.descricao-sub {
  color: #7A6A5A;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: -15px;
}

.ranking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F4EFEA;
  padding: 16px 0;
}

.ranking-item:last-child {
  border-bottom: none;
}

.posicao-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.podio-medalha {
  font-size: 18px;
  width: 30px;
  text-align: center;
}

.podio-medalha .ouro { color: #D4AF37; }
.podio-medalha .prata { color: #AAA9AD; }
.podio-medalha .bronze { color: #CD7F32; }

.posicao-numero {
  font-weight: 800;
  width: 20px;
  color: #6E5A4F;
}

.ranking-item h3 {
  font-size: 15px;
  margin: 0;
  color: #3C2415;
}

.ranking-item p {
  margin: 0;
  color: #7A6A5A;
  font-size: 13px;
}

.media-ranking {
  font-weight: 800;
  font-size: 16px;
  color: #3C2415;
}

.metodologia-card {
  background: #F9F6F2;
  padding: 20px;
  border-radius: 8px;
}

.metodologia-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.metodologia-header i {
  font-size: 20px;
  color: #65432A;
}

.metodologia-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #3C2415;
}

.metodologia-texto {
  color: #7A6A5A;
  font-size: 13px;
  line-height: 1.5;
}

.metodologia-card ul {
  list-style: none;
  padding-left: 5px;
  margin: 15px 0;
}

.metodologia-card ul li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #6E5A4F;
}

.metodologia-card ul li::before {
  content: "• ";
  color: #8B5E3C;
  font-weight: bold;
  margin-right: 5px;
}

.metodologia-rodape {
  color: #7A6A5A;
  font-size: 12px;
  line-height: 1.5;
  border-top: 1px dashed #EAE3D8;
  padding-top: 12px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .ranking-layout {
    grid-template-columns: 1fr;
  }
}
</style>