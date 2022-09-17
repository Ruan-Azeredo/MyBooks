import { createContext, useState } from "react";

const BooksContext = createContext()

export function BooksProvider(props) {
    const [booksglobal, setBooksglobal] = useState()

    return (
        <BooksContext.Provider value={{
            booksglobal,
            setBooksglobal
        }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContext