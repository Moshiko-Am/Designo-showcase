import React, { useEffect } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import Hero from '../../components/Home/Hero/Hero.tsx';
import Projects from '../../components/Home/Projects/Projects.tsx';
import Reasons from '../../components/Home/Reasons/Reasons.tsx';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IHome {}

const Home: React.FC<IHome> = () => {
	const BEMBlock = 'home-page';

	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === '/') {
			window.scrollTo({ top: -128, left: 0, behavior: 'smooth' });
		}
	}, [pathname]);

	return (
		<motion.div className={generateBEMClassName({ block: BEMBlock, utilities: 'page' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Hero />
			<Projects />
			<Reasons />
		</motion.div>
	);
};

export default Home;
