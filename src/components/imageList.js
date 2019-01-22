import React from 'react';
import ImageCard from './renderImage';
import './imageList.css';

class Images extends React.Component {

    
    
    render(){
        /* const imagesL = this.props.listImg.map(({description, id, urls }) => {
            return <img alt={description} src={urls.regular} key={id} />
        }); */

        const imagesL = this.props.listImg.map(image => {
            return <ImageCard key={image.id} image={image} />
        });



        return <div className="image-list">{imagesL}</div>;
    }    
}

export default Images;