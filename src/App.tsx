import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import { useEffect } from 'react';

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/projects') {
			navigate('/projects/web-design');
		}
	}, [location.pathname, navigate]);

	return (
		<div className={generateBEMClassName({ block: 'layout' })}>
			<div className={generateBEMClassName({ block: 'layout', element: 'header-wrapper' })}>
				<Header />
			</div>
			<div className={generateBEMClassName({ block: 'layout', element: 'content' })}>
				<Outlet />
			</div>
			<div className={generateBEMClassName({ block: 'layout', element: 'footer-wrapper' })}>
				<Footer />
			</div>
		</div>
	);
}

export default App;
