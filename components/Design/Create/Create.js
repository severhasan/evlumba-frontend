import React, { useEffect, useState } from 'react';
import axios from 'axios';
import gql from 'graphql-tag';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { useDropzone } from 'react-dropzone';
import classes from './Create.module.css';
import { CATEGORIES, SPACES, MAX_IMAGE_SIZE, DEFAULT_SELECT_VALUE } from '../../../helper/constants';
import { capitalizeEachWord, getNameWithoutExtention } from '../../../helper/functions';

import PopupTop from '../../Popup/Top';
import ProductSearch from '../ProductSearch/ProductSearch';
import Tag from '../Tag/Tag';

const PRESIGNEDURL = gql`
    query PresignedURL($model: String!, $name: String!) {
        presignedurl(model: $model, name: $name) {
            uploadURL,
            filename
        }
    }
`;

const CREATEDESIGN = gql`
    mutation CreateDesign($design: DesignInput) {
        createDesign(design: $design) {
            title
        }
    }
`;

const CreateDesign = () => {
    const [infoContent, setInfoContent] = useState('Fotoğraf yükleniyor...');
    const [showPopup, setShowPopup] = useState(false);
    const [creating, setCreating] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [currentClickPos, setCurrentClickPos] = useState({ tagX: 0, tagY: 0 });
    const [productSearchActive, setProductSearchActive] = useState(false);

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [image, setImage] = useState("");
    const [space, setSpace] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [categoryOptions, setCategoryOptions] = useState(null);
    const [file, setFile] = useState([]);
    const [imageData, setImageData] = useState("");

    const [presignedURL, setPresignedURL] = useState("");
    const [getSignedURL, { loading: loadingSignedURL, data: URLData }] = useLazyQuery(PRESIGNEDURL);
    const [createDesign, { data: newDesignData }] = useMutation(CREATEDESIGN);

    const { getRootProps, getInputProps } = useDropzone({
        // accept: 'image/*',
        accept: 'image/jpeg',
        onDrop: acceptedFiles => {
            const reader = new FileReader();

            reader.onload = e => {
                if (!e.target.result.includes('data:image/jpeg')) {
                    return alert('Wrong file type - JPG only.')
                }
                if (e.target.result.length > MAX_IMAGE_SIZE) {
                    return alert('Image is loo large - 2Mb maximum')
                }
                setImageData(e.target.result);
            }

            setFile(Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            }));
            reader.readAsDataURL(acceptedFiles[0])
        },
        maxSize: 2097152,
        multiple: false
    });

    const imageRef = React.createRef();

    const addNewTag = event => {
        const offset = imageRef.current.getBoundingClientRect();
        const x = Number(((event.clientX - offset.left) / imageRef.current.offsetWidth).toFixed(2));
        const y = Number(((event.clientY - offset.top) / imageRef.current.offsetHeight).toFixed(2));

        setCurrentClickPos({ tagX: x, tagY: y });
        setSelectedProduct("");
        bringProducts();
    }

    const selectProduct = id => {
        setSelectedProduct(id);
    }

    const completeProductSelection = () => {
        deactivateProductSearch();
        setProducts([...products, { product: selectedProduct, ...currentClickPos }]);
    }

    const deactivateProductSearch = () => setProductSearchActive(false);

    const bringProducts = () => setProductSearchActive(true);


    const thumbs = (
        <div className={classes.Thumb} key={file.name}>
            <div className={classes.ThumbInner}>
                <img
                    src={file.preview}
                    className={classes.Img}
                    onClick={e => addNewTag(e)}
                    ref={imageRef}
                />
            </div>
        </div>
    );

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        // files.forEach(file => URL.revokeObjectURL(file.preview));
        URL.revokeObjectURL(file.preview);

    }, [file, products]);


    const uploadAndCreateDesign = async () => {
        const design = {
            title,
            subtitle,
            space,
            category,
            products,
            description,
            image: presignedURL.filename
        };

        console.log(design);

        // PROCESS IMAGEDATA IN BINARY
        let binary = atob(imageData.split(',')[1]);
        let array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        let blobData = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });

        // UPLOAD TO S3;
        const response = await axios.put(presignedURL.uploadURL, blobData, { headers: { 'Content-Type': 'image/jpeg', ACL: 'public-read' } });
        if (response.status !== 200) return alert('unable to upload the image');

        setInfoContent('Fotoğraf yüklendi, tasarım kaydı yapılıyor.');
        createDesign({ variables: { design } });
        console.log(await newDesignData);
        setCreating(false);
    }

    if (URLData && URLData.presignedurl && !presignedURL && !showPopup) {
        setPresignedURL(URLData.presignedurl);
        console.log(URLData.presignedurl)
        setCreating(true);
    }
    if (creating) {
        uploadAndCreateDesign();
        setCreating(false);
    }

    if (newDesignData) {
        setInfoContent('Tasarım oluşturuldu.');
    }

    const onSubmit = async event => {
        event.preventDefault();
        if (!imageData) return alert('no image set');
        console.log(getNameWithoutExtention(file.name))
        setShowPopup(true);
        getSignedURL({
            variables: { model: "design", name: encodeURI(getNameWithoutExtention(file.name)) }
        });
    }

    const updateSpace = space => {
        setSpace(space);
        setCategoryOptions(CATEGORIES[space.toLowerCase()]);
    }

    return (
        <div className={classes.Create}>
            {
                showPopup ? 
                <PopupTop header='Yeni Tasarım' content={infoContent}/>
                :null
            }
            <div className={classes.Form + " container mt-4"}>

                <h1 className={classes.Title}>Yeni Stil Oluştur</h1>

                <form id='designForm' onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Başlık</label>
                        <input onChange={e => setTitle(e.target.value)} name='title' type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Alt Başlık</label>
                        <input onChange={e => setSubtitle(e.target.value)} name='subtitle' type="text" className="form-control" id="subtitle" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Yaşam Alanı</label>
                        {/* <input name='category' type="text" className="form-control" id="category" /> */}
                        <select defaultValue={DEFAULT_SELECT_VALUE} onChange={e => updateSpace(e.target.value)} className="form-control">
                            <option value={DEFAULT_SELECT_VALUE} disabled >Bir yaşam alanı seçin</option>
                            {SPACES.map((o, idx) => <option key={`space-${idx}`} value={o} >{capitalizeEachWord(o)}</option>)}
                        </select>
                    </div>
                    {
                        categoryOptions
                            ? <div className="form-group">
                                <label htmlFor="subcategory">Alt Kategori</label>
                                {/* <input name='subCategory' type="text" className="form-control" id="subcategory" /> */}
                                <select defaultValue={DEFAULT_SELECT_VALUE} onChange={e => setCategory(e.target.value)} className="form-control">
                                    <option value={DEFAULT_SELECT_VALUE} disabled>Bir kategori seçin</option>
                                    {categoryOptions.map((c, idx) => <option key={`category-${idx}`} value={c} >{capitalizeEachWord(c)}</option>)}
                                </select>
                            </div>
                            : null
                    }

                    <div className={classes.Preview}>
                        <section className={classes.Container}>
                            <div {...getRootProps({ className: classes.Dropzone })}>
                                <input {...getInputProps()} />
                                <p>Fotoğrafları buraya sürükleyip bırakın ya da buraya tıklayarak resim seçin.</p>
                            </div>
                            <aside className={classes.ThumbsContainer}>
                                {
                                    products.map((p, idx) => <Tag key={`tag ${idx}`} x={p.tagX} y={p.tagY} />)
                                }
                                {thumbs}
                            </aside>
                        </section>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Açıklama</label>
                        <textarea onChange={e => setDescription(e.target.value)} name='description' className="form-control" id="description" rows="3"></textarea>
                    </div>
                    {/* <button id='submitDesign' type="submit" className="btn btn-primary">Gönder</button> */}
                </form>
                <button onClick={onSubmit} id='submitDesign' type="submit" className="btn btn-primary">
                        Gönder
                </button>
            </div>
            {
                productSearchActive ?
                    <ProductSearch completeProductSelection={completeProductSelection} deactivateProductSearch={deactivateProductSearch} selected={selectedProduct} selectProduct={selectProduct} />
                    : null
            }
        </div>
    );
}

export default CreateDesign;