<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="text-white">
        </p>
        <h2 class="text-center text-white">Prizes</h2>
      </div>
      <div class="col-12 col-md-8" @click="test()">
        <img src="../assets/images/prizes_01_en.png" alt="">
      </div>
      <div class="col-12 col-md-4">
        <img src="../assets/images/prizes_01_t_en.png" alt="">
        <button class="m-auto d-block rounded p-2"
                :class="{
                  'point-none':!member.isRegister,
                  'bg-danger' : member.isRegister,
                  'text-white': member.isRegister,
                  'bg-Warning':!member.isRegister,
                }"
                @click="openLightbox(data[0])">
                  {{member.isRegister?'add to cart':'請先完成登入'}}
                </button>
      </div>
      <div class="col-6 col-md-3 mb-5" v-for="num in 7" :key="num">
        <img :src="require(`../assets/images/prizes_0${num + 1}_en.png`)" alt="">
        <button class="m-auto d-block rounded p-2"
                :class="{
                  'point-none':!member.isRegister,
                  'bg-danger' : member.isRegister,
                  'text-white': member.isRegister,
                  'bg-Warning':!member.isRegister,
                }"
                @click="openLightbox(data[num])">
                  {{member.isRegister?'add to cart':'請先完成登入'}}
                </button>
      </div>
    </div>
    <div v-if="lightbox === true"
         class="address-back position-fixed top-0 start-0">
      <div class="bg-light lightbox position-absolute top-50 start-50 translate-middle
                  d-flex flex-column justify-content-around align-items-center rounded">
        <img class="close position-absolute top-0 end-0" alt=""
             src="../assets/images/lightbox/close.png"
             @click="closeLightbox()">
        <h2 class="text-center">{{title[step]}}</h2>
        <p class="text-center">商品：{{msg}}</p>
        <div v-if="step===0">
          <p class="mb-0 text-center">
            <label for="default" v-if="member.address">
              <input id="default" type="checkbox" v-model="defaultAddress">
              使用會員預設地址
            </label>
          </p>
          <p class="mb-0">
            填寫地址
          </p>
          <textarea v-model="address" cols="30" rows="3"
                  :disabled="defaultAddress === true"></textarea>
          <div class="d-flex justify-content-around w-100">
            <button class="mb-3" @click="address = ''">清空</button>
            <button class="mb-3" @click="addCart()">送出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <lightbox :msg="{title:'兌換成功',info:'1234'}" ref="lightbox"></lightbox>
</template>

<script>
import jsonSource from '../assets/API-JSON/Good.json';
import lightbox from '../components/Lightbox.vue';

export default {
  props: {
    member: Object,
  },
  components: {
    lightbox,
  },
  data() {
    return {
      data: jsonSource,
      lightbox: false,
      step: 0,
      title: ['表單填寫', '完成兌換'],
      msg: '',
      address: '',
      defaultAddress: false,
    };
  },
  methods: {
    addCart() {
      let address = '';
      if (this.defaultAddress) {
        address = this.member.address;
      } else {
        address = this.address;
      }
      this.step = 1;
      this.$emit('emit-cart', this.msg, address);
    },
    openLightbox(nowItem) {
      this.msg = nowItem;
      this.lightbox = true;
      // this.$emit('emit-lightbox');
    },
    closeLightbox() {
      this.step = 0;
      this.lightbox = false;
    },
    test() {
      this.$refs.lightbox.openLightbox();
    },
  },
};
</script>

<style lang="scss">
  .address-back{
    background: #4c4c4c99;
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }

  .point-none{
    pointer-events: none;
  }
</style>
