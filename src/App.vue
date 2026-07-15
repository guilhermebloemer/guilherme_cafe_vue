<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="cabecalho">
    <nav class="barra-navegacao">
      <span class="logo">
        <span class="logo-emoji">☕</span> Coffee<span class="logo-destaque">Quality</span>
      </span>

      <ul class="links-navegacao">
        <li><RouterLink to="/" active-class="link-ativo">Início</RouterLink></li>
        <li><RouterLink to="/Cafe" active-class="link-ativo">Cafés</RouterLink></li>
        <li><RouterLink to="/Avaliacao" active-class="link-ativo">Avaliar</RouterLink></li>
        <li><RouterLink to="/Ranking" active-class="link-ativo">Ranking</RouterLink></li>
      </ul>
    </nav>
  </header>

  <div class="conteudo-principal">
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #fdfbf7;
  color: #2c1a11;
}
</style>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

  .cabecalho {
    font-family: 'Plus Jakarta Sans', sans-serif;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(253, 251, 247, 0.9);
    box-shadow: 0 4px 20px rgba(44, 26, 17, 0.03);
    transition: all 0.3s ease;
  }

  .barra-navegacao {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.25rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: #2c1a11;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-emoji {
    font-size: 1.6rem;
  }

  .logo-destaque {
    color: #8c5a3c;
    font-weight: 800;
  }

  .links-navegacao {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    gap: 1.5rem;
  }

  .links-navegacao a {
    text-decoration: none;
    color: #6e5a4f;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.5rem 0.2rem;
    position: relative;
    transition: color 0.2s ease;
  }

  .links-navegacao a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #8c5a3c;
    transition: width 0.25s ease;
    border-radius: 2px;
  }

  .links-navegacao a:hover {
    color: #2c1a11;
  }

  .links-navegacao a:hover::after {
    width: 100%;
  }

  .links-navegacao .link-ativo {
    color: #8c5a3c;
    font-weight: 700;
  }

  .links-navegacao .link-ativo::after {
    width: 100%;
    background-color: #8c5a3c;
  }

  .conteudo-principal {
    margin-top: 2rem;
  }
</style>
