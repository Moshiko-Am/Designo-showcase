import React, { useEffect } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IGraphicDesign {}

const GraphicDesign: React.FC<IGraphicDesign> = () => {
	const BEMBlock = ['graphic-design-page', 'single-project'];

	const navigate = useNavigate();

	const gridContent = [
		{
			id: 1,
			imageSrc: '/src/assets/graphic-design/desktop/image-change.jpg',
			title: 'Tim Brown',
			description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
		},
		{
			id: 2,
			imageSrc: '/src/assets/graphic-design/desktop/image-boxed-water.jpg',
			title: 'Boxed Water',
			description: 'A simple packaging concept made for Boxed Water',
		},
		{
			id: 3,
			imageSrc: '/src/assets/graphic-design/desktop/image-science.jpg',
			title: 'Science!',
			description: 'A poster made in collaboration with the Federal Art Project',
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
			ref={headerRef}
			className={generateBEMClassName({ block: BEMBlock, utilities: 'page', modifier: 'graphic-design' })}
		>
			<div
				className={generateBEMClassName({
					block: BEMBlock,
					element: 'header-container',
				})}
			>
				<h1 className={generateBEMClassName({ block: BEMBlock, element: 'header' })}>Graphic Design</h1>
				<p className={generateBEMClassName({ block: BEMBlock, element: 'header-description' })}>
					We deliver eye-catching branding materials that are tailored to meet your business objectives.
				</p>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'grid-container' })}>
				{gridContent.map((item) => (
					<div key={`graphic-design-grid-item-${item.id}`} className={generateBEMClassName({ block: BEMBlock, element: 'grid-item' })}>
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
						modifier: 'app-design',
					})}
					onClick={() => navigate('/projects/app-design')}
				>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'project-text-wrapper' })}>
						<h2>APP DESIGN</h2>
						<h3>VIEW PROJECTS</h3>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default GraphicDesign;
