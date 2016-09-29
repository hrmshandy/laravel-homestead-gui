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
    color: #222;
    font-family: Lato, Helvetica, sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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

  .view {
    display: inline-block;
    flex-grow: 1;
    position: relative;
    margin-left: 240px;
    padding: 20px;
    overflow-y: auto;
  }

  strong {
    font-weight: 700;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    position: absolute;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>

<template>
  <main class="app">
    <alert></alert>
    <console></console>
    <aside class="sidebar">
      <nav class="navigation">
        <router-link to="/" class="navigation__link">
          <i class="material-icons">home</i> Home
        </router-link>
        <router-link to="/settings" class="navigation__link">
          <i class="material-icons">settings</i> Settings
        </router-link>
      </nav>
    </aside>
    <transition name="fade">
      <router-view class="view"></router-view>
    </transition>
  </main>
</template>

<script>
  import store from 'src/vuex/store';
  import alert from 'components/modals/Alert';
  import console from 'components/modals/Console';

  export default {
    components: {
      alert,
      console,
    },
    store,
  };
</script>
