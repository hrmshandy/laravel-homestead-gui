<template>
  <input v-bind:value="value" v-on:blur="doneEdit">
</template>
  <script>
  import { mapActions } from 'vuex';

  export default {
    name: 'setting-input',
    props: ['value', 'category'],
    data() {
      return {};
    },
    create() {
    },
    methods: {
      ...mapActions([
        'changeSetting',
      ]),
      doneEdit(event) {
        this.changeSetting({
          key: this.category,
          value: event.target.value,
        });
      },
    },
  };
</script>

