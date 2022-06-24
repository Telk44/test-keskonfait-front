// import {useState, useEffect} from 'react'
// import Signup from "./components/Signup";
import Navbar from "./components/Navbar/Navbar"
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Activities from "./components/Activities/Activities"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Signup />





        </div>

    );


}

export default App;


// const [dataImg, setDataImg] = useState();
//
// useEffect(() => {
//     fetch('https://api.thecatapi.com/v1/images/search')
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             setDataImg(data[0].url)
//         })
// }, [])
//
// return (
//     <div className="App">
//         {dataImg && <img src={dataImg} alt='cat' style={{width: "500px"}}/>}
//
//     </div>
//
// );