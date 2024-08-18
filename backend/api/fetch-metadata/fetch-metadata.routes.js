const express = require("express")
const { rateLimit } = require("express-rate-limit")
const { fetchMetaData } = require("./fetch-metadata.service")

// configure rate limiter middleware (5 request per second)
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  limit: 5, 
  standardHeaders: true,
  legacyHeaders: false,
})

const router = express.Router()

router.post("", limiter, fetchMetaData)

module.exports = router
