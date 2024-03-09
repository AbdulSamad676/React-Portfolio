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
			<div className='top-row grid grid-cols-10 gap-2  ml-auto  '>
				<div className='image-section   rounded-lg col-span-2 '>
					<img
						className='drop-shadow-lg shadow-black'
						src={profileImage}
						width={200}
						height={200}
						alt='profile'
					/>
				</div>
				<div className=' flex justify-between items-center flex-col   rounded-3xl col-span-6'>
					<div className='title-text w-9/12 mt-5 text-left '>
						<h1 className='main-heading text-4xl text-white font-bold'>
							Abdul Samad Khan
						</h1>
					</div>
					<div className='icons-section flex w-9/12 justify-evenly items-center   py-5'>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='html-icon'
								icon={faHtml5}
							/>
						</div>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='css-icon'
								icon={faCss3}
							/>
						</div>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='bootstrap-icon'
								icon={faBootstrap}
							/>
						</div>
						<div className='icons-item'>
							<FontAwesomeIcon
								className='react-icon'
								icon={faReact}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='top-row my-5 px-5 w-7/12   min-h-[100px]  mx-auto  '>
				<p className='text-white ml-9 text-justify text-lg pera-text '>
					Hello, I'm Abdul Samad Khan, a dedicated front-end developer
					with two years of freelancing experience on Fiverr.
					Recently, I've delved into the exciting world of ReactJS,
					mastering its fundamentals and eager to apply my skills in
					dynamic web development.
				</p>
			</div>
		</div>
	);
}

export default Home;
