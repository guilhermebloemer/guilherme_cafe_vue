<template>
  <main class="page-content">
    <div class="hero-section">
      <div class="hero-icon">
        <i class="fa-solid fa-mug-hot"></i>
      </div>
      <h1>{{ titulo }}</h1>
      <p class="subtitulo">{{ subtitulo }}</p>
      <p class="descricao">{{ descricao }}</p>

      <div class="stats-container">
        <div class="stat-box">
          <div class="stat-icon-wrapper b-users">
            <i class="fa-solid fa-users"></i>
          </div>
          <div class="stat-info">
            <p>Cafés Participantes</p>
            <div class="numero">{{ totalCafes }}</div>
          </div>
        </div>
        
        <div class="stat-box">
          <div class="stat-icon-wrapper b-eval">
            <i class="fa-solid fa-clipboard-list"></i>
          </div>
          <div class="stat-info">
            <p>Avaliações Registradas</p>
            <div class="numero">{{ totalAvaliacoes }}</div>
          </div>
        </div>
      </div>

      <router-link to="/cafes" class="btn-principal">
        <i class="fa-solid fa-mug-hot"></i> Ver Cafés
      </router-link>
    </div>

    <section class="about-section">
      <div class="about-grid">
        <div class="about-illustration">
          <i class="fa-solid fa-seedling leaf-big"></i>
        </div>
        <div class="about-text">
          <h3>Sobre o Campeonato</h3>
          <p>Este campeonato tem como objetivo promover a qualidade dos nossos cafés através de avaliações sensoriais baseadas nos critérios da metodologia SCA.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const titulo = ref('COFFEE QUALITY CHALLENGE')
const subtitulo = ref('Campeonato de Avaliação Sensorial de Cafés Especiais')
const descricao = ref('Avalie, compare e descubra os melhores cafés através dos seus sentidos.')

const totalCafes = ref(4)
const totalAvaliacoes = ref(0)
</script>

<style scoped>
.page-content {
  background: #ffffff;
  padding: 40px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(60, 36, 21, 0.03);
}

.hero-section {
  text-align: center;
  padding: 20px 0 40px;
}

.hero-icon {
  font-size: 64px;
  color: #3C2415;
  margin-bottom: 20px;
}

h1 {
  font-size: 28px;
  font-weight: 800;
  color: #3C2415;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.subtitulo {
  font-size: 15px;
  margin-bottom: 24px;
  font-weight: 600;
  color: #6E5A4F;
}

.descricao {
  color: #7A6A5A;
  max-width: 460px;
  margin: 0 auto 35px;
  font-size: 14px;
  line-height: 1.5;
}

.stats-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  max-width: 540px;
  margin: 0 auto 35px;
}

.stat-box {
  background: #FDFBF7;
  border: 1px solid #EAE3D8;
  border-radius: 12px;
  padding: 20px;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
}

.stat-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.b-users { background: #F5EFE9; color: #65432A; }
.b-eval { background: #E9ECE5; color: #4A5D4E; }
.b-users i { color: #65432A; }
.b-eval i { color: #4A5D4E; }

.stat-info p {
  font-size: 12px;
  font-weight: 700;
  color: #3C2415;
  margin: 0 0 4px 0;
}

.stat-info .numero {
  font-size: 26px;
  font-weight: 800;
  color: #3C2415;
  line-height: 1;
}

.btn-principal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #65432A;
  color: #ffffff;
  border: none;
  padding: 14px 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
}

.btn-principal:hover {
  background: #523520;
}

.about-section {
  background: #F4EFEA;
  border-radius: 12px;
  padding: 30px 40px;
  margin-top: 40px;
  text-align: left;
}

.about-grid {
  display: flex;
  align-items: center;
  gap: 24px;
}

.leaf-big {
  font-size: 40px;
  color: #65432A;
}

.about-text h3 {
  font-size: 15px;
  font-weight: 800;
  color: #3C2415;
  margin: 0 0 6px 0;
}

.about-text p {
  color: #6E5A4F;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 600px) {
  .stats-container, .about-grid {
    flex-direction: column;
  }
  .stat-box { width: 100%; }
}
</style>