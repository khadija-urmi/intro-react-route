import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Post = ({ post }) => {
    const { title, id } = post;

    return (
        <div className="card bg-red-100 w-96 shadow-xl ">

            <h2 className="card-title">Job no:{id}</h2>
            <p>{title}</p>
            <Link to={`/posts/${id}`}><button className='p-2
             bg-red-400 rounded-lg'>Show Detail</button></Link>

        </div>
    );
};

export default Post;