// import React from "react";
// import {useForm} from "react-hook-form";
// import {Link, useNavigate} from "react-router-dom";
//
//
// export default function Signup() {
//     const {handleSubmit, register, formState: {errors}} = useForm()
//
//     const navigate = useNavigate()
//
//     function onSubmit(formData) {
//
//         console.log(formData)
//         const requestOptions = {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(formData)
//         };
//         const url = 'http://localhost:5000/auth/signup'
//
//         fetch(url, requestOptions)
//             .then(response => response.json())
//             .then(json => {
//                 console.log(json)
//                 navigate('/login')
//             })
//             .catch(error => console.log(error))
//
//     }
//
//     return (
//         <div>
//             <div>
//                 <p>Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link></p>
//             </div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-group">
//                     <label> Nom </label>
//                     <input type="text" id="lastName" autoComplete='none' {...register("lastName")}/>
//                 </div>
//                 <div className="form-group">
//                     <label> Prénom</label>
//                     <input type="text" id="firstName" autoComplete='none' {...register("firstName")}/>
//                 </div>
//                 <div className="form-group">
//                     <label> Pseudo</label>
//                     <input type="text" id="userName" autoComplete='none' {...register("userName", {
//                         required: true,
//                         minLength: 3
//                     })}/>
//                     {errors.userName && <p> Le pseudo est obligatoire et doit contenir au moins 3 lettres</p>}
//                 </div>
//                 <div className="form-group">
//                     <label> Email</label>
//                     <input type="email" id="email" autoComplete='none' {...register("email", {required: true})}/>
//                 </div>
//                 <div className="form-group">
//                     <label> Mot de passe</label>
//                     <input type="password" id="password"
//                            autoComplete='none' {...register("password", {required: true,})}/>
//                     {errors.password && <p> N'oubliez pas votre mot de passe</p>}
//                 </div>
//                 <button type="submit">S'inscrire</button>
//             </form>
//         </div>
//     )
// }

// export default function Signup() {
//
//     const [userName, setUserName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     // const [formData, setFormData] = useState({
//     //     userName: "",
//     //     email: "",
//     //     password:""
//     // })
//     const handleSubmit = (e) => {
//         e.preventDefault()
//
//         let formData = {userName, email, password}
//         console.log(formData)
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         };
//         fetch('http://localhost:8080/auth/signup', requestOptions)
//             // .then(response => response.json())
//             .then(() => {
//                 console.log('new user added')
//             })
//
//             .catch(error => console.log(error))
//
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <h1> Inscription</h1>
//             <label htmlFor="userName">UserName</label>
//             <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" name="userName"
//                    id="userName"/>
//             <label htmlFor="email">Email</label>
//             <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email"/>
//             <label htmlFor="password">Password</label>
//             <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password"
//                    id="password"/>
//
//             <input type="submit" value="Submit"/>
//         </form>
//     )
//
// }


import React, { useRef, useState} from "react";
import {useNavigate} from "react-router-dom"


export default function SignUpModal() {

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([]);


    const addInputs  = el  => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault()

        // if((inputs.current[2].value.length < 3)) {
        //     setValidation("Votre pseudo doit avoir 3 caractères minimum")
        //     return;
        // }

        if((inputs.current[4].value.length || inputs.current[5].value.length) < 6) {
            inputs.current[4].focus()
            setValidation("6 characters min")
            return;
        }
        else if(inputs.current[4].value !== inputs.current[5].value) {
            setValidation("Password do not match")
            return;
        }
        try {

            formRef.current.reset(); //vide les inputs quand qq inscrit
            setValidation("")
            navigate('/login')

        } catch (err) {

            if(err.code === "501") {
                setValidation("Email format invalid")
            }
            if(err.code === "202") {
                setValidation("Email already used ")
            }
        }
    }



    return (
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
                        <div className="signup-dialog">
                            <div className="signup-content">
                                <div className="signup-header">
                                    <h5 className="signup-title">Inscription</h5>
                                </div>
                                <div className="signup-body">
                                    <form ref={formRef} onSubmit={ handleForm } className="sign-up-form">
                                        <div className="mb-3">
                                            <label htmlFor="signUpFirstName" className="form-label">Prénom</label>
                                            <input ref={addInputs} name="firstName" type="text" className="form-control" id="signUpFirstName"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpLastName" className="form-label">Nom</label>
                                            <input ref={addInputs} name="lastName" type="text" className="form-control" id="signUpLastName"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpUserName" className="form-label">Pseudo</label>
                                            <input ref={addInputs} name="email" required type="text" className="form-control" id="signUpUserName"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail" className="form-label">Email </label>
                                            <input ref={addInputs} name="email" required type="email" className="form-control" id="signUpEmail"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpPwd" className="form-label"> Mot de passe</label>
                                            <input ref={addInputs} name="pwd" required type="password" className="form-control" id="signUpPwd"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="repeatPwd" className="form-label" >Répéter le mot de passe</label>
                                            <input ref={addInputs} name="pwd" required type="password" className="form-control" id="repeatPwd"/>
                                            <p className="text-danger mt-1">{validation}</p>
                                        </div>
                                        <button className="btn btn-primary">Submit </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>



    )
}