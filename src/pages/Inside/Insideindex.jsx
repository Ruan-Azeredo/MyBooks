import axios from "axios"
import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../Context/AutenticaçãoContext"

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

    //Tratamento de dados: pega o writer_id que vem de books, e o compara com os ids dos escritores para pegar o nome referente a eles, assim, passamos os ids dos escritores e retornamos os nomes do sescritores.
    const func = (writer_id, y = 0, respss = null) => {
    
        if (writers[y].id == writer_id) {
            respss = writers[y].name
            console.log('resp:', respss)
            return respss
        }
        
        if (writers[y+1] != null) {
            y = y +1
            return func(writer_id, y, respss)
        }


    }

    return (
        <>
            <div>Ola usuario de id {iduserglobal}</div>
            {books?.map(resp => (
                <li key={resp.id}>
                    <div>{ resp.cover }</div>
                    <div>{resp.title}</div>
                    <div>{func(resp.writer_id)}</div>
                </li>
            ))}
        </>
    )
    
}