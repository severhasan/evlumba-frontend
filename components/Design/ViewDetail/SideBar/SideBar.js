import React from 'react';

import MiniDesignCard from '../../MiniDesignCard/MiniDesignCard';
import classes from './Sidebar.module.css';

const Sidebar = props => {
    const { designs } = props;

    return (
        <div className={classes.Sidebar}>
            {
                designs.map(d => (
                    <div key={d._id} className='mb-3'>
                        <MiniDesignCard {...d} />
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar;