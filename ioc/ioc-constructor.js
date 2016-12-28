import Path from 'path';
import declare from './declare.json';

export default class Base {

  constructor(env) {
    for (let key in env) {
      const serviceFile = declare[key].service;
      const serviceMethods = declare[key].methods;
      const Service = require(Path.join(__dirname, '../lib', key)).default;
      const serviceInstance = new Service(env);
      env[key] = {};
      for(let item in serviceMethods) {
        env[key][item] = serviceInstance[serviceMethods[item]];
      }
    }
  }

}
