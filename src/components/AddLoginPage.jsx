import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../store/selectors';
import { userLoggedIn } from '../features/auth/authSlice';
import { Navbar } from './NavBar';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.currentTarget.elements.username.value;
        dispatch(userLoggedIn(username));
        navigate('/posts');
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
    ));

    return (
        <>
            <Navbar />
            <section>
                <h2>Welcome to Tweeter!</h2>
                <h3>Please log in:</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">User:</label>
                    <select id="username" name="username" required>
                    <option value="">Выберите</option>
                    {usersOptions}
                    </select>
                    <button>Log In</button>
                </form>
            </section>
        </>
    )
}