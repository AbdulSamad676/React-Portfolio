import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

function GitHub() {
	// this hook returns the data from the loader
	// const data = useLoaderData();
	const [data, setData] = useState({});
	useEffect(() => {
		fetch('https://api.github.com/users/AbdulSamad676')
			.then(response => response.json())
			.then(responseData => setData(responseData));
	}, []);

	return (
		<div className='flex flex-col justify-center  bg-gray-700 m-4 text-center p-4 text-white '>
			<img
				className='mx-auto rounded-full '
				src={data.avatar_url}
				alt='profile'
				height={200}
				width={200}
			/>
			<p className='mt-3 font-bold text-2xl black-shadow'>{data.name}</p>
			<p className=' p-4 font-thin text-xl black-shadow'>{data.bio}</p>
			<div>
				<Link to='https://github.com/AbdulSamad676'>
					<button className='custom-btn my-5 text-white font-bold py-2 px-4 rounded black-shadow'>
						Visit Github
					</button>
				</Link>
			</div>
		</div>
	);
}

export default GitHub;

// this async await call will be assigned to the loader in the Github Route
// export const githubInfo = async () => {
// 	const response = await fetch('https://api.github.com/users/AbdulSamad676');
// 	return response.json();
// };
