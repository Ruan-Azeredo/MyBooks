import { createContext, useState } from "react";


const AuthContext = createContext()

export function AutenticaçãoProvider(props) {

    const [iduserglobal, setIduserglobal] = useState()

    return (
        <AuthContext.Provider value={{iduserglobal, setIduserglobal}}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext