import * as types from '../mutation-types';

export const openNewAlert = ({ commit }, payload) => {
  commit(types.OPEN_NEW_ALERT, { payload });
};

export const addAlertMessage = ({ commit }, payload) => {
  commit(types.ADD_ALERT_MESSAGE, { payload });
};

export const setAlertType = ({ commit }, payload) => {
  commit(types.SET_ALERT_TYPE, { payload });
};

export const toggleAlert = ({ commit }, payload) => {
  commit(types.TOGGLE_ALERT, { payload });
};
