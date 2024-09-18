import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAuthor } from '../store/selectors';

export const PostAuthor = (props) => {
    
    const author = useSelector(state => selectCurrentAuthor(state, props.userId));

    return <span>by {author?.name ?? 'Unknown author'}</span>;
}
