import * as types from '../mutation-types';

const state = {
  all: [],
};

const mutations = {
  [types.SET_SETTINGS](state, { settings }) {
    state.all = settings;
  },
  [types.DELETE_SETTING](state, { payload }) {
    const index = state.all[payload.key].indexOf(payload.item);
    state.all[payload.key].splice(index, 1);
  },
  [types.CHANGE_SETTING](state, { payload }) {
    if (payload.hasOwnProperty('index')) {
      if (payload.hasOwnProperty('map') && payload.map !== null) {
        state.all[payload.key][payload.index][payload.map] = payload.value;
      } else {
        state.all[payload.key][payload.index] = payload.value;
      }
    } else {
      state.all[payload.key] = payload.value;
    }
  },
  [types.ADD_SETTING](state, { payload }) {
    state.all[payload.key].push(payload.item);
  },
};

export default {
  state,
  mutations,
};
