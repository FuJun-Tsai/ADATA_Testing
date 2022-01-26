<template>
  <div class="container">
    <div class="row text-white">
        <div class="col-12">
            <h2 class="text-center mb-3">會員專區</h2>
        </div>
        <div class="col-md-5 mx-auto text-center">
          <div class="mb-3">
              <p class="mb-0" >
                信箱：{{member.email}}
              </p>
              <button @click="openLightbox('email', '信箱')">更改信箱</button>
          </div>
          <div class="mb-3">
              <p class="mb-0" >
                名稱：{{member.name}}
              </p>
              <button @click="openLightbox('name', '名稱')">更改名稱</button>
          </div>
          <div class="mb-3">
              <button @click="openLightbox('password', '密碼')">更改密碼</button>
          </div>
        </div>
        <div class="col-12">
            <h2 class="text-center mb-3">獎品兌換</h2>
        </div>
        <div class="row" v-for="item in reward" :key="item">
          <div class="col-2 mb-3">{{item.id}}</div>
          <div class="col-8 mb-3">{{item.prize}}</div>
        </div>
    </div>
    <div v-if="lightbox === true"
         class="gray-back position-fixed top-0 start-0">
      <div class="bg-light lightbox position-absolute top-50 start-50 translate-middle
                  d-flex flex-column justify-content-around align-items-center rounded">
        <img class="close position-absolute top-0 end-0" alt=""
             src="../assets/images/lightbox/close.png"
             @click="lightbox = false, value = ''">
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
  },
  data() {
    return {
      lightbox: false,
      word: '',
      target: '',
      value: '',
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
      return Winner.data.filter((item) => item.email === this.member.email);
    },
  },
  created() {
  },
};
</script>

<style lang="scss">
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
