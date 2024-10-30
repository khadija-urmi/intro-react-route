import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const SingleAlbums = () => {
    const { albumId } = useParams();
    const [album, setAlbum] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then(response => response.json())
            .then(data => {
                setAlbum(data);
                setLoading(false);
            })
            .catch(error => console.error("Error:", error));
    }, [albumId]);
    if (loading) return <p>Loading...</p>;
    return (
        <div className='card bg-red-400 p-3 m-4'>
            <h2>{album.id}</h2>
            <p>{album.title}</p>
        </div>
    );
};

export default SingleAlbums;