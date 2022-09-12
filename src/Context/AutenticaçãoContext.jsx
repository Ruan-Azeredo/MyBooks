import { createContext, useState } from "react";


const AuthContext = createContext()

export function AutenticaçãoProvider(props) {

    const [iduserglobal, setIduserglobal] = useState()
    const [photoglobal, setPhotoglobal] = useState()

    return (
        <AuthContext.Provider value={{
            iduserglobal,
            setIduserglobal,
            photoglobal,
            setPhotoglobal
        }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext