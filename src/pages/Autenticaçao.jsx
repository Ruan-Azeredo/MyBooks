import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import Router from 'next/router'
import { useState } from 'react'
import app from '../Services/firebase'
const axios = require('axios')

export default function Autenticação() {

    const [iduser, setIduser] = useState()

    const [namevalue, setNamevalue] = useState()
    const [emailvalue, setEmailvalue] = useState()
    const [passwordvalue, setPasswordvalue] = useState()

    const getName = (event) => setNamevalue(event.target.value)
    const getEmail = (event) => setEmailvalue(event.target.value)
    const getPassword = (event) => setPasswordvalue(event.target.value)

    const alreadyRegistered = (name, email, password, photoURL = null) => {
        axios.get(`http://localhost:3001/users/alreadyregistered/${email}`)
            .then((result) => {
                if (result.data == 'email não cadastrado') {
                    create(name, email, password, photoURL)
                } else {
                    setIduser(result.data[0].id)
                }
            })
    }
    
    const create = (name, email, uid, photoURL = null) => {
        axios.post("http://localhost:3001/users/create", {
            name: name,
            email: email,
            password: uid,
            photo: photoURL
        }).then((result) => {
            setIduser(result.data.id)
        })
    }

    const handleGoogleSingIn = () => {

        const auth = getAuth(app)

        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
            const google = result.user
            alreadyRegistered(google.displayName, google.email, google.uid, google.photoURL)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    console.log('iduser: ', iduser)

    return (
        <>
            <label>Nome</label>
            <input type="text" onChange={getName}/>
            <label>Email</label>
            <input type="text" onChange={getEmail}/>
            <label>Senha</label>
            <input type="text" onChange={getPassword}/>
            <button onClick={() => alreadyRegistered(namevalue, emailvalue, passwordvalue)}>Entrar com Email e Senha</button>
            <br/>
            <button onClick={handleGoogleSingIn}>Entrar com Google</button>
        </>
    )
}