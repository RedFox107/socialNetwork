import React from 'react';
import s from './usersStyle.module.css';
import {NavLink} from 'react-router-dom';
import API_prototype from "../../API/API";
import Paginator from "./Paginator";

const fixUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmWTBYno5e6POwsWXxUPYv0qYj3EcBbLkZfyTeshTg4ejMXv2q';
const User = ({user,followingInProgress,follow,unfollow,...props}) => {
    let u =user;
    return (
        <div key={props.key}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}><img src={(u.photos.small) ? u.photos.small : fixUrl}
                                                                      className={s.photo}/></NavLink>
                </div>
                <div>
                    {u.followed
                        ?
                        <button disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    unfollow(u.id)
                                }}>UnFollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    follow(u.id)
                                }}>Follow </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"u.location.country"},
                    </div>
                    <div>
                        {"u.location.city"}
                    </div>
                </span>
            </span>)) }
        </div>
    );
}

export default User;