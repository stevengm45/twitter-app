import React, { useEffect, useState } from 'react'
import { Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getUserApi } from "../../api/user"
import { API_HOST } from '../../utils/constant'
import AvatarNoFound from "../../assets/png/avatar-no-found.png";

export default function User(props) {
    const { user } = props
    const [ userInfo, setUserInfo ] = useState(null)

    useEffect(() => {
        getUserApi(user.id).then((response) => {
            setUserInfo(response);
        });
    }, [user])

    return (
        <Card as={Link} to={`/${user.id}`} className="list-users__user">
            
            <Card.Body className="card-body">
            <div>
                    <Image
                        width={64}
                        height={64}
                        roundedCircle
                        className="mr-3"
                        src={
                            userInfo?.avatar
                                ? `${API_HOST}/obtenerAvatar?id=${user.id}`
                                : AvatarNoFound
                        }
                        alt={`${user.nombre} ${user.apellidos}`}
                    />
                </div>
                <div>
                    <h5>
                        {user.nombre} {user.apellidos}
                    </h5>
                    <p>{userInfo?.biografia}</p>
                </div>

            </Card.Body>
        </Card>
    )
}
