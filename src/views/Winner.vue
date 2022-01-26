<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center text-white">Winners</h2>
      </div>
    </div>
  </div>
</template>

<script>
import jsonSource from '../assets/API-JSON/Winners.json';

export default {
  data() {
    return {
      data: jsonSource,
    };
  },
};
</script>
