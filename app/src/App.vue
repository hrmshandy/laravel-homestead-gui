<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }

  * {
    margin: 0;
    padding: 0;
  }


  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
     box-sizing: inherit;
   }

  html,
  body { height: 100%; }

  body {
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    color: rgb(66,66,66);
    font-family: Lato, Helvetica, sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .header {
    margin-left: 240px;
    width: calc(100% - 240px);
    min-height: 64px;
    max-height: 1000px;
    padding-right: 30px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    z-index: 3;
    background-color: #F5F5F5;
    color: rgb(66,66,66);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-property: max-height,box-shadow;
  }

  .machineStatus {
    display: flex;
  }

  .machineStatus > i {
    margin-left: 5px;
  }

  .machineStatus > i.running {
    color: rgb(195, 232, 135);
  }

  .machineStatus > i.poweroff {
    color: rgb(247, 118, 105);
  }

  .machineStatus > i.saved {
    color:rgb(255, 241, 118);
  }

  .sidebar {
    width: 240px;
    height: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #263238;
    display: flex;
    overflow-y: auto;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: #37474f;
    align-items: stretch;
    padding-top: 30px;
  }

  .navigation__link {
    align-items: center;
    display: flex;
    color: rgba(255, 255, 255, 0.56);
    padding: 16px;
    text-decoration: none;
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
    opacity: .87;
    border-left: 3px solid transparent;
  }

  .navigation__link:hover {
    background-color: #263238;
    border-left: 3px solid #4CAF50;
  }

  .navigation__link > .material-icons {
    margin-right: 32px;
  }

  .navigation__link--sublink {
    padding: 10px 10px 10px 32px;
  }

  .navigation__link--sublink > .material-icons {
    margin-right: 16px;
  }

  .view {
    display: inline-block;
    flex-grow: 1;
    position: relative;
    margin-left: 240px;
    padding: 30px;
    overflow-y: auto;
  }

  strong {
    font-weight: 700;
  }

</style>

<template>
  <main class="app">
    <alert-window></alert-window>
    <console-window></console-window>
    <header class="header">
      <div class="machineStatus">
        Machine Status:&nbsp;<strong>{{ machineStatus }}</strong>
        <i class="material-icons" v-bind:class="[machineStatus]">lens</i>
      </div>
    </header>
    <aside class="sidebar">
      <nav class="navigation">
        <router-link to="/" class="navigation__link">
          <i class="material-icons">home</i> Home
        </router-link>
        <router-link to="/settings" class="navigation__link">
          <i class="material-icons">settings</i> Settings
        </router-link>
        <router-link v-for="(value, key) in settings" v-bind:to="'/setting/' + key" class="navigation__link navigation__link--sublink">
          <i class="material-icons">subdirectory_arrow_right</i> {{ capitalize(key) }}
        </router-link>
      </nav>
    </aside>
    <router-view class="view"></router-view>
  </main>
</template>

<script>
  import store from 'src/vuex/store';
  import alertWindow from 'components/modals/AlertWindow';
  import consoleWindow from 'components/modals/ConsoleWindow';
  import { mapGetters } from 'vuex';
  import _ from 'lodash';
  const { ipcRenderer } = require('electron');
  import shellEnv from 'shell-env';
  import shellPath from 'shell-path';

  export default {
    components: {
      alertWindow,
      consoleWindow,
    },
    computed: {
      ...mapGetters({
        settings: 'allSettings',
        machineStatus: 'getMachineStatus',
      }),
    },
    store,
    created() {
      this.$store.dispatch('fetchAllSettings');
      this.checkMachineStatus();
    },
    methods: {
      capitalize(string) {
        return _.capitalize(string);
      },
      checkMachineStatus() {
        ipcRenderer.on('machine-status', (event, arg) => {
          this.$store.dispatch('setMachineStatus', {
            status: arg,
          });
        });
        const env = process.env;
        env.PATH = shellPath.sync();
        ipcRenderer.send('machine-status', env);
      },
    },
  };
</script>
