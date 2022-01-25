<template>
    <div class="container">
        <div class="row">
            <div class="form mx-auto mb-3 py-5">
                <section class="text-white text-center">
                    <h2 class="mb-4 letter-space4">會員註冊</h2>
                    <label class="w-100 mb-4 letter-space4" for="email">
                        信箱：
                        <input v-model="email" id="email" type="text">
                    </label>
                    <label class="w-100 mb-4 letter-space4" for="name">
                        名稱：
                        <input v-model="name" id="name" type="text">
                    </label>
                    <label class="w-100 mb-4 letter-space4" for="password">
                        密碼：
                        <input v-model="password" id="password" type="password">
                    </label>
                    <div class="d-flex m-auto justify-content-around">
                        <button class="btn bg-danger text-white"
                                >回上一頁</button>
                        <button class="btn bg-primary text-white" @click="formSubmit">送出</button>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div v-if="lightbox === true"
         @click="lightbox = false"
         class="gray-back position-fixed top-0 start-0">
      <div class="bg-light lightbox position-absolute top-50 start-50 translate-middle
                  d-flex flex-column justify-content-around align-items-center rounded">
        <img class="close position-absolute top-0 end-0" alt=""
             src="../assets/images/lightbox/close.png"
             @click="lightbox = false">
        <h2 class="text-center">請完成驗證</h2>
        <button class="btn rounded bg-primary text-white"
                @click="verify()">驗證</button>
      </div>
    </div>
</template>

<script>
import members from '../assets/API-JSON/Member.json';
// import lightbox from '../components/Lightbox.vue';

export default {
  // components: {
  //   lightbox,
  // },
  emits: [
    'accepted',
  ],
  data() {
    return {
      email: '',
      name: '',
      password: '',
      lightbox: false,
    };
  },
  methods: {
    formSubmit() {
      for (let i = 0; i < members.length; i += 1) {
        if (this.email === '' || this.name === '' || this.password === '') {
          alert('資料請填完整');
          return;
        }
        if (this.email === members[i].email) {
          alert('此帳號已被註冊');
          return;
        }
        this.lightbox = true;
        this.registed();
        // alert('註冊成功，進一步完成驗證');
      }
    },
    registed() {
      const created = new Date().getTime();
      this.$emit('emit-reg', this.email, this.name, this.password, created);
    },
    verify() {
      this.$emit('emit-ver');
    },
  },
  created() {
  },
};

</script>

<style lang="scss">
    .form{
        max-width: 300px;
    }
    .btn{
        min-width: 120px;
    }
    .lightbox{
      width: 300px;
      height: 300px;
    }
    .gray-back{
      background: #80808077;
      height: 100vh;
      width: 100%;
    }
    .close{
      width: 40px;
      transform: translate(-6px,6px);
    }
</style>
