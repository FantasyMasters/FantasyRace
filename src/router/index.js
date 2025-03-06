import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import YearsView from '../views/YearsView.vue';
import QuestionsView from '../views/QuestionsView.vue';
import GuidesView from '../views/GuidesView.vue';
import LoginView from '../views/LoginView.vue';
import UserProfileView from '@/views/UserProfileView.vue';
import ClassificationView from '../views/ClassificationView.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/years', component: YearsView },
  { path: '/questions', component: QuestionsView },
  {path: '/guides', component: GuidesView},
  { path: '/login', component: LoginView },
  {path: '/classification', component: ClassificationView},
  {path: '/user-profile', component: UserProfileView}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

