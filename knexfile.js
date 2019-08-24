module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/urban',
    migrations: {directory: __dirname + "/migrations/"},
    seeds: {directory: __dirname + "/seeds/"}
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
