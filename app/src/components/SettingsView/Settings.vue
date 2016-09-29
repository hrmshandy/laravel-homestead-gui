<style>
  .setting__content {
    background-color: #f5f5f5;
    border-bottom: 1px solid rgba(0,0,0,.1);
    box-shadow: 0px 0px 5px rgba(0,0,0,.1);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #4CAF50;
    cursor: pointer;
  }

  .category__header {
    color: white;
    text-align: center;
    width: 100%;
  }

  .category {
    position: absolute;
    left: 0px;
    top: 0px;
    background: white;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 40px 40px 20px 20px;
    z-index: 10;
  }

  .category h3 {
    text-align: center;
    margin-bottom: 30px;
  }

  .category__close {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: 100;
    width: 45px;
    height: 45px;
    background: transparent;
    border: none;
    font-size: 50px;
    cursor: pointer;
    transform: rotate(45deg);
  }

  .category__close:focus {
    outline: 0;
  }

  input[type=text] {
    width: 50%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-family: Lato, Helvetica, sans-serif;
    border: 0;
    border-bottom: 1px solid #DD2C00;
    background-color: transparent;
    color: #222;
  }

  label {
    color: #DD2C00;
    font-size: 13px;
    display: block;
  }

  .labeledInput {
    flex-grow: 1;
    padding: 0 15px;
  }

  .labeledInput input[type=text] {
    width: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
<template>
  <div class="setting">
    <div class="setting__content" v-on:click.self="toggleShow">
      <header class="category__header" v-on:click.self="toggleShow">
        {{ capitalize(category) }}
      </header>
      <transition name="fade">
        <div class="category" v-show="show" v-bind:class="['category-' + category]" v-on:keyup.esc="toggleShow">
          <h3>{{ capitalize(category) }}</h3>
          <button class="category__close" v-on:click="toggleShow">
            +
          </button>
          <template v-if="isArray(value)">
            <setting-pairInput v-for="(item, index) in value"
                               :item="item"
                               :index="index"
                               :category="category">
            </setting-pairInput>
            <add-setting :category="category"></add-setting>
          </template>
          <template v-else>
            <setting-input
                    v-model="value"
                    :category="category"
                    :type="isBoolean(value) ? 'checkbox' : 'text'">
            </setting-input>
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
  import SettingInput from './SettingInput';
  import SettingPairInput from './SettingPairInput';
  import AddSetting from './AddSetting';

  export default {
    props: ['value', 'category'],
    data() {
      return {
        show: false,
      };
    },
    components: {
      SettingInput,
      SettingPairInput,
      AddSetting,
    },
    mounted() {
      document.addEventListener('keydown', this.closeCategory);
    },
    destroyed() {
      document.removeEventListener('keydown', this.closeCategory);
    },
    methods: {
      closeCategory(event) {
        if (this.show && event.keyCode === 27) {
          this.toggleShow();
        }
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
      uppercase(string) {
        return _.upperCase(string);
      },
      toggleShow() {
        this.show = !this.show;
      },
    },
  };
</script>