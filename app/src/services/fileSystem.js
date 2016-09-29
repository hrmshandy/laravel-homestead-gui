import fs from 'fs';
import YAML from 'yamljs';

const HOME_DIR = process.env.HOME;
const HOMESTEAD_PATH = '/.homestead/Homestead.yaml';

export default {
  readSettings(cb) {
    fs.readFile(HOME_DIR + HOMESTEAD_PATH, 'utf8', (err, data) => {
      if (err) throw err;
      cb(YAML.parse(data));
    });
  },
  saveSettings(settings) {
    fs.writeFile(
      HOME_DIR + HOMESTEAD_PATH,
      YAML.stringify(settings, 3),
      (err) => {
        if (err) throw err;
      });
    return true;
  },
};
