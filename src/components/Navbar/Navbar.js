import React, {useContext} from 'react'
import {AuthContext} from "../../contexts/AuthContext";
import NavbarConnected from "./NavbarConnected";
import NavbarDisconnected from "./NavbarDisconnected";




export default function Navbar() {

    const {auth} = useContext(AuthContext)


    console.log(auth)


    return (
        <div>
            { auth ? <NavbarConnected /> : <NavbarDisconnected /> }
        </div>
    )
}
