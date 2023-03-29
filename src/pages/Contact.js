import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {
	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?people,working professional'
				alt='unsplash-img'
			/>
			<div>
				<h3>CONTACT</h3>
				<p>Let me know if you are interested in connecting on <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bingying-chu/">LinkedIn</a>. </p>
				<p>Feel free to follow me on GitHub <a target="_blank" rel="noreferrer" href="https://github.com/bingyingchu">here</a>.</p>
			</div>
		</section>
	);
};

export default Contact;