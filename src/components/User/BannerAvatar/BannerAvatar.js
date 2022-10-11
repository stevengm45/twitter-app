import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { API_HOST } from '../../../utils/constant';
import ConfigModal from '../../Modal/ConfigModal';
import EditUserForm from '../EditUserForm';
import "./BannerAvatar.scss"
import { checkFollowApi, followUserApi, unfollowUserApi } from "../../../api/follow";

export default function BannerAvatar(props) {
    const { user, loggedUser } = props;
    const [showModal, setShowModal] = useState(false)
    const [ following, setFollowing ] = useState(false)
    const [ reloadFollow, setReloadFollow ] = useState(false);

    const bannerUrl = user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}` : null;

    const avatarUrl = user?.avatar
        ? `${API_HOST}/obtenerAvatar?id=${user.id}`
        : <img src='https://res.cloudinary.com/dainl1ric/image/upload/v1665178079/usernolog_xxdhpn.jpg' alt=''/>;

    useEffect(() => {
        if(user) {
            checkFollowApi(user?.id).then(response => {
                if(response?.status) {
                    setFollowing(true);
                } else {
                    setFollowing(false);
                }
            });
            setReloadFollow(false);
        }
    }, [user, reloadFollow])

    const onFollow = () => {
        followUserApi(user.id).then(() => {
            setReloadFollow(true);
        })
    }

    const onUnFollow = () => {
        unfollowUserApi(user.id).then(() => {
            setReloadFollow(true);
        })
    }
    
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
                    { loggedUser._id === user.id && <Button onClick={() => setShowModal(true)}>Editar perfil</Button> }
                    
                    { loggedUser._id !== user.id && (
                        following !== null && (
                            (following ? (
                                <Button onClick={onUnFollow} className="unfollow">
                                    <span>Siguiendo</span>
                                </Button>
                            ) : (
                                <Button onClick={onFollow}>Seguir</Button>)
                        ))
                    )}
                </div>
                
            )}
            <ConfigModal
                show={showModal}
                setShow={setShowModal}
                title="Editar perfil"
            >
                <EditUserForm user={user} setShowModal={setShowModal} />
            </ConfigModal>
        </div>
    )
}
