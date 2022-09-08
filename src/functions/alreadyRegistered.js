import { useState } from 'react'

const axios = require('axios')

export default function alreadyRegistered(email) {

    console.log(email)

    axios.get(`http://localhost:3001/users/alreadyregistered/${email}`)
    .then((response) => {
        console.log(response.data)
        console.log(response)
    })
}