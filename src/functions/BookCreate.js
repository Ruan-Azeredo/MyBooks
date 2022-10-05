const axios = require('axios')

const BookCreate = (idCooked, writer_id, title, file, name) => {

    axios.post(`http://localhost:3001/users/books/${idCooked}/${writer_id}/${title}/${name}`, file, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })       
}

export default BookCreate