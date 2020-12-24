const express = require('express')
const router = express.Router()
// const axios = require('axios')
// const conn = require('../db.js')

// conn.query(sql , [], (err, results, fields) => {})
router.get('/', (req, res, next) => {
  console.log(resp)
  res.json({ message: 'Hello World!' })
})


module.exports = router