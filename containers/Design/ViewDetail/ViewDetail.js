import React from 'react';

import MainContent from '../../../components/Design/ViewDetail/MainContent/MainContent';
import Sidebar from '../../../components/Design/ViewDetail/SideBar/SideBar';
import ProfessionalsBar from '../../../components/Design/ViewDetail/ProfessionalsBar/ProfessionalsBar';
import classes from './ViewDetail.module.css';

const ViewDetail = props => {
    const { design, recommended } = props;

    return (
        <div>
            <div className='row d-flex justify-content-between mt-4'>
                <div className='col-md-9'>
                    <MainContent design={design} />
                </div>

                <div className='col-md-3'>
                    <Sidebar designs={recommended} />
                </div>
            </div>

            <div className={classes.Professionals}>
                {/* <ProfessionalsBar /> */}
            </div>

        </div>
    )
}

export default ViewDetail;