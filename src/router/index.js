import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import YearsView from '../views/YearsView.vue';
import RacesView from '../views/RacesView.vue';
import ConstructorsView from '../views/ConstructorsView.vue';
import DriversView from '../views/DriversView.vue';
import ResultsView from '../views/ResultsView.vue';
import QuestionsView from '../views/QuestionsGuidesView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/years', component: YearsView },
  { path: '/races', component: RacesView },
  { path: '/constructors', component: ConstructorsView },
  { path: '/drivers', component: DriversView },
  { path: '/results', component: ResultsView },
  { path: '/questions', component: QuestionsView }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

