import React, { useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faComment} from "@fortawesome/free-solid-svg-icons"

import BasicModal from "../../components/Modal/BasicModal"
import SignUpForm from '../../components/SignUpForm'
import SignInForm from '../../components/SignInForm'

import "./SignInSignUp.scss"

export default function SignInSingUp(props) {

    const { setRefreshCheckLogin } = props;
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }

    return (
        <>
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent />
                <RightComponent 
                    openModal={openModal}
                    setShowModal={setShowModal}
                    setRefreshCheckLogin={setRefreshCheckLogin}
                />
            </Row> 
        </Container>
        <BasicModal
            show = { showModal }
            setShow = { setShowModal }
        >
            {contentModal}
        </BasicModal>
        </>
    );
}

function LeftComponent(){
    return(
        <Col className="signin-signup__left" xs={6}>
            <img src='https://res.cloudinary.com/dainl1ric/image/upload/v1664857040/iconoblancotwitter_ia1fib.png' alt='icon-twitter'/>
            <div>
                <h2>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUser} />
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faComment} />
                </h2>
                
            </div>
        </Col>
    )
}

function RightComponent(props){

    const { openModal, setShowModal, setRefreshCheckLogin } = props
    return(
        <Col className="signin-signup__right" xs={6}>
            <div>
                <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1664856851/iconotwitter_efxgl5.png" alt="" />
                <h1>What is happening now?</h1>
                <h3>Join Twitter today!</h3>
                <Button
                    variant="outline-primary"
                    onClick={() =>
                        openModal(
                            <SignInForm setRefreshCheckLogin={setRefreshCheckLogin} />)}
                >
                    Iniciar sesion
                </Button>
                <Button
                    variant="primary"
                    onClick={() => openModal(<SignUpForm setShowModal={setShowModal}/>)}
                >
                    Registrate
                </Button>
            </div>
        </Col>
    );
}