import { createContext, useState } from "react";


const AuthContext = createContext()

export function AutenticaçãoProvider(props) {

    const [iduserglobal, setIduserglobal] = useState()
    const [photoglobal, setPhotoglobal] = useState()
    const [nameglobal, setNameglobal] = useState()

    return (
        <AuthContext.Provider value={{
            iduserglobal,
            setIduserglobal,
            photoglobal,
            setPhotoglobal,
            nameglobal,
            setNameglobal
        }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext