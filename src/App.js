import './App.css';
import React, { } from "react";
// import { useSelector } from 'react-redux';

import { RouterProvider } from "react-router-dom";
import { router } from './actions/routes';
import { Toaster } from 'react-hot-toast';
// import GlobalLoader from './components/commons/GlobalLoader'

function App() {
	// const { isLoanding } = useSelector((state) => state.navbar);

	return (
		<div>
			{/* {!!isLoanding && <GlobalLoader />} */}
			<Toaster 
				position="top-right" 
				toastOptions={{
						duration: 5000,
					}}
			/>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
