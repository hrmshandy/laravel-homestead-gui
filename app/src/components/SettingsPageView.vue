<style scoped>
  .settings__grid {
    display: flex;
    flex-wrap: wrap;
  }

  .setting {
    width: 25%;
    padding: 10px;
    height: 150px;
  }

  .save {
    background-color: #DD2C00;
    margin-left: 10px;
    border: none;
    border-radius: 2px;
    color: #FFF;
    position: relative;
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    overflow: hidden;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
    outline: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
  }

  .save:active {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);
  }
</style>

<template>
  <div class="settings">
    <div class="settings__grid">
      <settings v-for="(value, category) in settings"
                :value="value"
                :category="category">
      </settings>
    </div>
    <button @click="save" class="save">Save Configuration</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import fileSystem from '../services/fileSystem';
  import Settings from './SettingsView/Settings';

  export default {
    components: {
      Settings,
    },
    name: 'landing-page',
    computed: {
      ...mapGetters({
        settings: 'allSettings',
      }),
    },
    data() {
      return {
      };
    },
    created() {
      this.$store.dispatch('fetchAllSettings');
    },
    methods: {
      ...mapActions([
        'changeSetting',
      ]),
      removeItem(key, item) {
        this.$store.dispatch('deleteSetting', {
          key,
          item,
        });
      },
      save() {
        if (fileSystem.saveSettings(this.settings) === true) {
          this.$store.dispatch('openNewAlert', {
            message: 'Configuration saved!',
            type: 'configuration',
            show: true,
            status: 'success',
          });
        }
      },
    },
  };
</script>
