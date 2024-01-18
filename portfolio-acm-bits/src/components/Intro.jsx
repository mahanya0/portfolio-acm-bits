import React from 'react';
 function Intro(props){
    return (
        <>
          <div className='skill-section' id={props.id}>
            <h1>Intro</h1>
            <img src="./mahi-face.jpeg"/>
            <p>
                My name is Mahanya.<br/>
                My ID Number is 2023A3PS0409H. <br/>
                I am from Chennai but my mother tongue is Telugu since I'm native to Vizag. <br/>
                My hobbies include watching cricket & football, playing table tennis, coding, webdev, and design. <br/>
            </p>  
          </div>  
        </>
    );
 }

 export default Intro;
