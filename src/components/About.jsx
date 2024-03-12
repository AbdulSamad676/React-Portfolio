import React, { useState } from 'react';
import aboutImg from '../assets/images/about.png';
function About() {
	const [matric, setMatric] = useState(true);
	const [intermediate, setIntermediate] = useState(false);
	const [bachelor, setBachelor] = useState(false);
	function handleMatric() {
		setMatric(true);
		setBachelor(false);
		setIntermediate(false);
	}

	function handleIntermediate() {
		setMatric(false);
		setBachelor(false);
		setIntermediate(true);
	}
	function handleBachelor() {
		setMatric(false);
		setBachelor(true);
		setIntermediate(false);
	}

	return (
		<>
			<div className='container mx-auto rounded-lg grid md:grid-cols-12 gap-10 my-5 md:w-10/12'>
				<div className='flex justify-center w-full md:col-span-4'>
					<div className=' flex flex-col w-full justify-start items-center  rounded-lg'>
						<img
							className='rounded-xl'
							src={aboutImg}
							width={300}
							height={200}
							alt='aboutImage'
						/>
						<h2 className='text-3xl font-bold'>Abdul Samad Khan</h2>
						<p>Computer Software Engineer</p>
						<button className='custom-btn my-5 text-justify  font-bold py-2 px-4 rounded'>
							Read More
						</button>
					</div>
				</div>
				<div className='custom-bg h-max rounded-lg p-4 sm:mx-0 mx-3  md:col-span-8'>
					<h2 className='text-3xl font-bold text-center my-3 text-white black-shadow'>
						Who I am
					</h2>
					<p className='mx-3 text-white black-shadow text-justify '>
						Hello, I'm Abdul Samad Khan, a dedicated front-end
						developer with two years of freelancing experience on
						Fiverr. My journey in web programming has equipped me
						with a solid foundation in HTML, CSS, Bootstrap, and
						JavaScript. Recently, I've delved into the exciting
						world of ReactJS, mastering its fundamentals and eager
						to apply my skills in dynamic web development.Currently
						seeking opportunities to contribute my skills as a
						ReactJS Developer for a forward-thinking company. If
						you're looking for someone who combines technical
						proficiency with a passion for innovation, let's
						connect! I'm excited about the prospect of collaborating
						on impactful projects and being a valuable asset to your
						team.
					</p>
					<button className='bg-orange-900 my-5 sm:ml-3 text-white font-bold py-2 px-4 rounded'>
						Read More...
					</button>
				</div>
			</div>
			<div className='container md:w-10/12 mx-auto border boder-black custom-bg rounded-lg py-5 md:py-10'>
				<h2 className='text-3xl text-center font-bold mb-3 text-white  black-shadow'>
					Education
				</h2>
				<div className='buttons-section flex flex-wrap justify-center md:justify-between w-full md:w-5/12  mx-auto mb-5'>
					<button
						className='primary-btn  font-bold py-2 px-4 rounded focus:bg-green-950 focus:text-white '
						onClick={handleMatric}
					>
						Matric
					</button>
					<button
						className='primary-btn  font-bold py-2 px-4 rounded focus:bg-violet-950 focus:text-white'
						onClick={handleIntermediate}
					>
						Intermediate
					</button>
					<button
						className='primary-btn  font-bold py-2 px-4 rounded'
						onClick={handleBachelor}
					>
						Bachelor
					</button>
				</div>
				{matric && (
					<div className='edu-section bg-green-950 text-white  rounded w-10/12 md:w-5/12  py-5 px-3 mx-auto box-border'>
						<h3 className='text-xl font-bold'>
							Board of Intermediate and Secondary Education Bannu
						</h3>
						<p className='p-0 my-3'>
							IQRA Public High School Bannu
						</p>
						<p>
							Obtained Marks:{' '}
							<b className='underline'>927/1100</b> with Grade A1
						</p>
					</div>
				)}
				{intermediate && (
					<div className='edu-section text-white border border-white rounded w-10/12 md:w-5/12  py-5 px-3 mx-auto box-border'>
						<h3 className='text-xl font-bold'>
							Board of Intermediate and Secondary Education Bannu
						</h3>
						<p className='p-0 my-3'>
							Govt Degree College No 2 Bannu
						</p>
						<p>
							Obtained Marks:{' '}
							<b className='underline'>848/1100</b> with Grade A
						</p>
					</div>
				)}
				{bachelor && (
					<div className='edu-section text-white bg-orange-800 black-shadow rounded w-10/12 md:w-5/12  py-5 px-3 mx-auto box-border'>
						<h3 className='text-xl font-bold'>
							University of Engineering and Technology Peshawar
						</h3>
						<p className='p-0 my-3'>
							Computer Software Engineering
						</p>
						<p>
							Obtained Marks:{' '}
							<b className='underline'>3.05/4.00</b> with Grade A
						</p>
					</div>
				)}
			</div>
		</>
	);
}

export default About;
