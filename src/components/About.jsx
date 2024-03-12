import React from 'react';
import aboutImg from '../assets/images/about.png';
function About() {
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
			<div className='container w-10/12 mx-auto border boder-black custom-bg rounded-lg'>
				<h2 className='text-3xl text-center font-bold  text-white my-3 black-shadow'>
					Education
				</h2>
				<div className='buttons-section flex justify-evenly w-5/12 p-2 mx-auto'>
					<button className='primary-btn  text-justify  font-bold py-2 px-4 rounded'>
						Matric
					</button>
					<button className='primary-btn  text-justify  font-bold py-2 px-4 rounded'>
						Intermediate
					</button>
					<button className='primary-btn  text-justify  font-bold py-2 px-4 rounded'>
						Bachelor
					</button>
				</div>
				<div className='edu-section'>Here are the Education</div>
			</div>
		</>
	);
}

export default About;
