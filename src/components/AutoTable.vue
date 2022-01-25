<template>
  <p>
    {{users}}
  </p>
    <div class="row text-white bg-gray py-2 border-bottom">
      <div class="col-md-4 col-12 text-center">prize</div>
      <div class="col-md-4 col-6 text-center">E-mail</div>
      <div class="col-md-4 col-6 text-center">name</div>
    </div>
    <div class="row">
    </div>
</template>

<script>
import usersData from '../assets/API-JSON/Winners.json';

export default {
  props: {
    api: String,
  },
  data() {
    return {
      users: usersData,
    };
  },
  methods: {
  },
  created() {
  },
};
</script>

<style lang="scss">
  hr{
    background: white;
  }
</style>
