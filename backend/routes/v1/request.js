require('dotenv').config()
const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const fetch = require('fetch')
const axios = require('axios')
const passport = require('passport')

//load User model from file location
// const User = require('../../models/user')
const { response } = require('express')
const e = require('express')

//test route to return message
router.get('/', (req,res) => {
    res.json({ msg: "heyy there are way too many endpoints"})
})

//test route to return api call
router.get('/test', (req,res) => {
    axios.get(`https://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`)
    .then(res => {
        console.log(res)
        res.send(JSON.stringify(res))
    })
    .catch(err => res.send(err))
})


module.exports = router