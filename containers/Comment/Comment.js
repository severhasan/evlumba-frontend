import React from 'react';

import CommentCard from '../../components/Comment/CommentCard/CommentCard';
import Subcomments from '../../components/Comment/Subcomments/Subcomments';
import classes from './Comment.module.css';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const CommentContainer = props => {
    const { comments } = props;

    return (
        <div className={classes.Container}>
            <div className={classes.LeftMargin}>
                <QuestionAnswerIcon className={classes.Icon} />
            </div>
            <div className={classes.Comments}>
                {
                    comments.map(c => (
                        <div key={c._id}>
                            <CommentCard user={c.user} content={c.content} id={c._id} likedByUser={c.likedByUser} likes={c.likes} />
                            {
                                c.subcomments.length > 0 ?
                                <Subcomments subcomments={c.subcomments} /> : null
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    )
}


export default CommentContainer;