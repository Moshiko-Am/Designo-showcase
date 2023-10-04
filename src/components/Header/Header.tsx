import React, { useCallback, useState } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { Link, useLocation } from 'react-router-dom';
import { Drawer } from '@mui/material';

interface IHeader {}

// eslint-disable-next-line react-refresh/only-export-components
export const navigationLinksArray = [
	{
		id: 1,
		label: 'OUR COMPANY',
		path: '/about',
	},
	{
		id: 2,
		label: 'LOCATIONS',
		path: '/locations',
	},
	{
		id: 3,
		label: 'CONTACT',
		path: '/contact',
	},
];

const Header: React.FC<IHeader> = () => {
	const BEMBlock = 'header';

	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const location = useLocation();

	const isActiveLink = useCallback((link: string) => location.pathname === link, [location.pathname]);

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'logo-container' })}>
				<Link to={'/'}>
					<img src={'/src/assets/shared/desktop/logo-dark.png'} alt={'Logo'} />
				</Link>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'links-container' })}>
				{navigationLinksArray.map((link) => {
					return (
						<Link
							to={link.path}
							key={`link-${link.label.toLowerCase()}-id-${link.id}`}
							className={generateBEMClassName({
								block: BEMBlock,
								element: 'link',
								modifier: { name: 'active', condition: isActiveLink(link.path) },
							})}
						>
							{link.label}
						</Link>
					);
				})}
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'mobile-container' })}>
				<img src={'/src/assets/shared/mobile/icon-hamburger.svg'} alt={'Menu'} onClick={() => setIsMobileOpen(true)} />
				<Drawer anchor={'top'} open={isMobileOpen} onClose={() => setIsMobileOpen(false)}>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'mobile-content-wrapper' })}>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'mobile-logo-container' })}>
							<img
								src={'/src/assets/shared/desktop/logo-dark.png'}
								className={generateBEMClassName({ block: BEMBlock, element: 'mobile-logo' })}
								alt={'Logo'}
							/>
							<img
								src={'/src/assets/shared/mobile/icon-close.svg'}
								alt={'Close'}
								onClick={() => setIsMobileOpen(false)}
								className={generateBEMClassName({ block: BEMBlock, element: 'close-icon' })}
							/>
						</div>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'mobile-links-container' })}>
							<Link
								to={'/'}
								onClick={() => setIsMobileOpen(false)}
								className={generateBEMClassName({
									block: BEMBlock,
									element: 'mobile-link',
									modifier: { name: 'active', condition: isActiveLink('/') },
								})}
							>
								Home
							</Link>
							{navigationLinksArray.map((link) => {
								return (
									<Link
										to={link.path}
										onClick={() => setIsMobileOpen(false)}
										key={`link-${link.label.toLowerCase()}-id-${link.id}`}
										className={generateBEMClassName({
											block: BEMBlock,
											element: 'mobile-link',
											modifier: { name: 'active', condition: isActiveLink(link.path) },
										})}
									>
										{link.label}
									</Link>
								);
							})}
						</div>
					</div>
				</Drawer>
			</div>
		</div>
	);
};

export default Header;
