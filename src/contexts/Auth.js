import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {

    const [auth, setAuth] = useState(true)

    const toggleAuth = () => {
        setAuth(!auth)
    }

    return (
        <AuthContext.Provider value={{toggleAuth,auth}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;

