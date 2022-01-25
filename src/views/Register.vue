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
                                @click="this.$router.go(-1)">回上一頁</button>
                        <button v-if="isLog === false"
                                class="btn bg-primary text-white" @click="formSubmit">送出</button>
                        <button v-if="isLog === true"
                                class="btn bg-primary text-white" @click="OTP">重新驗證</button>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <p class="text-white">OTPcode:{{OTPcode}}</p>
    <div v-if="lightbox === true"
         @click="lightbox = false"
         class="gray-back position-fixed top-0 start-0">
      <div class="bg-light lightbox position-absolute top-50 start-50 translate-middle
                  d-flex flex-column justify-content-around align-items-center rounded">
        <img class="close position-absolute top-0 end-0" alt=""
             src="../assets/images/lightbox/close.png"
             @click="lightbox = false">
        <h2 class="text-center">{{OTPcode !== '' ? '請在 30 秒內完成驗證' : '驗證碼失效，請重新驗證'}}</h2>
        <button class="btn rounded bg-primary text-white"
                @click="verify()">{{OTPcode !== '' ? '驗證' : '重新驗證'}}</button>
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
  data() {
    return {
      email: '',
      name: '',
      password: '',
      lightbox: false,
      OTPlink: '',
      OTPcode: '',
      isLog: false,
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
      }
      this.registed();
      // alert('註冊成功，進一步完成驗證');
    },
    registed() {
      const created = new Date().getTime();
      this.$emit('emit-reg', this.email, this.name, this.password, created);
      this.isLog = true;
      this.OTP();
    },
    verify() {
      if (this.OTPlink === this.OTPcode) {
        this.$emit('emit-ver');
        alert('完成驗證');
        this.$router.push({ name: 'Home' });
      }
    },
    OTP() {
      this.lightbox = true;
      if (this.OTPcode !== '') {
        this.OTPcode = '';
      }
      const seed = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'Q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '2', '3', '4', '5', '6', '7', '8', '9'];
      for (let i = 0; i < 10; i += 1) {
        this.OTPcode += seed[Math.floor(Math.random() * seed.length)];
      }
      this.OTPlink = this.OTPcode;
      const OTPlive = setTimeout(() => {
        this.OTPcode = '';
      }, 3000);
      OTPlive();
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
