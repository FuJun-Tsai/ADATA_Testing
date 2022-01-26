<template>
  <div class="position-fixed top-50 start-50 translate-middle rounded">
    <div>
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mse: String,
  },
};
</script>

<style lang="scss">
  .lightbox{
    width: 300px;
    height: 300px;
  }
</style>
