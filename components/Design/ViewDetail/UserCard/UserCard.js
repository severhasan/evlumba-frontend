import React from 'react';

const UserCard = props => {
    const { id, username } = props;

    return (
        <div>
            {username}
        </div>
    )
}

export default UserCard;