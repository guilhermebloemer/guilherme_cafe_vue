<template>
  <main class="page-content">
    <h2><i class="fa-solid fa-pen-key fa-pen"></i> Nova Avaliação</h2>

    <div class="formulario-card">
      <div class="campo-grupo full-width">
        <label for="cafe">Café</label>
        <div class="select-wrapper">
          <select id="cafe" v-model="cafeSelecionado">
            <option v-for="cafe in cafes" :key="cafe.id" :value="cafe.nome">
              {{ cafe.nome }}
            </option>
          </select>
        </div>
      </div>

      <div class="row-inputs">
        <div class="campo-grupo">
          <label for="aroma">Aroma</label>
          <input type="text" id="aroma" v-model.number="notas.aroma">
        </div>
        <div class="campo-grupo">
          <label for="docura">Doçura</label>
          <input type="text" id="docura" v-model.number="notas.docura">
        </div>
      </div>

      <div class="row-inputs">
        <div class="campo-grupo">
          <label for="acidez">Acidez</label>
          <input type="text" id="acidez" v-model.number="notas.acidez">
        </div>
        <div class="campo-grupo">
          <label for="corpo">Corpo</label>
          <input type="text" id="corpo" v-model.number="notas.corpo">
        </div>
      </div>

      <div class="row-inputs">
        <div class="campo-grupo">
          <label for="finalizacao">Finalização</label>
          <input type="text" id="finalizacao" v-model.number="notas.finalizacao">
        </div>
        <div class="campo-grupo">
          <div class="media-box">
            <span class="media-lbl">Média Atual</span>
            <div class="numero-media">{{ mediaCalculada }}</div>
          </div>
        </div>
      </div>

      <button class="btn-salvar">
        <i class="fa-solid fa-floppy-disk"></i> Salvar Avaliação
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const cafes = ref([
  { id: 1, nome: 'Café Etíope' },
  { id: 2, nome: 'Café Arabe' },
  { id: 3, nome: 'Café Colombiano' },
  { id: 4, nome: 'Café Brasileiro' }
])

const cafeSelecionado = ref('Café Etíope')

const notas = ref({
  aroma: 10,
  docura: 9,
  acidez: 10,
  corpo: 10,
  finalizacao: 10
})

const mediaCalculada = computed(() => {
  const total = notas.value.aroma + notas.value.docura + notas.value.acidez + notas.value.corpo + notas.value.finalizacao
  return (total / 5).toFixed(1)
})
</script>

<style scoped>
.page-content {
  background: #ffffff;
  padding: 40px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(60, 36, 21, 0.03);
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  font-size: 22px;
  font-weight: 800;
  color: #3C2415;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
}

h2 i {
  color: #65432A;
}

.formulario-card {
  display: flex;
  flex-direction: column;
}

.campo-grupo {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.full-width {
  width: 100%;
}

label {
  font-size: 13px;
  font-weight: 700;
  color: #3C2415;
  margin-bottom: 8px;
}

input[type="text"], select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #EAE3D8;
  background: #ffffff;
  border-radius: 8px;
  font-size: 14px;
  color: #3C2415;
  outline: none;
}

.row-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.media-box {
  border: 1px solid #EAE3D8;
  background: #FDFBF7;
  border-radius: 8px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  margin-top: 25px;
}

.media-lbl {
  font-size: 13px;
  font-weight: 700;
  color: #6E5A4F;
}

.numero-media {
  font-size: 20px;
  font-weight: 800;
  color: #3C2415;
}

.btn-salvar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #65432A;
  color: #ffffff;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
}

.btn-salvar:hover {
  background: #523520;
}
</style>