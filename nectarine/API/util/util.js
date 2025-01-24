const jsyaml = require('js-yaml');
const fs = require('fs');

function loadYAML(filepath){
  const file = fs.readFileSync(filepath, 'utf8');
  const yaml = jsyaml.load(file);
  console.log(yaml);
  return yaml;
}

function registerRoute(yaml, method, route){
	// Take YAML and parse into obj
	const api_obj = loadYAML(yaml);
	// Capture specific part of obj for routes ex api_obj["get"]["allUsers"]
	const config = api_obj[method][route];
	return config;
	
}

//Generate SQL Statements
function gensql(yaml, method, config){
	// Take sql.yml and parse
	const sql_obj = loadYAML(yaml);
	// to create SubSQL obj for CRUD and simplicity
	const obj = sql_obj["user"][method][config];
	return obj;
}

module.exports = {loadYAML, registerRoute, gensql}
