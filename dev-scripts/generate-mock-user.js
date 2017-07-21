import jsf from 'json-schema-faker';
import faker from 'faker';
import { userDataSchema } from './mock-user-schema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => faker);

const json = JSON.stringify(jsf(userDataSchema));

fs.writeFile('./src/assets/db.json', json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green('Mock data generated.'));
  }
});
