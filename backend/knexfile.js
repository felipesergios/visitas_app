module.exports = {

  /*development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    seeds:{
      directory:'./src/database/seeds'
    },
    useNullAsDefault:true,
  },*/
   development: {
    client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user : 'admin',
    password : 'admin',
    database : 'checkin'
  },
  migrations:{
    directory:'./src/database/migrations'
  },
  seeds:{
    directory:'./src/database/seeds'
  },
  useNullAsDefault:true,
  },


  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};