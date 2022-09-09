import axios from "axios"
import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../Context/AutenticaçãoContext"

export default function Insideindex() {

    const { iduserglobal } = useContext(AuthContext)

    const [writers, setWriters] = useState()


    useEffect(() => {
        if (iduserglobal == null) {
            Router.replace('/')
        } else {
            axios.get(`http://localhost:3001/users/writers/${iduserglobal}`)
            .then((result) => setWriters(result.data))
        }
    }, [])

    return (
        <>
            <div>Ola usuario de id {iduserglobal}</div>
            {writers?.map(resp => (
                <li key={resp.id}>
                    <div>{ resp.name }</div>
                </li>
            ))}
        </>
    )
    
}