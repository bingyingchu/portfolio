import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Skills = () => {
	const skillsRef = useNav('Skills');

	return (
		<section ref={skillsRef} id='skillsContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?technologies'
				alt='unsplash-img'
			/>
			<div>
				<h3>Technologies and Languages</h3>
				<p>Python-Flask/Django</p>
				<p>Java-Spring Boot</p>
				<p>REST API</p>
				<p>SQL-MySQL/PostgreSQL</p>
				<p>MERN stack</p>
				<p>HTML/CSS</p>
			</div>
		</section>
	);
};

export default Skills;