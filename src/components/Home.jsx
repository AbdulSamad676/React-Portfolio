import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBaseball } from '@fortawesome/free-solid-svg-icons';
import {
	faHtml5,
	faCss3,
	faBootstrap,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
function Home() {
	return (
		<div className='container'>
			<div className='top-row'>
				<div className='columns-2'>
					<FontAwesomeIcon className='html-icon' icon={faHtml5} />
				</div>
			</div>
			<div className='icons-row'></div>
		</div>
	);
}

export default Home;
