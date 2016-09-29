import * as types from '../mutation-types';

const state = {
  show: false,
  runProvisioning: false,
};

const mutations = {
  [types.TOGGLE_CONSOLE](state, { payload }) {
    state.show = payload.show;
  },
  [types.RUN_PROVISIONING](state, { payload }) {
    state.runProvisioning = payload.runProvisioning;
  },
};

export default {
  state,
  mutations,
};
