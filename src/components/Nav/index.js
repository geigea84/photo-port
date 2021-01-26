import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav(props) {
    //20.3.4
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    //20.3.4 come back and recap
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    //20.1.6 
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {' '}📸
                    </span>{' '}
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li 
                            className={`mx-1 ${
                                currentCategory.name === category.name && 'navActive'
                            }`} 
                            key={category.name}
                        >
                            <span onClick={() => {setCurrentCategory(category)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;