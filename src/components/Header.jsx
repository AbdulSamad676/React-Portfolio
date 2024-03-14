import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className='shadow sticky z-50 top-0'>
			<nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
				<div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
					<Link to='/' className='flex items-center'>
						<img
							src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png'
							className='mr-3 h-12'
							alt='Logo'
						/>
					</Link>
					<div className='flex items-center lg:order-2 hidden md:block'>
						<Link
							to='#'
							className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
						>
							Log in
						</Link>
						<Link
							to='#'
							className='text-white resume-btn focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
						>
							Get started
						</Link>
					</div>
					{/* button added here */}
					<div className='block lg:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
						>
							<svg
								className={`fill-current h-3 w-3 ${
									isOpen ? 'hidden' : 'block'
								}`}
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
							</svg>
							<svg
								className={`fill-current h-3 w-3 ${
									isOpen ? 'block' : 'hidden'
								}`}
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
							</svg>
						</button>
					</div>
					{/* Ends Here */}
					<div
						className={`w-full block flex-grow lg:flex justify-center lg:items-center lg:w-auto ${
							isOpen ? 'block' : 'hidden'
						}`}
						id='mobile-menu-2'
					>
						<ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
							<li>
								<NavLink
									onClick={() => {
										setIsOpen(false);
									}}
									to='/'
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 ${
											isActive
												? 'primary-color '
												: 'text-gray-500'
										} border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => {
										setIsOpen(false);
									}}
									to='/about'
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 ${
											isActive
												? 'primary-color'
												: 'text-gray-500'
										} border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
									}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => {
										setIsOpen(false);
									}}
									to='/contact'
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 
                                        ${
											isActive
												? 'primary-color '
												: 'text-gray-500'
										} border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
									}
								>
									Contact
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => {
										setIsOpen(false);
									}}
									to='/projects'
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 
                                        ${
											isActive
												? 'primary-color'
												: 'text-gray-500'
										} border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
									}
								>
									Projects
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
