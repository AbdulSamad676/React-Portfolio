import React from 'react';

function Services() {
	return (
		<div className='container mx-auto my-5 border border-black'>
			<h2 className='text-center my-2 py-2 px-5 text-2xl w-max font-bold text-white black-shadow custom-bg rounded-lg mx-auto'>
				Services
			</h2>
			<div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 p-4'>
				<div className='service-item p-4 rounded-lg text-white custom-bg border border-white'>
					1
				</div>
				<div className='service-item p-4 rounded-lg text-white custom-bg border border-white'>
					2
				</div>
				<div className='service-item p-4 rounded-lg text-white custom-bg border border-white'>
					3
				</div>
				<div className='service-item p-4 rounded-lg text-white custom-bg border border-white'>
					1
				</div>
				<div className='service-item p-4 rounded-lg text-white custom-bg border border-white'>
					2
				</div>
				<div className='service-item p-4 rounded-lg text-white custom-bg border border-white'>
					3
				</div>
			</div>
		</div>
	);
}

export default Services;
