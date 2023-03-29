import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Home = () => {
	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?university'
				alt='unsplash-img'
			/>
			<div>
				<h1>Hello, I am Bingying Chu.</h1>
				<p>I am a CS major at Oregon State University, with a passion in backend development and software design.</p>
				<p>In my free time, I love to travel and explore grocery shopping to find healthy food choices.</p>
				<p>Thank you for visiting my portfolio website, and I will continue to update it with interesting projects that I complete.</p>
			</div>
		</section>
	);
};

export default Home;