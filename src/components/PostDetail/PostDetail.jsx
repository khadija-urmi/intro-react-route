import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetail = () => {
    const postDetail = useLoaderData();
    const { body, title, userId } = postDetail;
    const navigate = useNavigate();
    const handleGOback = () => {
        navigate(-1);
    }
    return (


        <div className="card  bg-yellow-400 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Name of job is {title}</h2>
                <p>Description: {body}</p>
                <p>UserId is {userId}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleGOback} className="btn btn-primary">
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;