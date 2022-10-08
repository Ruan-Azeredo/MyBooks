import { useContext } from "react"
import BooksContext from "../Context/BooksContext"

const TrataBook = (book_id, y = 0, respss = null) => {

    const { booksglobal } = useContext(BooksContext)

    const books = booksglobal

    if (books[y].id == book_id) {
        respss = books[y].url
        return respss
    }
    
    if (books[y+1] != null) {
        y = y +1
        return TrataBook(book_id, y, respss)
    }
}

export default TrataBook