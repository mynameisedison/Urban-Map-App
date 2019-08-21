// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/urban',
    migrations: {directory: __dirname + "/migrations/"},
    seeds: {directory: __dirname + "/seeds/development"}
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
