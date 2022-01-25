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
               @click="formSubmit()">
      </form>
      <button class="mb-3 w-100 rounded p-2">Facebook</button>
      <button class="mb-3 w-100 rounded p-2">Google</button>
      <p>
        <router-link to="/register" class="text-white mb-3">
          Create a new account
        </router-link>
      </p>
    </div>
</template>

<script>
import member from '../assets/API-JSON/Member.json';

export default {
  props: {
    islog: Boolean,
  },
  inject: ['emitter'],
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    formSubmit() {
      if (this.islog === true) {
        alert('已完成登入');
        return;
      }
      for (let i = 0; i < member.length; i += 1) {
        if (this.email === '' || this.password === '') {
          alert('填入資料');
          return;
        }
        if (this.email === member[i].email && this.password === member[i].password) {
          this.login(member[i]);
          alert('用戶登入');
          return;
        }
      }
      alert('帳號密碼錯誤');
    },
    login(data) {
      const { email, password, name } = data;
      this.emitter.emit('emit-log', { email, password, name });
    },
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
