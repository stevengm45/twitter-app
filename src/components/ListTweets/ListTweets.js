import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { map } from 'lodash'
import { getUserApi } from '../../api/user'
import { API_HOST } from '../../utils/constant'

import "./ListTweets.scss"

export default function ListTweets(props) {

    const { tweets } = props

    return (
        <div>
            {map(tweets, (tweet, index) => (
                <Tweet key={index} tweet={tweet} />
            ))}
        </div>
    )
}


function Tweet(props) {
    const { tweet } = props;
    const [ userInfo, setUserInfo ] = useState(null);
    const [ avatarUrl, setAvatarUrl ] = useState(null);

    // useEffect(() => {
    //     getUserApi(tweet.userId).then((response) => {
    //         setUserInfo(response);
    //         setAvatarUrl(
    //             response?.avatar
    //                 ? `${API_HOST}/obtenerAvatar?id=${response.id}`
    //                 : <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1665178079/usernolog_xxdhpn.jpg" alt="" />
    //         );
    //     });
    // }, [tweet]);


    return (
        <div className="tweet">
            <Image className="avatar" src={avatarUrl} roundedCircle />
        </div>
    )
}