import App from '../App';
import { Home, About, Contact, Github } from '../components';

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
				path: '/github',
				element: <Github />,
			},
		],
	},
];

export default rootRouters;
