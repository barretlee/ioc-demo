import IoC from './ioc/ioc-constructor';

class Demo {

  logger = null;
  database = null;

  constructor() {
    new IoC(this);
    this.init();
  }

  init() {
    this.logger.info('Inject Complete');
    this.database.query('SQL');
  }
}

new Demo();
