const LOGGER_ENGINE = process.env.LOGGER_ENGINE;
const LOGGER_TOKEN = process.env.LOGGER_TOKEN;
const LOGGER_SUBDOMAIN = process.env.LOGGER_SUBDOMAIN;
const LOGGER_LEVEL = process.env.LOGGER_LEVEL;

module.exports = {
  engine: LOGGER_ENGINE,
  level: LOGGER_LEVEL || 'info',
  token: LOGGER_TOKEN || null,
  subdomain: LOGGER_SUBDOMAIN || null,
};