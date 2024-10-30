import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const AllPost = () => {
    const allPost = useLoaderData();
    //console.log(allPost);
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>All users:{allPost.length}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    allPost.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default AllPost;