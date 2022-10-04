import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faComment} from "@fortawesome/free-solid-svg-icons"
import "./SignInSignUp.scss"

export default function SignInSingUp() {
    return (
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent />
                <RightComponent />
            </Row> 
        </Container>
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

function RightComponent(){
    return(
        <Col className="signin-signup__right" xs={6}>
            <h2>Right Component</h2>
        </Col>
    );
}