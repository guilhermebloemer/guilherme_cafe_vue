<template>
  <header>
    <div class="logo"><i class="fa-solid fa-mug-hot"></i> COFFEE QUALITY CHALLENGE</div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cafes">Cafés</router-link>
      <router-link to="/avaliar">Avaliar</router-link>
      <router-link to="/ranking">Ranking</router-link>
    </nav>
  </header>

  <RouterView />

  <footer>
    <div class="footer-grid">
      <div class="footer-item">
        <div class="icone"><i class="fa-solid fa-bullseye"></i></div>
        <div>
          <h4>Objetivo</h4>
          <p>Avaliar e reconhecer os melhores cafés.</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="icone"><i class="fa-solid fa-mug-hot"></i></div>
        <div>
          <h4>Avalie</h4>
          <p>Use seus sentidos para dar notas justas.</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="icone"><i class="fa-solid fa-chart-simple"></i></div>
        <div>
          <h4>Compare</h4>
          <p>Veja o ranking e descubra os destaques.</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="icone"><i class="fa-solid fa-heart"></i></div>
        <div>
          <h4>Valorize</h4>
          <p>Incentive a qualidade e o trabalho dos produtores.</p>
        </div>
      </div>
    </div>
    <div class="footer-quote">
      <span>"Cada xícara carrega uma história. Vamos descobrir as melhores?"</span>
      <i class="fa-solid fa-mug-hot"></i>
    </div>
  </footer>
</template>

<style>
header {
  background: #FFF;
  padding: 20px 30px;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EAE3D8;
}

.logo {
  font-size: 14px;
  font-weight: 800;
  color: #3C2415;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo i, .footer-item i {
  color: #65432A;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #6E5A4F;
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 4px;
  transition: color 0.2s;
}

nav a:hover, nav a.router-link-active {
  color: #3C2415;
  border-bottom: 3px solid #8B5E3C; 
}

footer {
  background: #F4EFEA;
  padding: 35px 30px;
  border-radius: 0 0 12px 12px;
  margin-top: 20px;
  width: 100%;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 25px;
}

.footer-item {
  display: flex;
  gap: 12px;
}

.footer-item h4 {
  font-size: 13px;
  margin-bottom: 4px;
  color: #3C2415;
}

.footer-item p {
  font-size: 12px;
  color: #6E5A4F;
  line-height: 1.4;
}

.footer-quote {
  background: #3C2415; 
  color: #FFF;
  padding: 16px 24px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
}

.footer-quote i {
  color: #FFF;
  font-size: 16px;
}
</style>