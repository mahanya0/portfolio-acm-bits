//Main Libraries & Data
import React, { useState } from "react";
import { skillList, hobbies, clubsImIn } from "./thingsido";

//Components
import SkillSection from "./components/SkillSection";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';


//Stylesheets
import "./App.css";

function App() {
	
	return (
		<>
			<div>
				<NavBar flexDir='row'/>
				<Intro id='intro'/>
				<SkillSection id='skills' heading="Skills" reqList={skillList} backgroundColor='#44e1fc'/>
				<SkillSection id ='hobbies' heading="Hobbies" reqList={hobbies} backgroundColor='purple'/>
				<SkillSection id='clubs' heading="Clubs I'm in on campus" reqList={clubsImIn} backgroundColor='orange'/>
				<Footer/>
			</div>
		</>
	);
}

export default App;
