const { Client } = require('pg')
const client = new Client({
  user: 'sgpostgres',
  host: 'SG-PostgreNoSSL-14-pgsql-master.devservers.scalegrid.io',
  database: 'mylist',
  password: 'admin',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});