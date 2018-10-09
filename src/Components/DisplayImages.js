import React, { Component } from 'react';
import Image from './Image.js';

const DisplayImages = props => {
    let imgs = props.data.map(img =>
        <Image url={img.urls.small}
            urlLarge={img.urls.full}
            author={img.user.name}
            name={img.description}
            key={img.id} />);

    return (
        <div className="list">
            {imgs}
        </div>
    );
};

export default DisplayImages;
