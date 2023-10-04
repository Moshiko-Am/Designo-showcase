import React from 'react';
import illustrationCanada from '../../assets/shared/desktop/illustration-canada.svg';
import illustrationAustralia from '../../assets/shared/desktop/illustration-australia.svg';
import illustrationUnitedKingdom from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { Link } from 'react-router-dom';

interface IAboutLocations {}

const AboutLocations: React.FC<IAboutLocations> = () => {
	const BEMBlock = ['about-locations', 'about-page'];

	const sections = [
		{
			id: 1,
			imgSrc: illustrationCanada,
			title: 'Canada',
			buttonText: 'See Location',
		},
		{
			id: 2,
			imgSrc: illustrationAustralia,
			title: 'Australia',
			buttonText: 'See Location',
		},
		{
			id: 3,
			imgSrc: illustrationUnitedKingdom,
			title: 'United Kingdom',
			buttonText: 'See Location',
		},
	];

	return (
		<div
			className={generateBEMClassName({
				block: BEMBlock,
				element: 'content-container',
				modifier: 'locations',
			})}
		>
			{sections.map((section) => (
				<div
					key={`section-item-${section.title}-${section.id}`}
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'location-item',
						modifier: section.title.toLowerCase(),
					})}
				>
					<div
						className={generateBEMClassName({
							block: BEMBlock,
							element: 'location-item-img-wrapper',
							modifier: section.title.toLowerCase(),
						})}
					>
						<img src={section.imgSrc} alt={`${section.title}-illustration`} />
					</div>
					<div
						className={generateBEMClassName({
							block: BEMBlock,
							element: 'location-item-text-wrapper',
							modifier: section.title.toLowerCase(),
						})}
					>
						<h3>{section.title}</h3>
						<Link to={`/locations?${section.title.toLowerCase() === 'united kingdom' ? 'united-kingdom' : section.title.toLowerCase()}`}>
							<button className={'btn btn--secondary'}>{section.buttonText}</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default AboutLocations;
