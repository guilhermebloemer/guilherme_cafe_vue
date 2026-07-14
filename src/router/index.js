import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ranking from '../views/RankingView.vue'
import Avaliacao from '../views/AvaliacaoView.vue'
import Cafe from '../views/CafeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking,
    },
    {
      path: '/Avaliacao',
      name: 'Avaliacao',
      component: Avaliacao,
    },
    {
      path: '/Cafe',
      name: 'Cafe',
      component: Cafe,
    }
  ],
})

export default router
