<template>
    <div class="d-flex flex-column justify-content-center align-items-center col-8 col-lg-12">
      <form class="w-100" method="POST">
        <label class="mb-3 w-100" for="user_id">
            <input class="w-100 rounded" id="user_id"
                   type="text" placeholder="E-Mail"
                   v-model="email">
        </label>
        <label class="mb-3 w-100" for="user_password">
            <input class="w-100 rounded" id="user_password"
                   type="password" placeholder="Password"
                   v-model="password">
        </label>
        <input type="button" class="mb-3 w-100 rounded p-3" value="Login"
               @click="login()">
      </form>
      <button class="mb-3 w-100 rounded p-2">Facebook</button>
      <button class="mb-3 w-100 rounded p-2">Google</button>
      <p>
        <router-link to="/register" class="text-white mb-3" @click="login()">
          Create a new account
        </router-link>
      </p>
    </div>
</template>

<script>
// import member from '../assets/API-JSON/Member.json';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    // login() {
    //   console.log(document.cookie);
    //   if (document.cookie) {
    //     console.log(`你已經登入了，${document.cookie}`);
    //     return;
    //   }
    //   if (this.email && this.password) {
    //     member.forEach((item) => {
    //       if (item.email === this.email) {
    //         if (item.password === this.password) {
    //           console.log(`${item.name}登入`);
    //           document.cookie = `ADATAmember=${item.name};Max-age=86400;`;
    //           document.cookie = `email=${item.email};Max-age=86400;`;
    //         } else {
    //           console.log('密碼錯誤,請再試一次');
    //         }
    //       }
    //     });
    //   } else {
    //     console.log('請填上信箱及密碼');
    //   }
    // },
  },
  created() {
  },
};
</script>

<style lang="scss">
  a{
    // cursor: pointer;
  }
</style>
