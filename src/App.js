import React from "react";
import { Landing, Error, DashBoard, Register } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<DashBoard />} />
				<Route path="landing" element={<Landing />} />
				<Route path="register" element={<Register />} />
				<Route path="*" element={<Error></Error>} />
			</Routes>
			<ToastContainer position="top-center" />
		</Router>
	);
};

export default App;
