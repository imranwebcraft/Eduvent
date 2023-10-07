import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	// Get context user to take decision may i give permisiion or not
	const { user, loading } = useContext(AuthContext);

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

	return <Navigate to={"/register"}></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
