import ViewDesign from '../../containers/Design/ViewDetail/ViewDetail';

const dummyDesign = {
    likedByUser: true,
    inCollections: true,
    user: {
        username: 'Dummy User',
        _id: 'dummyID'
    },
    likes: 500,
    products: [
        {
            product: {
                image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/lamp.jpg',
                price: "10TL",
                salePrice: '10TL',
                title: 'Dummy Lamba',
            },
            tagX: .25,
            tagY: .57
        },
        {
            product: {
                image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/sofa.jpg',
                price: "20TL",
                salePrice: '20TL',
                title: 'Dummy Sofa'
            }, 
            tagX: .45,
            tagY: .6
        },
        {
            product: {
                image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/table.jpg',
                price: "30TL",
                salePrice: '30TL',
                title: 'Dummy Table'
            }, 
            tagX: .5,
            tagY: .8
        },
        {
            product: {
                image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/table.jpg',
                price: "30TL",
                salePrice: '30TL',
                title: 'Dummy Table'
            }, 
            tagX: .8,
            tagY: .8
        },
        {
            product: {
                image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/table.jpg',
                price: "30TL",
                salePrice: '30TL',
                title: 'Dummy Table'
            }, 
            tagX: .2,
            tagY: .9
        }
    ],
    title: 'dummy title',
    subtitle: 'dummy subtitle',
    description: 'dummy description',
    image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/modern-oturma-odas%C4%B1.jpg',
    comments: [
        {
            _id: 'dummyCommentID1',
            user: {
                username: 'Dummy CommmentUser'
            },
            content: 'First comment',
            likes: 3,
            subcomments: [
                {
                    _id: 'dummySubcommentID1',
                    content: 'First Subcomment',
                    likes: 1,
                    user: {
                        username: 'Dummy Subcomment User 1'
                    }
                },
                {
                    _id: 'dummySubcommentID2',
                    content: 'Second Subcomment',
                    likes: 2,
                    user: {
                        username: 'Dummy Subcomment User 2'
                    }
                }
            ]
        }
    ]
}

const recommended = [
    {
        _id: 'DummyRecommendedID1',
        title: 'Dummy Recommended 1',
        image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/modern-%C3%A7al%C4%B1%C5%9Fma-alan%C4%B1.jpg',
        likes: '347',
        comments: '524',
        inCollections: false,
        likedByUser: false,
    },
    {
        _id: 'DummyRecommendedID2',
        title: 'Dummy Recommended 2',
        image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/modern-%C3%A7al%C4%B1%C5%9Fma-alan%C4%B1.jpg',
        likes: '347',
        comments: '524',
        inCollections: false,
        likedByUser: true,
    },
    {
        _id: 'DummyRecommendedID3',
        title: 'Dummy Recommended 3',
        image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/modern-%C3%A7al%C4%B1%C5%9Fma-alan%C4%B1.jpg',
        likes: '757',
        comments: '454',
        inCollections: false,
        likedByUser: true,
    },
    {
        _id: 'DummyRecommendedID4',
        title: 'Dummy Recommended 4',
        image: 'https://evlumba-uploads.s3.eu-central-1.amazonaws.com/dummy/modern-%C3%A7al%C4%B1%C5%9Fma-alan%C4%B1.jpg',
        likes: '123',
        comments: '456',
        inCollections: true,
        likedByUser: true,
    }
]

const View = props => <ViewDesign design={dummyDesign} recommended={recommended} />;

export default View;