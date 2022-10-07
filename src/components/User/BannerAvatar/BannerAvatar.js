import React from 'react'
import { Button } from 'react-bootstrap';
import { API_HOST } from '../../../utils/constant';
import "./BannerAvatar.scss"

export default function BannerAvatar(props) {
    const { user, loggedUser } = props;

    const bannerUrl = user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}` : null;

    const avatarUrl = user?.avatar
        ? `${API_HOST}/obtenerAvatar?id=${user.id}`
        : <img src='https://res.cloudinary.com/dainl1ric/image/upload/v1665178079/usernolog_xxdhpn.jpg' alt=''/>;

    return (
        <div 
            className='banner-avatar'
            style={{ backgroundImage: `url('${bannerUrl}')` }}
        >
            <div 
                className='avatar'
                style={{ backgroundImage: `url('${avatarUrl}')` }} />

            {user && (
                <div className='options'>
                    { loggedUser._id === user.id && <Button>Editar perfil</Button> }
                    {loggedUser._id !== user.id && <Button>Seguir</Button>}
                </div>
                
            )}
            
        </div>
    )
}
