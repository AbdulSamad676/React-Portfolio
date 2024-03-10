import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBaseball } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/images/profile.png';
import tempPath from '../assets/CV/CV.pdf';

import {
	faHtml5,
	faCss3,
	faBootstrap,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
function Home() {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = tempPath; // Use the imported tempPath variable
		link.download = 'CV.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className='hero-section h-full sm:pb-5'>
			<div className='top-row grid grid-cols-12 md:grid-cols-10 gap-2 mx-auto  md:ml-auto  '>
				<div className='image-section flex justify-center items-center rounded-lg col-span-10 md:col-span-3  '>
					<img
						className='drop-shadow-lg shadow-black mt-5'
						src={profileImage}
						width={170}
						height={170}
						alt='profile'
					/>
				</div>
				<div className='rounded-3xl col-span-12 md:col-span-7 py-5 w-full '>
					<h1 className='black-shadow text-2xl md:text-4xl text-center md:text-left text-white my-3 font-bold w-10/12 md:w-full mx-auto'>
						Abdul Samad Khan
					</h1>
					<div className=' icons-section flex w-10/12 md:w-full justify-evenly items-center py-5 '>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='html-icon text-6xl hover:text-7xl'
								icon={faHtml5}
							/>
						</div>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='css-icon  text-6xl hover:text-7xl'
								icon={faCss3}
							/>
						</div>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='bootstrap-icon  text-6xl hover:text-7xl'
								icon={faBootstrap}
							/>
						</div>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='react-icon  text-6xl hover:text-7xl'
								icon={faReact}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='top-row my-5 md:px-5 md:w-8/12 min-h-[100px] mx-auto  '>
				<p className='text-white  text-justify text-lg black-shadow '>
					Hello, I'm Abdul Samad Khan, a dedicated front-end developer
					with two years of freelancing experience on Fiverr.
					Recently, I've delved into the exciting world of ReactJS,
					mastering its fundamentals and eager to apply my skills in
					dynamic web development.
				</p>
				<button
					className='resume-btn my-5 md:ml-9 text-white font-bold py-2 px-4 rounded'
					onClick={handleDownload}
				>
					download Resume
				</button>
			</div>
		</div>
	);
}

export default Home;
