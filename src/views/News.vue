<template>
  <div class="container">
    <div class="row  text-white">
      <div class="col-12 mb-4">
        <!-- {{data}} -->
        <label class="col-6 col-md-3" :for="tag" v-for="tag in tags" :key="tag">
          <input v-model="nowtag" :id="tag" name="nowtag" :value="tag" type="radio">
          {{tag}}
        </label>
      </div>
      <div class="col-12 mb-5" v-for="(item, key) in showData" :key="item">
        <h2 class="border-start ps-2 border-5 border-light mb-4">
          {{key}}
        </h2>
        <div class="row">
          <div v-for="(report, index) in item"
               :key="report"
               class="col-6 col-md-4 mb-5 h-100 report px-5"
               :class="key">
            <img :src="report.image_url===null?require(`../assets/images/replace/${key}.jpg`)
                 :report.image_url"
                 @error="imgBackup(key, index)"
                 alt="A picture">
            {{ report.image_url === null}}
            <h3>
              {{report.title}}
            </h3>
            <hr>
            <p class="text-end">{{report.pubDate}}</p>
            <a :href="report.link">
              <button class="rounded d-block m-auto">link</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <p class="text-white">
    </p>
  </div>
</template>

<script>
import jsonSource from '../assets/API-JSON/Newtest.json';

export default {
  data() {
    return {
      data: {},
      tags: ['Science', 'Health', 'Originals', 'COVID-19'],
      nowtag: '',
    };
  },
  methods: {
    getData() {
      this.data.Science = jsonSource.Science;
      this.data.Health = jsonSource.Health;
      this.data.Originals = jsonSource.Originals;
      this.data['COVID-19'] = jsonSource['COVID-19'];
    },
    // imgBackup(type, index) {
    //   document.querySelectorAll(`.${type}`)[index].src = `../assets/images/replace/${type}.jpg`;
    // },
  },
  computed: {
    showData() {
      // if (this.nowtag.length === 0) {
      return this.data;
      // }
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    // this.imgBackup();
  },
};

</script>

<style lang="scss">
  .h-100{
    height: 100%;
  }
  .report img{
    height: 30vmin;
    object-fit: cover;
  }
</style>
