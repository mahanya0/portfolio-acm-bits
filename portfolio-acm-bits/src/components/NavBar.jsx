import React from 'react';
import {navOptions} from '../thingsido';
function NavBar(props){

    const navTagOptions = navOptions.map(
        (navOption) => <a href={`#${navOption.toLowerCase()}`}><h2>{navOption}</h2></a>
    );
    return (
        <div>
        <h1>Mahanya.</h1>
        <div className='nav-bar'style={{flexDirection: props.flexDir}}>
            {navTagOptions}
        </div>
        </div>
    );
}

export default NavBar;