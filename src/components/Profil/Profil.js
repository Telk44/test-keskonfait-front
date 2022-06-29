import React from "react";
import {useState, useEffect} from "react";

export default function Profil() {

    const [dataUser, setDataUser] = useState({
        id: localStorage.getItem("userId"),
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
    });

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")},
        };
        fetch('http://localhost:8080/auth/' + dataUser.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                setDataUser({
                        id: data.id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        userName: data.userName,
                        email: data.email
                    }
                )

            })
            .catch(error => console.log(error))
    })

    return (
        <div>
            <h1>Le profil de {dataUser.userName}</h1>
            <p>Mes informations</p>
            <p>Complétez et/ou modifiez vos informations sur Keskonfait</p>
            <p> Prénom: {dataUser.firstName}</p>
            <p> Nom : {dataUser.lastName}</p>
            <p> Nom d'utilisateur : {dataUser.userName}</p>
            <p> email : {dataUser.email}</p>

        </div>
    )
}