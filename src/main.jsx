import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import rootRouters from './routs/router';
import App from './App.jsx';
import { Home, About, Contact } from './components/index';
import './index.css';

const router = createBrowserRouter(rootRouters);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
