import React from 'react';
import s from './usersStyle.module.css';
import {NavLink} from 'react-router-dom';
import API_prototype from "../../API/API";
import Paginator from "./Paginator";
import User from "./User";

const fixUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmWTBYno5e6POwsWXxUPYv0qYj3EcBbLkZfyTeshTg4ejMXv2q';
const Users = ({currentPage, onPageChanged, pageSize, totalUsersCount, ...props}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {
                props.users.map(u =><User
                    user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)
            }
        </div>
    );
}

export default Users;