import { getSchemas } from '../schemas';

export class Repository {
  constructor() {
    console.log('Initializing Repository');
    this.db = getSchemas().SWAPIDB;
  }
}