import * as settings from './_actions/settings';
import * as alerts from './_actions/alerts';
import * as console from './_actions/console';
import * as machine from './_actions/machine';

const args = [
  settings,
  alerts,
  console,
  machine,
];

function mergeObjects(args) {
  return Object.assign({}, ...args);
}

export default mergeObjects(args);
