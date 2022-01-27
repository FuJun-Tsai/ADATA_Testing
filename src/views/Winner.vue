<template>
  <div class="container text-white">
    <div class="row text-center">
      <div class="col-12">
        <h2 class="text-center">{{$t('l_header_menu_4')}}</h2>
      </div>
    </div>
    <div class="row text-center d-none d-md-flex">
      <div class="col-12 col-md-4 p-1 mb-3">{{$t('l_header_menu_2')}}</div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-6 p-1">{{$t('l_ss_proreg_login_input_id')}}</div>
          <div class="col-6 p-1">Name</div>
        </div>
      </div>
    </div>
    <div class="row mb-md-5" v-for="(item, index) in title" :key="item">
      <div class="col-12 col-md-4 text-center">
        <div class="mb-2 border rounded border-2 photo h-100"
             :class="{
               winner1:index===0,
               winner2:index===1,
               winner3:index===2,
              }">
          <span>
            {{item}}
          </span>
        </div>
      </div>
      <div class="col-md-8 col-12">
        <div class="row" v-for="owner in groups[item]" :key="owner">
          <div class="col-12 col-md-6">{{owner.email}}</div>
          <div class="col-12 col-md-6">{{owner.name}}</div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonSource from '../assets/API-JSON/Winners.json';

export default {
  data() {
    return {
      data: jsonSource.data,
      title: [],
      groups: {},
    };
  },
  methods: {
    rebuild() {
      this.title = this.data.reduce((obj, item) => {
        if (obj.indexOf(item.prize) === -1) {
          obj.push(item.prize);
        }
        return obj;
      }, []);
      this.title.forEach((item) => {
        this.groups[item] = [];
      });
      this.data.forEach((item) => {
        this.groups[item.prize].push({ email: item.email, name: item.name });
      });
    },
  },
  created() {
    this.rebuild();
  },
};
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
  }
  .winner1{
    background: url('../assets/images/prizes_01_en.png'), #4c4c4c;
    background-blend-mode: soft-light;
    background-size: cover;
  }
  .winner2{
    background: url('../assets/images/prizes_02_en.png'), #4c4c4c;
    background-blend-mode: soft-light;
    background-size: cover;
  }
  .winner3{
    background: url('../assets/images/prizes_03_en.png'), #4c4c4c;
    background-blend-mode: soft-light;
    background-size: cover;
  }
</style>
