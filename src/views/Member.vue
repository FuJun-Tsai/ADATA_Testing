<template>
  <div class="container pt-5 vh70">
    <div class="row text-white">
      <div class="col-12">
        <h2 class="text-center mb-5">會員專區</h2>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-lg-2 col-sm-3 col-12">
            <button class="mb-2 w-100" v-for="tag in tags" :key="tag" :value="tag"
                    @click="title = tag">{{tag}}
            </button>
          </div>
          <div class="col-lg-10 col-sm-9 col-12 mx-auto">
            <div class="row">
              <div class="col-12">
                <h3 class="text-center mb-3">{{title}}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-12 mx-auto text-center" v-if="title === '會員資訊'">
                <div class="mb-3">
                  <p class="mb-1" >
                    {{member.name}} 您好！
                  </p>
                </div>
                <div class="mb-3">
                  <p class="mb-1" >
                    信箱：{{member.email}}
                  </p>
                  <button class="text-white bg-primary"
                          @click="openLightbox('email', '信箱')">更改信箱</button>
                </div>
                <div class="mb-3">
                  <p class="mb-1" >
                    地址：{{member.address}}
                  </p>
                  <button class="text-white bg-primary"
                          @click="openLightbox('address', '地址')">更改地址</button>
                </div>
                <div class="mb-3">
                  <button class="text-white bg-primary"
                          @click="openLightbox('password', '密碼')">更改密碼</button>
                </div>
              </div>
              <div class="col-12"  v-if="title === '兌換紀錄'">
                <div class="row d-flex justify-content-center" v-for="item in reward" :key="item">
                  <div class="col-3 col-md-2 mb-3 text-center">{{item.id}}</div>
                  <div class="col-9 col-md-6 mb-3">{{item.prize}}</div>
                  <hr>
                </div>
                <div class="row d-flex justify-content-center" v-for="item in cart" :key="item">
                  <div class="col-3 col-md-2 mb-3 text-center">{{item.id}}</div>
                  <div class="col-9 col-md-6 mb-3">{{item.prize}}</div>
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="lightbox === true"
        class="gray-back position-fixed top-0 start-0">
      <div class="bg-light lightbox position-absolute top-50 start-50 translate-middle
                d-flex flex-column justify-content-around align-items-center rounded">
        <img class="close position-absolute top-0 end-0" alt=""
             src="../assets/images/lightbox/close.png"
             @click="lightbox=false">
        <h2 class="text-center">請輸入新的{{word}}</h2>
        <input type="text" v-model="value" name="" id="">
        <button class="btn rounded bg-primary text-white"
                @click="updateData">更新</button>
      </div>
    </div>
  </div>
</template>

<script>
import Winner from '../assets/API-JSON/Winners.json';

export default {
  props: {
    member: Object,
    cart: Object,
  },
  data() {
    return {
      lightbox: false,
      title: '會員資訊',
      tags: ['會員資訊', '兌換紀錄'],
      target: '',
      value: '',
      word: '',
    };
  },
  methods: {
    openLightbox(target, word) {
      this.target = target;
      this.word = word;
      this.lightbox = true;
    },
    updateData() {
      const updateTime = new Date().getTime();
      this.$emit('emit-updateMember', this.target, this.value, updateTime);
      this.value = '';
      this.lightbox = false;
    },
  },
  computed: {
    reward() {
      return Winner.data.filter((item) => item.name === this.member.name);
    },
    here() {
      return this.cart;
    },
  },
  created() {
  },
};
</script>

<style lang="scss">

</style>
