const axios = require('axios')

export default function BookUpdate(idCooked, id, titlevalue, writervalue, covervalue, createdAt) {

    const deleta = (id) => {
        axios.delete(`http://localhost:3001/users/books/1/1/${id}`)
    }
    console.log('writervalue:', writervalue)
    const posta = (titlevalue, writervalue, covervalue) => {
        axios.post(`http://localhost:3001/users/books/${idCooked}/${writervalue}/`, {
            title: titlevalue,
            cover: covervalue,
            createdAt: createdAt
        })
    }
    deleta(id)
    posta(titlevalue, writervalue, covervalue)
}