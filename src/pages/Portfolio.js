import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Portfolio = () => {
	const portfolioRef = useNav('Portfolio');

	return (
		<section ref={portfolioRef} id='portfolioContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?github'
				alt='unsplash-img'
			/>
			<div>
				<h3>Here are my projects:</h3>
				<h2><a target="_blank" rel="noreferrer" href="https://github.com/bingyingchu/Baby-Development">1. Baby Development Web Scraping Tool</a></h2>
                <h2><a target="_blank" rel="noreferrer" href="https://github.com/bingyingchu/ED4U">2. ED4U, Online School Management System</a></h2>
                <h2><a target="_blank" rel="noreferrer" href="https://github.com/bingyingchu/Exercise-Tracker">3. Exercise Tracker, fullstack application</a></h2>
			</div>
		</section>
	);
};

export default Portfolio;