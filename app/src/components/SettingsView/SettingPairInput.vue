<style>
  .multiValueSetting {
    margin-bottom: 10px;
    display: flex;
  }

  .multiValueSetting::after,
  .addSetting::after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }

  button.delete,
  button.add {
    border-radius: 50%;
    font-size: 24px;
    height: 36px;
    margin: auto;
    min-width: 36px;
    width: 36px;
    padding: 0;
    overflow: hidden;
    background: rgba(158,158,158,.2);
    box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);
    position: relative;
    line-height: normal;
    background-color: #DD2C00;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
<template>
  <div class="multiValueSetting">
    <template v-if="!isString(item)">
      <template v-for="(map, key) in item">
        <div class="labeledInput">
          <label>{{ capitalize(key) }}</label>
          <input type="text" v-bind:value="map" v-on:blur="doneEdit(key, $event)">
        </div>
      </template>
    </template>
    <template v-else>
      <input type="text" v-bind:value="item" v-on:blur="doneEdit(null, $event)">
    </template>
    <button v-on:click="remove(category, item)" class="material-icons delete">delete_forever</button>
  </div>
</template>
<script>
  import _ from 'lodash';
  import { mapActions } from 'vuex';

  export default {
    name: 'setting-pairInput',
    props: ['item', 'category', 'index'],
    data() {
      return {
      };
    },
    create() {
    },
    methods: {
      ...mapActions([
        'changeSetting',
        'deleteSetting',
      ]),
      doneEdit(key, event) {
        this.changeSetting({
          key: this.category,
          value: event.target.value,
          map: key,
          index: this.index,
        });
      },
      remove(category, item) {
        this.deleteSetting({
          key: category,
          item,
        });
      },
      isObject(value) {
        return _.isObject(value);
      },
      isArray(value) {
        return _.isArray(value);
      },
      isString(value) {
        return _.isString(value);
      },
      isBoolean(value) {
        return _.isBoolean(value);
      },
      capitalize(string) {
        return _.capitalize(string);
      },
    },
  };
</script>
