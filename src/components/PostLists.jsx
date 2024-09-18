import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectUserById, selectCurrentUser } from '../store/selectors';
import { selectCurrentUsername } from '../store/selectors';
import { Link } from 'react-router-dom'
import { ReactionButtons } from '../features/ReactionButtons';

export const PostsList = () => {
    const currentUser = useSelector(selectCurrentUsername);
    const posts1 = useSelector(state => selectUserById(state,currentUser));
    const posts = useSelector(selectCurrentUser);
    console.log("currentUser = ", posts);

    if (!posts) {
      return (
        <section>
          <h2>Post not found!</h2>
        </section>
      )
    }

    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <ReactionButtons post={post} />
        </article>
    ));

    return (
      <section className="posts-list">
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    )
}