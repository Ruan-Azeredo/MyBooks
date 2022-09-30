import { useContext } from 'react'
import AuthContext from '../Context/AutenticaçãoContext'

const axios = require('axios')

export default function BookUpdate(id, titlevalue, writervalue, covervalue, createdAt) {

    // const {iduserglobal} = useContext(AuthContext)
    const iduserglobal = 2
    const deleta = (id) => {
        axios.delete(`http://localhost:3001/users/books/1/1/${id}`)
    }
    console.log('writervalue:', writervalue)
    const posta = (titlevalue, writervalue, covervalue) => {
        axios.post(`http://localhost:3001/users/books/${iduserglobal}/${writervalue}/`, {
            title: titlevalue,
            cover: covervalue,
            createdAt: createdAt
        })
    }
    deleta(id)
    posta(titlevalue, writervalue, covervalue)
}