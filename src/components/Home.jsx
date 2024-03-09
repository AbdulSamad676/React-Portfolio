import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBaseball } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/images/profile.png';
import {
	faHtml5,
	faCss3,
	faBootstrap,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
function Home() {
	return (
		<div className='hero-section '>
			<div className='top-row grid md:grid-cols-10 gap-2  ml-auto  '>
				<div className='image-section flex justify-center items-center rounded-lg col-span-2 '>
					<img
						className='drop-shadow-lg shadow-black mt-5'
						src={profileImage}
						width={170}
						height={170}
						alt='profile'
					/>
				</div>
				<div className='rounded-3xl col-span-6 py-5 w-full ml-5'>
					<h1 className='black-shadow text-4xl text-white my-3 font-bold'>
						Abdul Samad Khan
					</h1>
					<div className='icons-section flex w-9/12 justify-evenly items-center py-5 '>
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
			<div className='top-row my-5 px-5 w-7/12 min-h-[100px] mx-auto  '>
				<p className='text-white ml-9 text-justify text-lg black-shadow '>
					Hello, I'm Abdul Samad Khan, a dedicated front-end developer
					with two years of freelancing experience on Fiverr.
					Recently, I've delved into the exciting world of ReactJS,
					mastering its fundamentals and eager to apply my skills in
					dynamic web development.
				</p>
				<button className='resume-btn my-5 sm:ml-9 text-white font-bold py-2 px-4 rounded'>
					download Resume
				</button>
			</div>
		</div>
	);
}

export default Home;
