import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className="font-inter px-2 lg:px-0">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Toaster />
		</div>
	);
};

export default MainLayout;
