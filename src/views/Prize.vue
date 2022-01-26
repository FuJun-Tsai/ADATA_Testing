<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="text-white">
        </p>
        <h2 class="text-center text-white">Prizes</h2>
      </div>
      <div class="col-12 col-md-8">
        <img src="../assets/images/prizes_01_en.png" alt="">
      </div>
      <div class="col-12 col-md-4">
        <img src="../assets/images/prizes_01_t_en.png" alt="">
        <button class="m-auto d-block rounded p-2"
                :class="{
                  'point-none':!member.isRegister,
                  'bg-danger' : member.isRegister,
                  'bg-Warning':!member.isRegister,
                }"
                @click="addCart(data[0])">{{member.isRegister?'add to cart':'請先完成登入'}}</button>
      </div>
      <div class="col-6 col-md-3 mb-5" v-for="num in 7" :key="num">
        <img :src="require(`../assets/images/prizes_0${num + 1}_en.png`)" alt="">
        <button class="m-auto d-block rounded p-2"
                :class="{
                  'point-none':!member.isRegister,
                  'bg-danger' : member.isRegister,
                  'bg-Warning':!member.isRegister,
                }"
                @click="addCart(data[num+1])">{{member.isRegister?'add to cart':'請先完成登入'}}</button>
      </div>
    </div>
  </div>
  <!-- <lightbox/> -->
</template>

<script>
import jsonSource from '../assets/API-JSON/Good.json';
// import lightbox from '../components/Lightbox.vue';

export default {
  props: {
    member: Object,
  },
  // components: [
  //   lightbox,
  // ],
  data() {
    return {
      data: jsonSource,
    };
  },
  methods: {
    addCart(good) {
      this.$emit('emit-cart', good);
    },
  },
};
</script>

<style lang="scss">
  .point-none{
    pointer-events: none;
  }
</style>
