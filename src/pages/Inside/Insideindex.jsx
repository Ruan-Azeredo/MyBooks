import axios from "axios"
import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../Context/AutenticaçãoContext"
import TrataWriter from "../../functions/TrataWriter"

export default function Insideindex() {

    // const { iduserglobal } = useContext(AuthContext)
    const iduserglobal = 2

    const [books, setBooks] = useState()
    const [writers, setWriters] = useState()


    useEffect(() => {
        if (iduserglobal == null) {
            Router.replace('/')
        } else {
            axios.get(`http://localhost:3001/users/books/${iduserglobal}`)
            .then((result) => setBooks(result.data))
            
            axios.get(`http://localhost:3001/users/writers/${iduserglobal}`)
            .then((result) => setWriters(result.data))
        }
    }, [])

    return (
        <>
            <div>Ola usuario de id {iduserglobal}</div>
            {books?.map(resp => (
                <li key={resp.id}>
                    <div>{ resp.cover }</div>
                    <div>{resp.title}</div>
                    <div>{TrataWriter(resp.writer_id, writers)}</div>
                </li>
            ))}
        </>
    )
    
}