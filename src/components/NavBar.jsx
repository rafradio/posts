import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAuthor, selectCurrentUser } from '../store/selectors';
import { userLoggedOut } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(selectCurrentAuthor);
  const user = useSelector(selectCurrentAuthor);
  const isLoggedIn = !!user;

  let navContent = null;

  if (isLoggedIn) {
    const onLogoutClicked = () => {
      dispatch(userLoggedOut());
      navigate('/');
    }
    navContent = (
      <div className="navContent">
        <div className="navLinks">
          <Link to="/posts">Posts</Link>
        </div>
        <div className="userDetails">
          <button className="button small" onClick={onLogoutClicked}>
            Log Out {user.name}
          </button>
        </div>
      </div>
    )
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        {navContent}
      </section>
    </nav>
  )
}
