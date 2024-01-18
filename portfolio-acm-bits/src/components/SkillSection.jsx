import React, {useState} from "react";
import SkillBubble from "./SkillBubble";
import DescriptionLabel from "./DescriptionLabel";


function SkillSection(props){
    const bubbleStyle = {
        // height: '500px',
        // width: '500px',
        borderColor: props.backgroundColor,
        borderStyle: 'solid',
        padding: '2.2em',
        margin: '1em',
        background: props.backgroundColor,
        webkitBoxShadow:`0px 0px 50px 10px ${props.backgroundColor}`,
        mozBoxShadow: `0px 0px 50px 10px ${props.backgroundColor}`,
        boxShadow: `0px 0px 50px 10px ${props.backgroundColor}`,
        borderRadius: '50% 50% 48% 52% / 70% 68% 32% 30%' 
        };
    const [ind, setInd] = useState(0);
	const reqBubbleList = props.reqList.map(
		(skill) => <SkillBubble skillData={skill} showDesc={() => setInd(skill.index)} bubbleStyle={bubbleStyle}/> 
	);
	
	return (
		<div className="skill-section"  id={props.id}>
            <h1>{props.heading}</h1>
			<div className='skill-bubble-list'>
				{reqBubbleList}
			</div>
			<DescriptionLabel skillData={props.reqList[ind]}/>
		</div>
	);
}

export default SkillSection;

