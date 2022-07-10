import React, {createContext, useState, useEffect} from "react";
    // import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export function AuthContextProvider(props) {

    const [auth, setAuth] = useState()

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token ) {
            // const decoded = jwt_decode(token);
            // if (decoded.valid) {
                setAuth(true);
            // }
        } else {
            setAuth(false);
        }
    }, []);


    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}


