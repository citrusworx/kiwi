const { Client } = require('pg');
const dotenv = ('dotenv');
const path = require('path');

// ✅ Load .env file explicitly
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function Pgsql(query, values = []){
	const client = new Client({
		user: process.env.PG_USER,
		host: process.env.PG_HOST,
		password: process.env.PG_PASS,
		database: process.env.PG_DB,
		port: process.env.PG_PORT
	});

	try {
			await client.connect();
			console.log('Connected to database');
			const result = await client.query(query, values);
			return result.rows;
	}
	catch(err){
			console.error('ERROR: ', err.stack);
			throw err;
	}
	finally {
		await client.end()
	}
	

}

export default Pgsql;
