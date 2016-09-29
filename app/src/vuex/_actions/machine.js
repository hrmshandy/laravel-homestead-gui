import * as types from '../mutation-types';

export const setMachineStatus = ({ commit }, payload) => {
  commit(types.SET_MACHINE_STATUS, { payload });
};
