import { useLoaderData } from "react-router-dom";


const UserDetail = () => {
    const user = useLoaderData();
    const { name, email, website
    } = user;
    return (

        <div className="card bg-blue-200 w-96 shadow-xl text-center">
            <h2 className="card-title">UserNAme:{name}</h2 >
            <p>Email :{email}</p>
            <p>Website :{website}</p>
        </div >

    );
};

export default UserDetail;