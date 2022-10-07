import React from 'react'
import "./Home.scss"
import BasicLayout from '../../layout/BasicLayout'

export default function Home(props) {

    const { setRefreshCheckLogin } = props
    return (
        <BasicLayout className="home" setRefreshCheckLogin={ setRefreshCheckLogin }>
            <h2> Estamos en home</h2>
        </BasicLayout>
    )
}
