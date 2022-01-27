<template>
  <div class="position-fixed top-0 left-0 back"
       v-if="lightbox===true">
    <div class="lightbox position-absolute rounded border-4">
      <img class="close position-absolute top-0 end-0" alt=""
          src="../assets/images/lightbox/close.png"
          @click="lightbox = false">
      <h4 class="text-center py-4 letter-space-2">{{this.title}}</h4>
      <p class="text-center py-4">{{this.info}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: Object,
  },
  data() {
    return {
      lightbox: false,
      title: '',
      info: '',
    };
  },
  methods: {
    open(title, info) {
      this.lightbox = true;
      this.info = info;
      this.title = title;
    },
  },
};
</script>

<style lang="scss">
  .back{
    background: #4c4c4c99;
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }
  .lightbox{
    z-index: 2;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
  }
  .close{
    cursor: pointer;
    width: 40px;
    transform: translate(-6px,6px);
  }
</style>
