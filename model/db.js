import postgres  from 'postgres';

const sql = postgres ({
host : 'localhost',
port : 5432,
password: 'danirachampo18',
username: 'root',
database: 'prueba'
});

export default sql;