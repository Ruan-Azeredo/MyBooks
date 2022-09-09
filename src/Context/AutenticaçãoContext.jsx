import { createContext, useState } from "react";


const AuthContext = createContext()

export function AutenticaçãoProvider(props) {

    const [iduserglobal, setIduserglobal] = useState()

    const idglobal = (id) => {
        setIduserglobal(id)
        console.log('id do usuario global: ', iduserglobal)
    }

    return (
        <AuthContext.Provider value={{iduserglobal, setIduserglobal}}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext