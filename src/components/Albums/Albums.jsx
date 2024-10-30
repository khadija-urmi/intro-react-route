import { key } from 'localforage';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Albums = () => {
    const albums = useLoaderData();
    console.log(albums)

    return (
        <div>
            <h3>all albums: {albums.length}</h3>
            <div className="grid grid-cols-3 gap-3">
                {
                    albums.map(album => (
                        <div key={album.id} className="card bg-red-100 w-96 shadow-xl">
                            <h2 className="card-title">Album ID: {album.id}</h2>
                            <p>{album.title}</p>
                            <Link to={`/albums/${album.id}`}>
                                <button className="p-2 bg-red-400 rounded-lg">Show Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Albums;