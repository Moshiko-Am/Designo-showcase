import React, { useMemo } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinksArray } from '../Header/Header.tsx';
import { faSquareFacebook, faYoutube, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
	const BEMBlock = 'footer';

	const location = useLocation();

	const addContactComponent = useMemo(() => {
		return location.pathname !== '/contact';
	}, [location.pathname]);

	const footerSocialLinksArray = [
		{
			id: 1,
			icon: faSquareFacebook,
			name: 'facebook',
		},
		{
			id: 2,
			icon: faYoutube,
			name: 'youtube',
		},
		{
			id: 3,
			icon: faTwitter,
			name: 'twitter',
		},
		{
			id: 4,
			icon: faPinterest,
			name: 'pinterest',
		},
		{
			id: 5,
			icon: faInstagram,
			name: 'instagram',
		},
	];

	return (
		<div
			className={generateBEMClassName({
				block: BEMBlock,
				modifier: { name: 'with-contact', condition: addContactComponent },
			})}
		>
			{addContactComponent && (
				<div className={generateBEMClassName({ block: BEMBlock, element: 'contact-wrapper' })}>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'contact-info' })}>
						<h2>Let’s talk about your project</h2>
						<p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
					</div>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'contact-cta' })}>
						<Link to={'/contact'} className={generateBEMClassName({ block: BEMBlock, element: 'contact-link' })}>
							<button className={'btn btn--primary'}>Get in touch</button>
						</Link>
					</div>
				</div>
			)}
			<div className={generateBEMClassName({ block: BEMBlock, element: 'logo-links-container' })}>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'logo-container' })}>
					<Link to={'/'}>
						<img src={'/src/assets/shared/desktop/logo-light.png'} />
					</Link>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'links-container' })}>
					{navigationLinksArray.map((link) => {
						return (
							<Link
								to={link.path}
								key={`link-${link.label.toLowerCase()}-id-${link.id}`}
								className={generateBEMClassName({ block: BEMBlock, element: 'link' })}
							>
								{link.label}
							</Link>
						);
					})}
				</div>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'company-info-container' })}>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'company-address' })}>
					<p>Designo Central Office</p>
					<p>3886 Wellington Street</p>
					<p>Toronto, Ontario M9C 3J5</p>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'company-details' })}>
					<p>Contact Us (Central Office)</p>
					<p>P : +1 253-863-8967</p>
					<p>M : contact@designo.co</p>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'social-links-container' })}>
					{footerSocialLinksArray.map((link) => (
						<FontAwesomeIcon
							icon={link.icon}
							key={`link-${link.id}`}
							className={generateBEMClassName({
								block: BEMBlock,
								element: 'social-link',
								modifier: link.name,
							})}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default Footer;
