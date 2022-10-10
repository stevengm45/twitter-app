import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faUsers, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { logoutApi } from "../../api/auth"

import "./LeftMenu.scss"
import { Button } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'

export default function LeftMenu(props) {
    const { setRefreshCheckLogin } = props

    const user = useAuth()

    const logout = () => {
        logoutApi();
        setRefreshCheckLogin(true);
    }

    return (
        <div className="left-menu">
            <img className="logo" src="https://res.cloudinary.com/dainl1ric/image/upload/v1664856851/iconotwitter_efxgl5.png" alt=""/>
            
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} /> Inicio
            </Link>
            <Link to="/users">
                <FontAwesomeIcon icon={faUsers} /> Usuarios
            </Link>
            <Link to={`/${user?._id}`}>
                <FontAwesomeIcon icon={faUser} /> Perfil
            </Link>
            <Link to="" onClick={logout}>
                <FontAwesomeIcon icon={faPowerOff} /> Salir
            </Link>

            <Button>Tweet</Button>
        </div>
    )
}
