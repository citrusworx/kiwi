const fs = require('fs');
const yaml = require('js-yaml');
import 'dotenv/config';

interface MySQLConfig {
    host: string;
    user: string;
    password: string;
    dbname: string;
    port: number;
}

class MySQLAdapter {
    
    private host: string;
    private user: string;
    private password: string;
    private dbname: string;
    private port: number;

    constructor(){
        const configLoad: string = fs.readFileSync('./config.yml', 'utf-8');
        const config: any = yaml.load(configLoad);
        this.host = config.host;
        this.user = config.user;
        this.password = config.password;
        this.dbname = config.dbname;
        this.port = config.port;

        if(config){
            // Connect to the database
            const mysql = require('mysql');
            const connection = mysql.createConnection({
                host: this.host,
                user: this.user,
                password: this.password,
                database: this.dbname,
                port: this.port
            });
            connection.connect((err: any) => {
                if (err) {
                    console.error('Error connecting to the database: ' + err.stack);
                    return;
                }
                console.log('Connected to the database as id ' + connection.threadId);
            });
            
        }
    }
}

export { MySQLAdapter }