import * as types from '../mutation-types';

const state = {
  status: 'poweroff',
};

const mutations = {
  [types.SET_MACHINE_STATUS](state, { payload }) {
    state.status = payload.status;
  },
};

export default {
  state,
  mutations,
};
