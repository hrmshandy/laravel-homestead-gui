<style>
  .addSetting {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
  }

  .addSetting__headline {
    flex: 1 100%;
    padding-left: 15px;
    position: relative;
    margin-bottom: 20px;
    color: #222;
  }

  .addSetting__headline::after {
    content: '';
    width: 70px;
    height: 1px;
    background-color: #222;
    position: absolute;
    left: 15px;
    bottom: -5px;
  }
</style>
<template>
  <div class="addSetting">
    <template v-if="category === 'folders' || category === 'sites' || category === 'ports'">
      <h4 class="addSetting__headline">Create new Entry</h4>
      <template v-if="category === 'folders' || category === 'sites'">
        <div class="labeledInput">
          <label>Map</label>
          <input type="text" v-model="item.map">
        </div>
      </template>
      <template v-if="category === 'ports'">
        <div class="labeledInput">
          <label>Sent</label>
          <input type="text" v-model="item.sent">
        </div>
      </template>
      <div class="labeledInput">
        <label>To</label>
        <input type="text" v-model="item.to">
      </div>
      <button v-on:click="add" class="add material-icons">add</button>
    </template>
    <template v-if="category === 'variables'">
      <h4 class="addSetting__headline">Create new Entry</h4>
      <div class="labeledInput">
        <label>Key</label>
        <input type="text" v-model="item.key">
      </div>
      <div class="labeledInput">
        <label>Value</label>
        <input type="text" v-model="item.value">
      </div>
      <button v-on:click="add" class="add material-icons">add</button>
    </template>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'setting-input',
    props: ['category'],
    data() {
      return {
        item: {},
      };
    },
    create() {
    },
    methods: {
      ...mapActions([
        'addSetting',
      ]),
      add() {
        this.addSetting({
          key: this.category,
          item: this.item,
        });
        this.item = {};
      },
    },
  };
</script>