<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center text-white">Winners</h2>
        <AutoTable :api='api'/>
      </div>
    </div>
  </div>
</template>

<script>
import AutoTable from '../components/AutoTable.vue';

export default {
  components: {
    AutoTable,
  },
  data() {
    return {
      api: '../assets/API-JSON/Winners.json',
    };
  },
};
</script>
