<template>
  <main>
    <div class="hero">
      <div class="hero-texto">
        <h1>Camp do <span class="destaque">Café</span></h1>
        <p>Torneio de café doce</p>

        <button class="btn-participar">
          <router-link to="/CafeParticipantes">Ver Participantes</router-link>
        </button>
      </div>
      <div class="hero-imagem">
        <img src="/src/assets/img/cafe.jpeg" alt="Imagem de café" />
      </div>
    </div>
  </main>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');

  .hero {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: linear-gradient(135deg, #fdfbf7, #f5efe6);
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
  }

  .hero-texto {
    max-width: 500px;
  }

  .hero-texto h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 800;
    color: #2c1a11;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .destaque {
    color: #8c5a3c;
  }

  .hero-texto p {
    font-size: 1.25rem;
    color: #6e5a4f;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .btn-participar {
    background-color: #5c3a21;
    border: none;
    border-radius: 50px;
    padding: 0;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-participar a {
    display: inline-block;
    padding: 1rem 2.5rem;
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
  }

  .btn-participar:hover {
    background-color: #8c5a3c;
    transform: translateY(-3px);
  }

  .btn-participar:active {
    transform: translateY(-1px);
  }

  .hero-imagem {
    max-width: 450px;
    width: 100%;
    animation: flutuar 6s ease-in-out infinite;
  }

  .hero-imagem img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    border: 4px solid #ffffff;
    display: block;
  }

  
  @media (min-width: 768px) {
    .hero {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      padding: 4rem;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-texto h1 {
      font-size: 4rem;
    }
  }
</style>
