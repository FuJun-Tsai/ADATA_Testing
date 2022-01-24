<template>
    <p class="text-white">132145</p>
    <h2>
        {{api}}
    </h2>
    <table class="text-white w-100">
        <tr>
            <th>Prize</th>
        </tr>
        <tr>
            <td>item</td>
        </tr>
    </table>
</template>

<script>
export default {
  props: {
    api: String,
  },
  methods: {
    getData() {
      fetch(this.api)
        .then((res) => res.json());
    },
  },
  created() {
    this.getData();
  },
};
</script>
