import React from 'react';

import Heart from './Heart/Heart'
import Collection from './Collection/Collection';

const HeartAndCollection = props => {
    const { likedByUser, likes, inCollection } = props;

    return (
        <>
            <Heart likedByUser={likedByUser} likes={likes} />
            <span style={{marginLeft: "20px"}}>
                <Collection inCollection={inCollection} />
            </span>
        </>
    )
}

export default HeartAndCollection;