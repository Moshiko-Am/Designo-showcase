import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Home from './Pages/Home/Home.tsx';
import About from './Pages/About/About.tsx';
import AppDesign from './Pages/AppDesign/AppDesign.tsx';
import Contact from './Pages/Contact/Contact.tsx';
import Locations from './Pages/Locations/Locations.tsx';
import WebDesign from './Pages/WebDesign/WebDesign.tsx';
import GraphicDesign from './Pages/GraphicDesign/GraphicDesign.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'locations',
				element: <Locations />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'projects',
				children: [
					{
						path: 'web-design',
						element: <WebDesign />,
					},
					{
						path: 'app-design',
						element: <AppDesign />,
					},
					{
						path: 'graphic-design',
						element: <GraphicDesign />,
					},
				],
			},
		],
	},
]);

export default router;
