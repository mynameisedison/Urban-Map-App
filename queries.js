const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'urban',
  password: 'password',
  port: 5432,
})

const getSurgeryCenters = (request, response) => {
  pool.query('SELECT * FROM surgerycenters ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDistricts = (request, response) => {
  pool.query('SELECT * FROM districts ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSurgeryCentersById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM surgerycenters WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDistrictById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM districts WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getSurgeryCenters,
  getSurgeryCentersById,
  getDistricts,
  getDistrictById
}
