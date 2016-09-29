<style scoped>
  .alert,
  .expand-transition {
    width: 100%;
    padding: 10px 40px;
    text-align: center;
    position: fixed;
    top: 0;
    overflow: hidden;
    z-index: 99;
  }

  .alert__close {
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

  .alert__close:focus {
    outline: 0;
  }

  .alert.success {
    background-color: rgb(195, 232, 135);
  }

  .alert.error {
    background-color: rgb(247, 118, 105);
  }

  .alert.warning {
    background-color: rgb(255, 241, 118);
  }

  .provisionNow {
    cursor: pointer;
    text-decoration: underline;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

<template>
  <transition name="fade">
    <div class="alert" v-bind:class="status" v-if="show">
      <p class="alert__message">
        {{ message }}
        <div class="provisionNow" v-show="type === 'configuration'" v-on:click="provisionNow">Provision now?</div>
      </p>
      <button v-on:click="close" class="alert__close">+</button>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex';
//  import _ from 'lodash';

  export default {
    computed: {
      ...mapGetters({
        type: 'alertType',
        message: 'alertMessage',
        show: 'alertShow',
        status: 'alertStatus',
      }),
    },
    data() {
      return {};
    },
    methods: {
      close() {
        this.$store.dispatch('toggleAlert', { show: false });
      },
      provisionNow() {
        this.$store.dispatch('toggleAlert', { show: false });
        this.$store.dispatch('toggleConsole', { show: true });
        this.$store.dispatch('runProvisioning', { runProvisioning: true });
      },
    },
  };
</script>