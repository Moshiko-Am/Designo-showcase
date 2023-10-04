import React, { useEffect } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IAppDesign {}

const AppDesign: React.FC<IAppDesign> = () => {
	const BEMBlock = ['app-design-page', 'single-project'];

	const navigate = useNavigate();

	const gridContent = [
		{
			id: 1,
			imageSrc: '/src/assets/app-design/desktop/image-airfilter.jpg',
			title: 'Airfilter',
			description: 'Solving the problem of poor indoor air quality by filtering the air',
		},
		{
			id: 2,
			imageSrc: '/src/assets/app-design/desktop/image-eyecam.jpg',
			title: 'Eyecam',
			description: 'Product that lets you edit your favorite photos and videos at any time',
		},
		{
			id: 3,
			imageSrc: '/src/assets/app-design/desktop/image-faceit.jpg',
			title: 'Faceit',
			description: 'Get to meet your favorite internet superstar with the faceit app',
		},
		{
			id: 4,
			imageSrc: '/src/assets/app-design/desktop/image-todo.jpg',
			title: 'Todo',
			description: 'A todo app that features cloud sync with light and dark mode',
		},
		{
			id: 5,
			imageSrc: '/src/assets/app-design/desktop/image-loopstudios.jpg',
			title: 'Loopstudios',
			description: 'A VR experience app made for Loopstudios',
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
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={generateBEMClassName({ block: BEMBlock, utilities: 'page' })}
			ref={headerRef}
		>
			<div
				className={generateBEMClassName({
					block: BEMBlock,
					element: 'header-container',
				})}
			>
				<h1 className={generateBEMClassName({ block: BEMBlock, element: 'header' })}>App Design</h1>
				<p className={generateBEMClassName({ block: BEMBlock, element: 'header-description' })}>
					Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
				</p>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'grid-container' })}>
				{gridContent.map((item) => (
					<div key={`app-design-grid-item-${item.id}`} className={generateBEMClassName({ block: BEMBlock, element: 'grid-item' })}>
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
					className={generateBEMClassName({ block: BEMBlock, element: 'project-link', modifier: 'web-design' })}
					onClick={() => navigate('/projects/web-design')}
				>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'project-text-wrapper' })}>
						<h2>WEB DESIGN</h2>
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

export default AppDesign;
