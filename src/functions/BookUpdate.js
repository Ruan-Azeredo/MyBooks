import BookCreate from './BookCreate'
import BookDelete from './BookDelete'

const axios = require('axios')

const BookUpdate = (idCooked, writer_id_original, writer_id_novo, id, title_original, title_novo, file, file_name, file_url) => {

    if (writer_id_novo == writer_id_original || writer_id_novo == undefined) {
        
        axios.put(`http://localhost:3001/users/books/${idCooked}/${writer_id_original}/${id}/${title_novo}/${file_name}`, file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    } else {
        BookDelete(id, false)
        if (title_novo) {
            BookCreate(idCooked, writer_id_novo, title_novo, file, file_name)
        } else {
            BookCreate(idCooked, writer_id_novo, title_original, file, file_name)
        }
    }    
}

export default BookUpdate