import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import Router from 'next/router'
import { useContext, useState } from 'react'
import InputLoginComponent from '../components/InputLoginComponent'
import AuthContext from '../Context/AutenticaçãoContext'
import app from '../Services/firebase'
// import { search.png } from '../public/img/'
const axios = require('axios')

export default function Autenticação(props) {

    const {setIduserglobal, setPhotoglobal, setNameglobal} = useContext(AuthContext)

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
                    setIduserglobal(result.data[0].id)
                    setPhotoglobal(result.data[0].photo)
                    setNameglobal(result.data[0].name)
                    Router.push('/Inside/Insideindex')
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
            setIduserglobal(result.data.id)
            setPhotoglobal(result.data.photo)
            setNameglobal(result.data.name)
            Router.push('/Inside/Insideindex')
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

    return (
        <div className={`flex h-screen items-center justify-center`}>

            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img src="https://source.unsplash.com/random" alt="" className={`h-screen w-full object-cover`} />
            </div>

            <div className={`m-10 w-full mb:w-1/2 lg:w-1/3`}>
                <h1 className={`text-3xl font-bold mb-5`}>Entre ou Cadastre-se</h1>

                <div className={`flex flex-col`}>
                    <label>Nome</label>
                    <InputLoginComponent type={'text'} onChange={getName} />
                    <label>Email</label>
                    <InputLoginComponent type={'email'} onChange={getEmail} />
                    <label>Senha</label>
                    <InputLoginComponent type={'password'} onChange={getPassword} />
                </div>    
                
                <button onClick={() => alreadyRegistered(namevalue, emailvalue, passwordvalue)} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>Entrar com Email e Senha</button>

                <hr className={`my-6 border-gray-300 w-full`} />

                <button onClick={handleGoogleSingIn} className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 mt-6 flex flex-row justify-center`}>
                    <div>Entrar com Google</div>
                    <img src="https://img.icons8.com/fluency-systems-filled/344/google-logo.png" alt="" className='invert w-6 h-6 ml-5'/>
                </button>
            </div>

        </div>
    )
}