import 'dotenv/config';

const env = (key: string, defaultValue: string): string => {
  return process.env[key] || defaultValue;
};

export default {
  APP_NAME: env('APP_NAME', 'App'),
  PORT: env('PORT', '3000'),
  LOCALE: env('LOCALE', 'es-CL'),
  TIME_ZONE: env('TIME_ZONE', 'America/Santiago'),
  DATABASES: {
    MONGO: {
      HOST: env('MONGO_HOST', 'mongodb://localhost:27017/db'),
    },
  },
  SECRET_KEY: env('SECRET', 'secret'),
  TOKEN_EXPIRES_IN: env('EXPIRES_IN', '1d'),
};
