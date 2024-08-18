const express = require("express")
const { fetchMetaData } = require("./fetch-metadata.service")

const router = express.Router()

router.post("", fetchMetaData)

module.exports = router
