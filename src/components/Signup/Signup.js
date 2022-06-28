import React from "react";
import{ useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";



// import {useState} from "react";
//
// import {useEffect} from "react";

export default function Signup() {
    const {handleSubmit, register, formState : {errors}} = useForm()

    const navigate = useNavigate()


    function onSubmit (formData) {


        console.log(formData)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        // const url = 'https://jsonplaceholder.typicode.com/posts/1'
        const url = 'http://localhost:8080/auth/signup'

        fetch(url, requestOptions)
            .then(response => response.json())
            .then( json => {
                console.log(json)
                navigate('/login')

            })
            .catch(error => console.log(error))
        // const connection = fetch('http://localhost:8080/auth/signup', requestOptions)
        //     .then(response => {
        //         console.log(response)
        //            return  response.json()
        //         }
        //     )
        //     .then(() => {
        //         console.log('user créé')
        //         // navigate('/login')
        //
        //     })
        //     .catch(error => console.log(error))
        // console.log(connection)
    }
    return (
        <div>
            <div>
                <p>Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label> Nom </label>
                    <input  type="text" id="lastName" autoComplete='none' {...register("lastName")}/>
                </div>
                <div className="form-group">
                    <label> Prénom</label>
                    <input  type="text" id="firstName" autoComplete='none' {...register("firstName")}/>
                </div>
                <div className="form-group">
                    <label> Pseudo</label>
                    <input  type="text" id="userName" autoComplete='none' {...register("userName", {required : true, minLength : 3})}/>
                    {errors.userName && <p> Le pseudo est obligatoire et doit contenir au moins 3 lettres</p> }
                </div>
                <div className="form-group">
                    <label> Email</label>
                    <input  type="email" id="email" autoComplete='none' {...register("email", {required : true}) }/>
                </div>
                <div className="form-group">
                    <label> Mot de passe</label>
                    <input type="password" id="password" autoComplete='none' {...register("password",{required : true, })}/>
                    {errors.password && <p> N'oubliez pas votre mot de passe</p> }
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}

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