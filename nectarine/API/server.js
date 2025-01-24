const express = require('express');
const jsyaml = require('js-yaml');
const dotenv = require('dotenv');
const fs = require('fs');
const { loadYAML, registerRoute, gensql } = require('./util/util.js');

dotenv.config()

const server = express();
const port = 4000;

server.get('/boo', (req, res) => {
  const data = loadYAML('./query/user/user.yml');
  const config = data.user.get.AllUsers;
  const {type, table, fields} = config;

  const sql = `${type} ${fields} FROM ${table}`;
  res.send(
    `${sql}`
  );
})

server.get('/', (req, res) => {
  const userByAge = gensql('./query/user/user.yml', 'get', 'userByAge');
	console.log(userByAge);
  const sql = `${userByAge.type} (${userByAge.fields}) ${userByAge.action} ${userByAge.table}`;
  res.send(
    `${sql}`
  )
})

server.listen(port, () => {
  console.log('Server is running. Meeeooooooow')
})
