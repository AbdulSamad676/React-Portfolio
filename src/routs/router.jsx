import App from '../App';
import { Home, About, Contact } from '../components';

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
		],
	},
];

export default rootRouters;
