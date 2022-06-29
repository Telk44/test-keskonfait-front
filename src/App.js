
import Navbar from "./components/Navbar/Navbar"
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Activities from "./components/Activities/Activities"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup";
import Profil from "./components/Profil/Profil";
import Account from "./components/Profil/Account";
import AuthContextProvider from "./contexts/Auth";

function App() {

    return (

        <div className="App">
            <AuthContextProvider>
                <Navbar />
            </AuthContextProvider>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </div>


    );


}

export default App;


