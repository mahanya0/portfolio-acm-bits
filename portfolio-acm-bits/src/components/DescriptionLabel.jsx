import React from 'react';

function DescriptionLabel(props){
    const headingIcon = <span class="material-symbols-outlined">{props.skillData.icon}</span>;
    return (
        <div className='desc-label'>
            <h2>{props.skillData.title}  {headingIcon}</h2>
            <p>{props.skillData.desc}</p>
        </div>
    );
}

export default DescriptionLabel;
