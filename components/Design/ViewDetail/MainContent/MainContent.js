import React from 'react';

import ImageContainer from './ImageContainer/ImageContainer';
import ProductContainer from './ProductContainer/ProductContainer';
import DesignDetail from './DesignDetail/DesignDetail';
import CommentContainer from '../../../../containers/Comment/Comment';
import classes from './MainContent.module.css';

const MainContent = props => {
    const { design } = props;

    return (
        <div className={classes.Content}>
            <ImageContainer design={design} />
            <ProductContainer products={design.products} />
            <div className={classes.Detail}>
                <DesignDetail design={design} />
                <CommentContainer comments={design.comments} />
            </div>
        </div>
    )
}

export default MainContent;