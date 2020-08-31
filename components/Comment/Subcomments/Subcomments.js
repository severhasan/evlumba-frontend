import React from 'react';

import CommentCard from '../CommentCard/CommentCard';
import classes from './Subcomments.module.css';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

const Subcomments = props => {
    const { subcomments } = props;

    return (
        <div className={classes.Container}>
            <div className={classes.SubcommentsMargin}>
                <SubdirectoryArrowRightIcon className={classes.Icon} />
            </div>

            <div className={classes.Subcomments}>
                {
                    subcomments.map(s => (
                        <div className={classes.Subcomment} key={s._id}>
                            <CommentCard user={s.user} content={s.content} id={s._id} likedByUser={s.likedByUser} likes={s.likes} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}


export default Subcomments;