import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import BasicLayout from '../../layout/BasicLayout'

import "./Users.scss"

export default function Users(props) {

    const { setRefreshCheckLogin } = props

    return (
        <BasicLayout className="users" title="Usuarios">
            <div className="users__title">
                <h2>Usuarios</h2>
                <input
                    type="text"
                    placeholder='buscar' />
            </div>
            <ButtonGroup className="users__options">
                <Button>Siguiendo</Button>
                <Button>Nuevos</Button>
            </ButtonGroup>
        </BasicLayout>
    )
}
