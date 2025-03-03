import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import YearsView from '../views/YearsView.vue';
import RacesView from '../views/RacesView.vue';
import ConstructorsView from '../views/ConstructorsView.vue';
import DriversView from '../views/DriversView.vue';
import ResultsView from '../views/ResultsView.vue';
import QuestionsView from '../views/QuestionsView.vue';
import GuidesView from '../views/GuidesView.vue';
import LoginView from '../views/LoginView.vue';
import ClassificationView from '@/views/ClassificationView.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/years', component: YearsView },
  { path: '/races', component: RacesView },
  { path: '/constructors', component: ConstructorsView },
  { path: '/drivers', component: DriversView },
  { path: '/results', component: ResultsView },
  { path: '/questions', component: QuestionsView },
  {path: '/guides', component: GuidesView},
  { path: '/login', component: LoginView },
  {path: '/Classification', component: ClassificationView}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

