const axios = require('axios')

export default function BookUpdate(id, titlevalue, covervalue){
    axios.put(`http://localhost:3001/users/books/1/1/${id}`, {
        title: titlevalue,
        cover: covervalue
    })
}