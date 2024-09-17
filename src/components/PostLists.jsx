import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../store/selectors';
import { Link } from 'react-router-dom'
import { ReactionButtons } from '../features/ReactionButtons';

export const PostsList = () => {
    const posts = useSelector(selectPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
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