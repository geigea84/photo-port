//20.3.3
import React from 'react';
//20.3.5 update including PhotoList
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const { currentCategory } = props;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    );
}

export default Gallery;