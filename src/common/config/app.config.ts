export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3001,
  default_limit: +process.env.DEFAULT_LIMIT || 25,
});
