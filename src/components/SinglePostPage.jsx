import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectPost } from '../store/selectors';
import { ReactionButtons } from '../features/ReactionButtons';

export const SinglePostPage = () => {
    const { postId } = useParams()
    const post = useSelector(state => selectPost(state, postId));

    if (!post) {
        return (
          <section>
            <h2>Post not found!</h2>
          </section>
        )
      }
    
      return (
        <section>
          <article className="post">
            <h2>{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <ReactionButtons post={post} />
          </article>
        </section>
      )
}

