<template>
  <div class="container">
      <div class="row text-white">
          <div class="col-12">
              <h2 class="text-center mb-3">會員專區</h2>
          </div>
          <div class="col-8 mx-auto mb-3">
              <p class="mb-0">
                信箱：{{member.email}}
              </p>
          </div>
          <div class="col-8 mx-auto mb-3">
              <p class="mb-0">
                名稱：{{member.name}}
              </p>
              <input type="text" :value="member.name">
              <button>更改名稱</button>
          </div>
          <div class="col-8 mx-auto mb-3">
              <p class="mb-0">
                密碼：{{member.password}}
              </p>
              <input type="text" :value="member.password">
              <button>更改密碼</button>
          </div>
          <div class="col-12">
              <h2 class="text-center mb-3">獎品兌換</h2>
          </div>
          <div class="row" v-for="item in reward" :key="item">
            <div class="col-2 mb-3">{{item.id}}</div>
            <div class="col-8 mb-3">{{item.prize}}</div>
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
      test: 'test',
      pages: 0,
      password: {
        value: '',
        status: 0,
      },
      name: {
        value: '',
        status: 0,
      },
    };
  },
  methods: {
    dataChange() {
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
</style>
