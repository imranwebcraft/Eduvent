import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className="font-inter">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Toaster />
		</div>
	);
};

export default MainLayout;
