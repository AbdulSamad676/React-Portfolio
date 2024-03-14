import App from '../App';
import { Home, About, Contact, Projects } from '../components';

const rootRouters = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
		],
	},
];

export default rootRouters;
