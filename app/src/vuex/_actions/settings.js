import * as types from '../mutation-types';
import fileSystem from '../../services/fileSystem';

export const fetchAllSettings = ({ commit }) => {
  fileSystem.readSettings(settings => {
    commit(types.SET_SETTINGS, { settings });
  });
};

export const deleteSetting = ({ commit }, payload) => {
  commit(types.DELETE_SETTING, { payload });
};

export const changeSetting = ({ commit }, payload) => {
  commit(types.CHANGE_SETTING, { payload });
};

export const addSetting = ({ commit }, payload) => {
  commit(types.ADD_SETTING, { payload });
};
