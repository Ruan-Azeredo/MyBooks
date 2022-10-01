import Cookies from "js-cookie";
import { createContext, useState } from "react";


const AuthContext = createContext()

export function AutenticaçãoProvider(props) {

    const [iduserglobal, setIduserglobal] = useState()
    const [photoglobal, setPhotoglobal] = useState()
    const [nameglobal, setNameglobal] = useState()

    if (iduserglobal) {
        Cookies.set('MyBook-idUser', iduserglobal, { expires: 7 })
        Cookies.set('MyBook-photoUser', photoglobal, { expires: 7 })
        Cookies.set('MyBook-nameUser', nameglobal, { expires: 7 })
    }
    const idCooked = Cookies.get('MyBook-idUser')
    const photoCooked = Cookies.get('MyBook-photoUser')
    const nameCooked = Cookies.get('MyBook-nameUser')
    console.log('idCooked:',idCooked)

    return (
        <AuthContext.Provider value={{
            nameCooked,
            photoCooked,
            idCooked,
            setIduserglobal,
            setPhotoglobal,
            setNameglobal
        }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext