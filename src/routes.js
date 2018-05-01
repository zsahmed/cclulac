import Main from './components/Main.vue';
import About from './components/About.vue';
import YouthCouncil from './components/YouthCouncil.vue';

export const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path:'/youth-council', component: YouthCouncil }
];
