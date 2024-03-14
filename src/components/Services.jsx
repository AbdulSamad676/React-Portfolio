import {
	faBootstrap,
	faCss3,
	faHtml5,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Services() {
	return (
		<div className='container mx-auto my-10 '>
			<h2 className='text-center my-2 py-2 px-10 text-2xl w-max font-bold text-white black-shadow custom-bg rounded-lg mx-auto'>
				Services
			</h2>
			<div className='grid md:grid-cols-3 sm:grid-cols-2  gap-x-[5rem] md:gap-x-10 gap-y-5 p-4 md:w-10/12 mx-auto '>
				<div className='service-item  h-32 p-4 rounded-lg text-white custom-bg border border-white'>
					<FontAwesomeIcon
						className='html-icon text-6xl hover:text-7xl'
						icon={faHtml5}
					/>
					<h3 className='font-bold black-shadow text-xl '>
						HTML Services
					</h3>
				</div>
				<div className='service-item h-32 p-4 rounded-lg text-white custom-bg border border-white'>
					<FontAwesomeIcon
						className='css-icon text-6xl hover:text-7xl'
						icon={faCss3}
					/>
					<h3 className='font-bold black-shadow text-xl '>
						CSS Services
					</h3>
				</div>
				<div className='service-item h-32 p-4 rounded-lg text-white custom-bg border border-white'>
					<FontAwesomeIcon
						className='bootstrap-icon text-6xl hover:text-7xl'
						icon={faBootstrap}
					/>
					<h3 className='font-bold black-shadow text-xl '>
						Bootstrap Services
					</h3>
				</div>
				<div className='service-item h-32 p-4 rounded-lg text-white custom-bg border border-white'>
					<FontAwesomeIcon
						className='react-icon text-6xl hover:text-7xl'
						icon={faReact}
					/>
					<h3 className='font-bold black-shadow text-xl '>
						React Services
					</h3>
				</div>
				<div className='service-item h-32 p-4 rounded-lg text-white custom-bg border border-white'>
					<FontAwesomeIcon
						className='bootstrap-icon text-6xl hover:text-7xl'
						icon={faDesktop}
					/>
					<h3 className='font-bold black-shadow text-xl '>
						Website Design
					</h3>
				</div>
				<div className='service-item h-32 p-4 rounded-lg text-white custom-bg border border-white'>
					<FontAwesomeIcon
						className='css-icon text-6xl hover:text-7xl'
						icon={faLaptopCode}
					/>
					<h3 className='font-bold black-shadow text-xl '>
						Website Customization
					</h3>
				</div>
			</div>
		</div>
	);
}

export default Services;
