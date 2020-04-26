import React, { Suspense } from 'react';
import { useResource } from './resource';
import { Posts } from './Posts';
import { Users } from './Users';

const resource = useResource();

export const App = () => {
	return (
		<div className="container">
			<h1>Suspence for data fetching</h1>
			{/* <Suspense fallback={<p>loading</p>}>
				<Posts resource={resource} />
			</Suspense>
			<Suspense fallback={<p>loading</p>}>
				<Users resource={resource} />
			</Suspense> */}
			<Suspense fallback={<p>loading</p>}>
				<Posts resource={resource} />
				<Users resource={resource} />
			</Suspense>
		</div>
	)
}

export default App;
