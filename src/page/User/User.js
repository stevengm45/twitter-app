import React, { useEffect, useState } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserApi } from '../../api/user'

import BasicLayout from '../../layout/BasicLayout'
import BannerAvatar from '../../components/User/BannerAvatar'
import userAuth from '../../hooks/useAuth'
import InfoUser from '../../components/User/InfoUser'

import "./User.scss"

export default function User(props) {

    const { id } = useParams();
    const [ user, setUser ] = useState(null);
    const loggedUser = userAuth()

    useEffect(() => {
        getUserApi(id)
        .then(response => {
            if(!response) toast.error("El usuario que has visitado no existe");
            setUser(response)
        }).catch(() => {
            toast.error("El usuario que has visitado no existe")
        })
    });

    return (
        <BasicLayout className="user">
            <div className="user__title">
                <h2>
                    {user ? `${user.nombre} ${user.apellidos}` : "Usuario no existe"}</h2>            
            </div>
            <BannerAvatar user={user} loggedUser={loggedUser} />
            <InfoUser user={user} />
            <div className="user__tweets">Lista de tweets</div>
        </BasicLayout>
    )
}

