import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name } = user;
    return (
        <div className="card bg-red-100 w-96 shadow-xl ">

            <h2 className="card-title">{id}</h2>
            <p>{name}</p>
            <Link to={`/user/${id}`}><button className='p-2 bg-red-400 rounded-lg'>Show Detail</button></Link>

        </div>
    );
};

export default User;