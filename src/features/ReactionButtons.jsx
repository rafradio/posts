import { useDispatch, useSelector } from 'react-redux';
import { reactionAdded } from './postSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    tada: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

export const ReactionButtons = (props) => {
    const dispatch = useDispatch()
    let postId = props.post.id

    const reactionButtons = Object.entries(reactionEmoji).map(
        ([stringName, emoji]) => {
            const reaction = stringName
            return (
                <button
                  key={reaction}
                  type="button"
                  className="muted-button reaction-button"
                  onClick={() => {
                        console.log("hello button = ", postId);
                        dispatch(reactionAdded({ postId, reaction }));

                    }
                }
                >
                    {emoji} {props.post.reactions[reaction]}
                </button>
            )
        }
    )

    return <div>{reactionButtons}</div>
}