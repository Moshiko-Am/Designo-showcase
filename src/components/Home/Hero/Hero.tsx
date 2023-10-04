import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { Link } from 'react-router-dom';

interface IHero {}

const Hero: React.FC<IHero> = () => {
	const BEMBlock = 'hero';

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'info-container' })}>
				<h1 className={generateBEMClassName({ block: BEMBlock, element: 'title' })}>
					Award-winning custom designs and digital branding solutions
				</h1>
				<p className={generateBEMClassName({ block: BEMBlock, element: 'description' })}>
					With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand
					experiences. Find out more about our services.
				</p>
				<Link to={'/about'}>
					<button className={'btn btn--primary'}>Learn More</button>
				</Link>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'image-container' })}>
				<img src={'src/assets/home/desktop/image-hero-phone.png'} />
			</div>
		</div>
	);
};

export default Hero;
