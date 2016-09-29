import * as types from '../mutation-types';

export const toggleConsole = ({ commit }, payload) => {
  commit(types.TOGGLE_CONSOLE, { payload });
};

export const runProvisioning = ({ commit }, payload) => {
  commit(types.RUN_PROVISIONING, { payload });
};
