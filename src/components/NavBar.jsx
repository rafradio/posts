import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAuthor } from '../store/selectors';
import { userLoggedOut } from '../features/auth/authSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentAuthor);
  const isLoggedIn = !!user;

  let navContent = null;

  if (isLoggedIn) {
    const onLogoutClicked = () => {
      dispatch(userLoggedOut())
    }
    navContent = (
      <div className="navContent">
        <div className="navLinks">
          <Link to="/posts">Posts</Link>
        </div>
        <div className="userDetails">
          <button className="button small" onClick={onLogoutClicked}>
            Log Out
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
