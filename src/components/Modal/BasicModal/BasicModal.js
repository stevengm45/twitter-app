import React from 'react'
import { Modal } from "react-bootstrap"
import "./BasicModal.scss"

export default function BasicModal(props) {

    const { show, setShow, children } = props;
    return (
        <Modal
            className="basic-modal"
            show={show}
            onHide={() => setShow(false)}
            centered
            size="lg"
        >
            <Modal.Header>
                <Modal.Title>
                    <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1664857040/iconoblancotwitter_ia1fib.png" alt="" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}
