import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Prize from '../views/Prize.vue';
import Winner from '../views/Winner.vue';
import Register from '../views/Register.vue';
import Member from '../views/Member.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'ADATA VIP PARTY 網路活動_威剛科技',
      keyWords: 'ADATA, Member VIP Party, Parrot Bebop Drone, 1TB HDD, iPhone OTG, Android 32GB OTG, 網路活動',
      description: 'ADATA VIP Party, 僅限威剛會員, 只要更新您的會員資料就有機會贏得超酷的禮物喔!',
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
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
    children: [
      {
        path: 'info',
        component: () => import('../views/Member_info.vue'),
      },
      {
        path: 'prize',
        component: () => import('../views/Member_prize.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
