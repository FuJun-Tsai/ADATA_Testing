<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex">
          <button v-for="tag in tags" :key="tag">{{tag}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['All', 'US', 'COVID-19'],
    };
  },
  methods: {
    getData() {
      this.$http.get(this.api).then((res) => {
        console.log(res);
      });
    },
  },
  computed: {
    news() {
      return '';
    },
  },
  created() {
    this.getData();
  },
};
</script>
