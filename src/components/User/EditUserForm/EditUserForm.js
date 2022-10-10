import React, { useState, useCallback } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es"
import { useDropzone } from "react-dropzone"
import { API_HOST } from "../../../utils/constant"
import { Camara } from "../../../utils/Icons"

import "./EditUserForm.scss"

export default function EditUserForm(props) {

    const { user, setShowModal } = props
    const [ formData, setFormData ] = useState(initialValue(user))
    const [ bannerUrl, setBannerUrl ] = useState(
        user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}`: null
    );

    const [ bannerFile, setBannerFile ] = useState(null);

    const onDropBanner = useCallback(acceptedFile => {
        const file = acceptedFile[0]
        setBannerUrl(URL.createObjectURL(file));
        setBannerFile(file);
    })

    const {
        getRootProps: getRootBannerProps,
        getInputProps: getInputBannerProps,
        } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop: onDropBanner,
    });

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className='edit-user-form'>
            <div
                className="banner" 
                style={{ backgroundImage: `url('${bannerUrl}')` }}
                {...getRootBannerProps()}
            >
                <input {...getInputBannerProps()} />
                <Camara />
            </div>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                className="input-form"
                                type="text"
                                placeholder="nombre"
                                name="nombre"
                                defaultValue={formData.nombre}
                                onChange={onChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                className="input-form"
                                type="text"
                                placeholder="apellidos"
                                name="apellidos"
                                defaultValue={formData.apellidos}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        row="3"
                        placeholder="agregar biografia"
                        type="text"
                        name="biografia"
                        defaultValue={formData.biografia}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        className="input-form"
                        placeholder="sitio web"
                        type="text"
                        name="sitioWeb"
                        defaultValue={formData.sitioWeb}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group>
                    <DatePicker 
                        placeholder="Fecha de nacimiento"
                        locale={es}
                        selected={new Date(formData.fechaNacimiento)}
                        onChange={value => 
                            setFormData({ ...formData, fechaNacimiento: value })
                        }
                    />
                </Form.Group>

                <Button className="btn-submit" variant="primary" type="submit">
                    Actualizar
                </Button>
            </Form>
        </div>
    )
}

function initialValue(user) {
    return {
        nombre: user.nombre || "",
        apellidos: user.apellidos || "",
        biografia: user.biografia || "",
        ubicacion: user.ubicacion || "",
        sitioWeb: user.sitioWeb || "",
        fechaNacimiento: user.fechaNacimiento || ""
    }
}