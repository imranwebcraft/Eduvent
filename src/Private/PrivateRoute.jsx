import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	// Get context user to take decision may i give permisiion or not
	const { user, loading } = useContext(AuthContext);

	// Use location to get user desire path
	const location = useLocation();
	console.log(location);

	// If loading true show the loader to prevent redirect the user to the login page
	if (loading) {
		return (
			<div className="flex h-screen items-center justify-center space-x-2">
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
