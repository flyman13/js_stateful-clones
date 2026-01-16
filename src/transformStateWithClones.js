'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const clones = [];
  const installState = { ...state };

  for (const ch of actions) {
    if (ch.type === 'addProperties') {
      Object.assign(installState, ch.extraData);
    }

    if (ch.type === 'removeProperties') {
      for (const key of ch.keysToRemove) {
        delete installState[key];
      }
    }

    if (ch.type === 'clear') {
      for (const key in installState) {
        delete installState[key];
      }
    }
    clones.push({ ...installState });
  }

  return clones;
}

module.exports = transformStateWithClones;
