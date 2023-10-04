import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import passionateSvg from '../../../assets/home/desktop/illustration-passionate.svg';
import resourcefulSvg from '../../../assets/home/desktop/illustration-resourceful.svg';
import friendlySvg from '../../../assets/home/desktop/illustration-friendly.svg';

interface IReasons {}

const Reasons: React.FC<IReasons> = () => {
	const BEMBlock = 'reasons';

	const sections = [
		{
			id: 1,
			sectionSvgSrc: passionateSvg,
			title: 'PASSIONATE',
			description:
				'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
		},
		{
			id: 2,
			sectionSvgSrc: resourcefulSvg,
			title: 'RESOURCEFUL',
			description:
				'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
		},
		{
			id: 3,
			sectionSvgSrc: friendlySvg,
			title: 'FRIENDLY',
			description:
				'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
		},
	];

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			{sections.map((section) => {
				const { id, description, sectionSvgSrc, title } = section;
				return (
					<div
						key={id}
						className={generateBEMClassName({
							block: BEMBlock,
							element: 'section',
							modifier: title.toLowerCase(),
						})}
					>
						<div
							className={generateBEMClassName({
								block: BEMBlock,
								element: 'svg-wrapper',
							})}
						>
							<img
								src={sectionSvgSrc}
								alt={title}
								className={generateBEMClassName({
									block: BEMBlock,
									element: 'svg-image',
								})}
							/>
						</div>
						<div
							className={generateBEMClassName({
								block: BEMBlock,
								element: 'info-wrapper',
							})}
						>
							<h3
								className={generateBEMClassName({
									block: BEMBlock,
									element: 'title',
								})}
							>
								{title}
							</h3>
							<p
								className={generateBEMClassName({
									block: BEMBlock,
									element: 'description',
								})}
							>
								{description}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Reasons;
