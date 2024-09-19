import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../features/postSlice';
import { selectAllUsers } from '../store/selectors';
import { selectCurrentAuthor } from '../store/selectors';

export const AddPostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const userId = useSelector(selectCurrentAuthor);
    console.log('UserID post form = : ', userId);

    const handleSubmit = (e) => {
        e.preventDefault()

        const { elements } = e.currentTarget
        const title = elements.postTitle.value
        const content = elements.postContent.value
        console.log('Values: ', userId);

        // console.log('Values: ', { title, content });
        // const newPost = {
        //     id: nanoid(),
        //     title,
        //     content
        // }
        dispatch(postAdded(title, content, userId.id))

        e.currentTarget.reset()
    }

    const usersOptions = users.map(user => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))

    return (
        <section>
          <h2>Add a New Post</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" id="postTitle" defaultValue="" required />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" name="postAuthor" required>
              <option value="">Выберите</option>
              {usersOptions}
            </select>
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              defaultValue=""
              required
            />
            <button>Save Post</button>
          </form>
        </section>
      )
    
}