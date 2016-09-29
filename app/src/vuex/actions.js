import * as settings from './_actions/settings';
import * as alerts from './_actions/alerts';
import * as console from './_actions/console';

const args = [
  settings,
  alerts,
  console,
];

function mergeObjects(args) {
  return Object.assign({}, ...args);
}

export default mergeObjects(args);
