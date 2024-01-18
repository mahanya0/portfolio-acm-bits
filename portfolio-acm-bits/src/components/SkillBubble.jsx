
import React, {useState} from 'react';

function SkillBubble(props){

    const [bubStyle, setBubStyle] = useState(props.bubbleStyle);

    const universalStyle = {
        borderColor: '#44fc75',
        borderStyle: 'solid',
        padding: '2.2em',
        margin: '1em',
        background: '#44fc75',
        webkitBoxShadow:`0px 0px 50px 10px #44fc75`,
        mozBoxShadow: `0px 0px 50px 10px #44fc75`,
        boxShadow: `0px 0px 50px 10px #44fc75`,
        borderRadius: '50% 50% 48% 52% / 70% 68% 32% 30%'
    };


    const hoverHandlerForBubble = () => {

        props.showDesc();
        setBubStyle(universalStyle);


    };
    
    return (
        <div onMouseOver={hoverHandlerForBubble} style={bubStyle} onMouseOut={() => setBubStyle(props.bubbleStyle)}>
            <div>
            <h2>{props.skillData.title}</h2>
            <span class="material-symbols-outlined" id="bubble-icon">{props.skillData.icon}</span>
            </div>
       </div>
    );
}

export default SkillBubble;