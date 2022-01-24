<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 home_banner">
          <div class="container">
            <div class="row">
              <div class="col-10 m-auto">
                <img class="w-100" src="@/assets/images/home/slider/index_title_tw.png" alt="">
              </div>
              <div class="col-12">
                <img class="w-100" src="@/assets/images/home/slider/index_kv_tw.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-4">
          <img src="../assets/images/home/slider/win1_step1_tw.png" alt="">
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/images/home/slider/win1_step2_tw.png" alt="">
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/images/home/slider/win1_step3_tw.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7">
          <img src="../assets/images/home/slider/win1_en.png" alt="">
        </div>
        <div class="col-12 col-lg-5 d-flex justify-content-center align-items-center">
          <Login/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Login from '../components/Login.vue';

export default {
  components: {
    Login,
  },
};
</script>

<style lang="scss">
  .home_banner{
    background: url('../assets/images/bg_kv.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
