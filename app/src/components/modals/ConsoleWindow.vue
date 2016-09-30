<style>
  .console {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .console__window {
    width: 95%;
    height: 95%;
    background-color: #263238;
    border-radius: 8px;
    font-family: "Lucida Console", Monaco, monospace;
    color: #C3CEE3;
    overflow: hidden;
    padding: 10px 20px;
    margin-top: 2.5%;
  }

  .console__close {
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 50%;
    font-size: 29px;
    height: 36px;
    margin: auto;
    min-width: 36px;
    width: 36px;
    padding: 0;
    overflow: hidden;
    background: rgba(158,158,158,.2);
    box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);
    line-height: normal;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
<template>
  <transition name="fade">
    <div class="console" v-if="show">
      <button class="console__close" v-on:click="close">
        <i class="material-icons">power_settings_new</i>
      </button>
      <div class="console__window">
        <p v-for="message in messages">{{ message }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
  import { mapGetters } from 'vuex';
  const { ipcRenderer } = require('electron');


  export default {
    name: 'console-window',
    computed: {
      ...mapGetters({
        show: 'consoleShow',
        provision: 'runProvisioning',
      }),
    },
    data() {
      return {
        messages: [],
        consoleWindow: null,
      };
    },
    mounted() {
    },
    watch: {
      provision(val) {
        if (val === true) {
          this.$nextTick(() => {
            this.consoleWindow = document.querySelector('.console__window');
            this.messages.push('Start provisioning.');
            this.messages.push('<=======================>');
            this.startProvisioning();
          });
        }
      },
      messages() {
        this.consoleWindow.scrollTop = this.consoleWindow.scrollHeight + 300;
      },
    },
    methods: {
      startProvisioning() {
        ipcRenderer.on('run-provisioning', (error, arg) => {
          this.messages.push(arg);
          this.$nextTick(() => {
            this.consoleWindow.scrollTop = this.consoleWindow.scrollHeight + 300;
          });
        });

        ipcRenderer.send('run-provisioning', 'start');
      },
      close() {
        this.$store.dispatch('toggleConsole', { show: false });
      },
    },
  };
</script>