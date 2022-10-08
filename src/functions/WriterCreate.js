const axios = require('axios')

const WriterCreate = (idCooked,autor) => {
    axios.post(`http://localhost:3001/users/writers/${idCooked}/`, {
        name: autor
    })
}

export default WriterCreate