import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import AboutLocations from '../../components/About/AboutLocations.tsx';
import { motion } from 'framer-motion';

interface IAbout {}

const About: React.FC<IAbout> = () => {
	const BEMBlock = 'about-page';

	const headerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
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
					element: 'content-container',
					modifier: 'about-us',
				})}
			>
				<div
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'text-wrapper',
						modifier: 'about-us',
					})}
				>
					<h1>About Us</h1>
					<p>
						Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups,
						corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands,
						products, and digital experiences that connect with our clients’ audiences.
					</p>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'img-wrapper' })}>
					<img src={'/src/assets/about/desktop/image-about-hero.jpg'} />
				</div>
			</div>
			<div
				className={generateBEMClassName({
					block: BEMBlock,
					element: 'content-container',
					modifier: 'world-class',
				})}
			>
				<div
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'text-wrapper',
						modifier: 'world-class',
					})}
				>
					<h1>World-class talent</h1>
					<p>
						We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch,
						ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
					</p>
					<p>
						Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give
						great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality
						outcomes that encapsulates their brand’s story and mission.
					</p>
				</div>
				<div
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'img-wrapper',
						modifier: 'world-class',
					})}
				>
					<img src={'/src/assets/about/desktop/image-world-class-talent.jpg'} />
				</div>
			</div>
			<AboutLocations />
			<div
				className={generateBEMClassName({
					block: BEMBlock,
					element: 'content-container',
					modifier: 'real-deal',
				})}
			>
				<div
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'text-wrapper',
						modifier: 'real-deal',
					})}
				>
					<h1>The real deal</h1>
					<p>
						As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems
						require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and
						technology more accessible and give you tools to measure success.
					</p>
					<p>
						We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire
						audiences to take action and drive real results.
					</p>
				</div>
				<div
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'img-wrapper',
						modifier: 'real-deal',
					})}
				>
					<img src={'/src/assets/about/desktop/image-real-deal.jpg'} />
				</div>
			</div>
		</motion.div>
	);
};

export default About;
