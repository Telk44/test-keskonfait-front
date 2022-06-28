import React from "react";
import{ useForm} from "react-hook-form";


import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    const {handleSubmit, register, formState : {errors}} = useForm()
    const navigate = useNavigate()

    function onSubmit (formData) {
        console.log(formData)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:8080/auth/login', requestOptions)
            .then(response => response.json())
            .then (response => {
                if (response.userId && response.token) {
                    localStorage.setItem("userId", response.userId)
                    localStorage.setItem("token", response.token)
                    console.log(localStorage)
                    navigate('/profil')
                }
                else {
                    alert("mot de passe incorrect")
                }
            })
            .catch(error => console.log(error))


    }

    return (
        <div>
            <div>
                <p>Pas encore de compte ? <Link to="/signup">Inscrivez-vous</Link></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label> Email</label>
                    <input  type="email" id="email" autoComplete='none' {...register("email", {required : true}) }/>
                </div>
                <div className="form-group">
                    <label> Mot de passe</label>
                    <input type="password" id="password" autoComplete='none' {...register("password",{required : true, })}/>
                    {errors.password && <p> N'oubliez pas votre mot de passe</p> }
                </div>
                <button type="submit">Se connecter</button>
            </form>

        </div>
    )
}
