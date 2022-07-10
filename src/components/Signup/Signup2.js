import React, {useContext, useRef, useState} from "react";

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
            const cred = await signUp (
                inputs.current[0].value,
                inputs.current[1].value,
                inputs.current[2].value,
                inputs.current[3].value,
                inputs.current[4].value,
            )
            formRef.current.reset(); //vide les inputs quand qq inscrit
            setValidation("")
            // console.log(cred )
            toggleModals("close")
            navigate("/private/private-home")

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
        <>

                <div className="position-fixed top-0 vw-100 vh-100">
                    <div className="w-100 h-100 bg-dark bg-opacity-75">
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Inscription</h5>
                                </div>
                                <div className="modal-body">
                                    <form ref={formRef} onSubmit={ handleForm  } className="sign-up-form">
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
                </div>
        </>
    )
}