import * as types from '../mutation-types';

const state = {
  message: '',
  status: '',
  show: false,
  type: '',
};

const mutations = {
  [types.OPEN_NEW_ALERT](state, { payload }) {
    state.message = payload.message;
    state.status = payload.status;
    state.show = payload.show;
    state.type = payload.type;
  },
  [types.ADD_ALERT_MESSAGE](state, { payload }) {
    state.message = payload.message;
  },
  [types.SET_ALERT_TYPE](state, { payload }) {
    state.type = payload.type;
  },
  [types.TOGGLE_ALERT](state, { payload }) {
    state.show = payload.show;
  },
};

export default {
  state,
  mutations,
};
