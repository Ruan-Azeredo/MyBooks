import { createContext, useState } from "react";


const AuthContext = createContext()

export function AutenticaçãoProvider(props) {

    return (
        <AuthContext.Provider>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext