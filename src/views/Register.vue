<template>
    <div class="container">
        <div class="row">
            <div class="form mx-auto mb-3 py-5">
                <section class="text-white text-center vh70">
                    <h2 class="mb-4 letter-space4">會員註冊</h2>
                    <label class="w-100 mb-4 letter-space4" for="email">
                      <p class="mb-0">
                        {{$t('l_ss_proreg_login_input_id')}}*
                      </p>
                      <input v-model="email" id="email" type="text"
                             placeholder="required field">
                    </label>
                    <label class="w-100 mb-4 letter-space4" for="name">
                      <p class="mb-0">
                        {{$t('user_name')}}*
                      </p>
                      <input v-model="name" id="name" type="text"
                             placeholder="required field">
                    </label>
                    <label class="w-100 mb-4 letter-space4" for="password">
                      <p class="mb-0">
                        {{$t('l_ss_proreg_login_input_pwd')}}*
                      </p>
                      <input v-model="password" id="password" type="password"
                             placeholder="required field">
                    </label>
                    <label class="w-100 mb-4 letter-space4" for="address">
                      <p class="mb-0">
                        {{$t('Address')}}
                      </p>
                      <input class="w-100" v-model="address" id="address" type="text">
                    </label>
                    <div class="d-flex m-auto justify-content-around">
                        <button class="btn bg-danger text-white"
                                @click="this.$router.go(-1)">回上一頁</button>
                        <button v-if="isRegister === false"
                                class="btn bg-primary text-white" @click="formSubmit">送出</button>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div v-if="OTPlightbox === true"
         @click="OTPlightbox = false"
         class="OTPlight-back position-fixed top-0 start-0">
      <div class="bg-light OTPlightbox position-absolute top-50 start-50 translate-middle
                  d-flex flex-column justify-content-around align-items-center rounded">
        <img class="close position-absolute top-0 end-0" alt=""
             src="../assets/images/lightbox/close.png"
             @click="OTPlightbox = false">
        <h2 class="text-center">{{OTPcode !== '' ? '請在 5 秒內完成驗證' : '驗證碼失效，請重新驗證'}}</h2>
        <button class="btn rounded bg-primary text-white"
                @click="verify()">{{OTPcode !== '' ? '驗證' : '重新驗證'}}</button>
      </div>
    </div>
    <lightbox ref="lightbox"></lightbox>
</template>

<script>
import members from '../assets/API-JSON/Member.json';
import lightbox from '../components/Lightbox.vue';

export default {
  components: {
    lightbox,
  },
  data() {
    return {
      email: '',
      name: '',
      password: '',
      OTPlightbox: false,
      address: '',
      OTPlink: '',
      OTPcode: '',
      isRegister: false,
    };
  },
  methods: {
    formSubmit() {
      for (let i = 0; i < members.length; i += 1) {
        if (this.email === '' || this.name === '' || this.password === '') {
          this.$refs.lightbox.open('註冊錯誤', '資料填寫務必完整');
          return;
        }
        if (this.email === members[i].email) {
          this.$refs.lightbox.open('註冊錯誤', '此帳號已被註冊');
          return;
        }
      }
      this.registed();
      // alert('註冊成功，進一步完成驗證');
    },
    registed() {
      const created = new Date().getTime();
      this.$emit('emit-reg', this.email, this.name, this.password, created, this.OTPcode, this.address);
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
      this.OTPlightbox = true;
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
      }, 5000);
      OTPlive();
    },
  },
};

</script>

<style lang="scss">
    .form{
        max-width: 400px;
    }
    .btn{
        min-width: 120px;
    }
    .OTPlight-back{
      background: #80808077;
      height: 100vh;
      width: 100%;
    }
    .OTPlightbox{
    z-index: 2;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 300px;
  }
</style>
