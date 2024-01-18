import React from 'react';
import NavBar from './NavBar';
import {navOptions} from '../thingsido';

function Footer(){
    const navTagOptions = navOptions.map(
        (navOption) => <a href={`#${navOption.toLowerCase()}`}><h2>{navOption}</h2></a>
    );
    return (
        <>
            <div style={{display: 'flex', flexBasis: 'auto', flexDirection: 'column'}} id="footer">
                <div style={{textAlign: 'left'}}>
                    {navTagOptions}
                </div>
                <div style={{textAlign: 'left'}}>
                    <h2>Socials</h2>
                    <span class="material-symbols-outlined">
center_focus_strong
</span>  @imnot._mahi
<br/>
<span class="material-symbols-outlined">
phone
</span> 90XXXXXXXX

                </div>
            </div>
        </>
    );
}

export default Footer;