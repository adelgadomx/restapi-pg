// Load Libraries
const { Pool } = require('pg');

const pool = new Pool({
    host: 't10etlappdev01.laureate.mx',
    user: 'postgres',
    password: 'T3mp0ral**',
    database: 'dmuvm',
    port: '5432'

} );


// Controller functions

const getUsers = async (req, res) => {
    const response = await pool.query("SELECT campus, desc_campus FROM lvs_campus WHERE id_marca = 3 AND bn_situacion = 'V' AND campus < 100 ORDER BY campus")
    res.status(200).json(response.rows);
}

module.exports = {
    getUsers,
}