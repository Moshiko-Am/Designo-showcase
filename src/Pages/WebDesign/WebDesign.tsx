import React, { useEffect } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IWebDesign {}

const WebDesign: React.FC<IWebDesign> = () => {
	const BEMBlock = ['web-design-page', 'single-project'];

	const navigate = useNavigate();

	const gridContent = [
		{
			id: 1,
			imageSrc: '/src/assets/web-design/desktop/image-express.jpg',
			title: 'Express',
			description: 'A multi-carrier shipping website for ecommerce businesses',
		},
		{
			id: 2,
			imageSrc: '/src/assets/web-design/desktop/image-transfer.jpg',
			title: 'Transfer',
			description: 'Site for low-cost money transfers and sending money within seconds',
		},
		{
			id: 3,
			imageSrc: '/src/assets/web-design/desktop/image-photon.jpg',
			title: 'Photon',
			description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
		},
		{
			id: 4,
			imageSrc: '/src/assets/web-design/desktop/image-builder.jpg',
			title: 'Builder',
			description: 'Connects users with local contractors based on their location',
		},
		{
			id: 5,
			imageSrc: '/src/assets/web-design/desktop/image-blogr.jpg',
			title: 'Blogr',
			description: 'Blogr is a platform for creating an online blog or publication',
		},
		{
			id: 6,
			imageSrc: '/src/assets/web-design/desktop/image-camp.jpg',
			title: 'Camp',
			description: 'Get expert training in coding, data, design, and digital marketing',
		},
	];

	const headerRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef) {
			window?.scrollTo({ top: -128, left: 0, behavior: 'smooth' });
		}
	}, [headerRef]);

	return (
		<motion.div
			ref={headerRef}
			className={generateBEMClassName({ block: BEMBlock, utilities: 'page' })}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div
				className={generateBEMClassName({
					block: BEMBlock,
					element: 'header-container',
					modifier: 'web-design',
				})}
			>
				<h1 className={generateBEMClassName({ block: BEMBlock, element: 'header' })}>Web Design</h1>
				<p className={generateBEMClassName({ block: BEMBlock, element: 'header-description' })}>
					We build websites that serve as powerful marketing tools and bring memorable brand experiences.
				</p>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'grid-container' })}>
				{gridContent.map((item) => (
					<div key={`web-design-grid-item-${item.id}`} className={generateBEMClassName({ block: BEMBlock, element: 'grid-item' })}>
						<img src={item.imageSrc} alt={item.title} />
						<div className={generateBEMClassName({ block: BEMBlock, element: 'grid-item-title-container' })}>
							<h3
								className={generateBEMClassName({
									block: BEMBlock,
									element: 'grid-item-title',
								})}
							>
								{item.title}
							</h3>
							<p
								className={generateBEMClassName({
									block: BEMBlock,
									element: 'grid-item-description',
								})}
							>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'projects-links-container' })}>
				<div
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'project-link',
						modifier: 'app-design',
					})}
					onClick={() => navigate('/projects/app-design')}
				>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'project-text-wrapper' })}>
						<h2>APP DESIGN</h2>
						<h3>VIEW PROJECTS</h3>
					</div>
				</div>
				<div
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'project-link',
						modifier: 'graphic-design',
					})}
					onClick={() => navigate('/projects/graphic-design')}
				>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'project-text-wrapper' })}>
						<h2>GRAPHIC DESIGN</h2>
						<h3>VIEW PROJECTS</h3>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default WebDesign;
