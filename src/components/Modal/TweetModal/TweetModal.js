import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import classNames from "classnames"
import { Close } from "../../../utils/Icons"
import { addTweetApi } from '../../../api/tweet';

import "./TweetModal.scss"
import { toast } from 'react-toastify';

export default function TweetModal(props) {

    const { show, setShow } = props;
    const [ message, setMessage ] = useState("")
    const maxLength = 280

    const onSubmit = e => {
        e.preventDefault();

        if(message.length > 0 && message.length <= maxLength) {
            addTweetApi(message)
                .then(response => {
                    console.log(response);
                    if(response?.code >= 200 && response?.code < 300) {
                        toast.success(response.message);
                        setShow(false);
                        window.location.reload()
                    }
                })
                .catch(() => {
                    toast.warning("Error al enviar el tweet.")
                })
        }
    }

    return (
        <Modal
            className="tweet-modal"
            show={show}
            onHide={() => setShow(false)}
            centered
            size="lg"
        >
            <Modal.Header>
                <Modal.Title>
                    <Close onClick={() => setShow(false)} />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Control
                        as="textarea"
                        rows="6"
                        placeholder="¿Que estas pensando?"
                        onChange={e => setMessage(e.target.value) }
                    />
                    <span
                        className={classNames("count", {
                            error:message.length > maxLength,
                        })}
                    >
                        {message.length}
                    </span>
                    <Button
                        type="submit"
                        disabled={message.length > maxLength || message.length < 1}    
                    >
                        Twittear
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    )
}
