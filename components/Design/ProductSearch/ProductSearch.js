import React, { useState } from 'react';
import classes from './ProductSearch.module.css';

import Product from '../Product/Product';

const ProductSearch = props => {
    const products = [
        {
            src: 'https://www.dropbox.com/s/z4vgq6f4jblqcsz/lamp.jpg?dl=1',
            description: 'Lamba',
            _id: '5f0c52cecb69ba2540b693cc'
        },
        {
            src: 'https://www.dropbox.com/s/ei1m5pr905rvxg3/table.jpg?dl=1',
            description: 'Masa',
            _id: '5f36adde3acb3d45534956ed'
        },
        {
            
            src: 'https://www.dropbox.com/s/hw86uz7ucz5lvst/washing-machine.webp?dl=1',
            description: 'Çamaşır Makinesi',
            _id: '5f36ade53acb3d45534956ee'
        }
    ]

    return (
        <div className={classes.Wrapper}>
            <div className={classes.ProductSearch}>
                <div className='position-relative'>
                    <div className={classes.Header}>
                        <div>
                            <h2 className={classes.Title}>Ürün Seçin</h2>
                        </div>

                        <div className={classes.SearchContainer}>
                            Ürün ara: 
                            <input className={classes.Search} type='text' placeholder='Burası henüz çalışmıyor' />
                        </div>
                    </div>

                    <div className={classes.Body + ' row position-relative'}>
                        <div className={classes.Sidebar + ' col-sm-12 col-md-2'}>
                            <h4>Filtrele</h4>
                            <div>Beğendiğim Ürünler</div>
                            <div>Koleksiyonlar</div>
                            <div>İstek Listem</div>
                        </div>
                        
                        <div className='col-sm-12 col-md-10'>
                            <div className='d-flex justify-content-around flex-wrap'>
                                {
                                    products.map(p => <div key={p._id} className='mx-2 mb-4'><Product selected={props.selected} selectProduct={props.selectProduct} searchProduct={props.searchProduct} product={p} /> </div>)
                                }
                            </div>
                        </div>

                    </div>
                </div>

                {
                    props.selected === "" ?
                    <button title='Henüz bir ürün seçmediniz' className={classes.ConfirmBtn + ' btn btn-secondary'}>Seçimi Tamamla</button>
                    : <button onClick={props.completeProductSelection} className={classes.ConfirmBtn + ' btn btn-primary'}>Seçimi Tamamla</button>
                }
            </div>
                                
            <div className={classes.Shadow} onClick={props.deactivateProductSearch}>

            </div>
        </div>
    );
}

export default ProductSearch;