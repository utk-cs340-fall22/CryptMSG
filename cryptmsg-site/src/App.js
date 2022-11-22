import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Messaging from './pages/Messaging';

function App() {
	return (
		<body>
			{/* <Main />
			<Chatbox />
			{/* <ChatSettings /> 
			<Navbar/> */}
			<Router>
				<Routes>
					{/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
					<Route path="/" element={<Home/>} />
					<Route path="/messages" element={<Messaging />} />
				</Routes>
			</Router>
		</body>
  	);
}

export default App;
