const axios = require('axios')

const WriterUpdate = (idCooked, id, autor) => {
    axios.put(`http://localhost:3001/users/writers/${idCooked}/${id}`, {
        name: autor
    })
}

export default WriterUpdate