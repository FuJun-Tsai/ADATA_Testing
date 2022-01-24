import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Prize from '../views/Prize.vue';
import Winner from '../views/Winner.vue';

// const lang = ['tw', 'jp', 'en', 'de'];
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'ADATA VIP PARTY 網路活動_威剛科技',
      keyWords: 'ADATA, Member VIP Party, Parrot Bebop Drone, 1TB HDD, iPhone OTG, Android 32GB OTG, 網路活動',
    },
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/prizes',
    name: 'Prize',
    component: Prize,
  },
  {
    path: '/winners',
    name: 'Winner',
    component: Winner,
  },
];

// console.log(navigator.language);
// console.log(lang);

// fetch('../assets/lang/tw.php').then((res) => {
//   console.log(res);
//   return res;
// }).then((res) => {
//   console.log(res.json());
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
