import React, { useEffect } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ILocations {}

const Locations: React.FC<ILocations> = () => {
	const BEMBlock = 'locations-page';

	const { search } = useLocation();

	const headerRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (search) {
			const newSearch = search.replace('?', '');
			if (newSearch) {
				const element = document.getElementById(newSearch);
				if (element) {
					element.scrollIntoView({
						behavior: 'smooth',
					});
				}
			}
		} else {
			if (headerRef) {
				window?.scrollTo({ top: -128, left: 0, behavior: 'smooth' });
			}
		}
	}, [search]);

	return (
		<motion.div
			ref={headerRef}
			className={generateBEMClassName({ block: BEMBlock, utilities: 'page' })}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'content-wrapper' })}>
				<div id={'canada'} className={generateBEMClassName({ block: BEMBlock, element: 'container', modifier: 'canada' })}>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'text-wrapper' })}>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'title-container' })}>
							<h2 className={generateBEMClassName({ block: BEMBlock, element: 'title' })}>Canada</h2>
						</div>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'address-contact-container' })}>
							<div className={generateBEMClassName({ block: BEMBlock, element: 'address-container' })}>
								<p>Designo Central Office</p>
								<p>3886 Wellington Street</p>
								<p>Toronto, Ontario M9C 3J5</p>
							</div>
							<div className={generateBEMClassName({ block: BEMBlock, element: 'contact-container' })}>
								<p>Contact</p>
								<p>P : +1 253-863-8967</p>
								<p>M : contact@designo.co</p>
							</div>
						</div>
					</div>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'map-wrapper' })}>
						<img src={'/src/assets/locations/desktop/image-map-canada.png'} alt={'Map'} />
					</div>
				</div>
				<div id={'australia'} className={generateBEMClassName({ block: BEMBlock, element: 'container', modifier: 'australia' })}>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'text-wrapper' })}>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'title-container' })}>
							<h2 className={generateBEMClassName({ block: BEMBlock, element: 'title' })}>Australia</h2>
						</div>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'address-contact-container' })}>
							<div className={generateBEMClassName({ block: BEMBlock, element: 'address-container' })}>
								<p>Designo AU Office</p>
								<p>19 Balonne Street</p>
								<p>New South Wales 2443</p>
							</div>
							<div className={generateBEMClassName({ block: BEMBlock, element: 'contact-container' })}>
								<p>Contact</p>
								<p>P : (02) 6720 9092</p>
								<p>M : contact@designo.au</p>
							</div>
						</div>
					</div>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'map-wrapper' })}>
						<img src={'/src/assets/locations/desktop/image-map-australia.png'} alt={'Map'} />
					</div>
				</div>
				<div
					id={'united-kingdom'}
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'container',
						modifier: 'united-kingdom',
					})}
				>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'text-wrapper' })}>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'title-container' })}>
							<h2 className={generateBEMClassName({ block: BEMBlock, element: 'title' })}>United Kingdom</h2>
						</div>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'address-contact-container' })}>
							<div className={generateBEMClassName({ block: BEMBlock, element: 'address-container' })}>
								<p>Designo UK Office</p>
								<p>13 Colorado Way</p>
								<p>Rhyd-y-fro SA8 9GA</p>
							</div>
							<div className={generateBEMClassName({ block: BEMBlock, element: 'contact-container' })}>
								<p>Contact </p>
								<p>P : 078 3115 1400</p>
								<p>M : contact@designo.uk</p>
							</div>
						</div>
					</div>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'map-wrapper' })}>
						<img src={'/src/assets/locations/desktop/image-map-united-kingdom.png'} alt={'Map'} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Locations;
