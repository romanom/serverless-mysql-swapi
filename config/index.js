import loggerConfig from './logger';
import dbConfig from './database';

const ENV = process.env.NODE_ENV || 'development';

const config = {
  [ENV]: true,
  env: ENV,
  db: dbConfig,
  logger: loggerConfig,
  serviceName: 'SWAPI-serverless',
};

export default config;