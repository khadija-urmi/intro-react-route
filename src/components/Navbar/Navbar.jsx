import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='w-10/12 mx-auto space-x-4 flex justify-center items-center text-4xl font-semibold'>
                <span>My website</span>
                <Link to='/'>Home</Link>
                <NavLink to='/users'
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-inherit"}
                >Users</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to='/posts'>All-Posts</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to='/contact'>Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to='/About'>About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to='/albums'>Albums</NavLink>

            </nav>
        </div >
    );
};

export default Navbar;