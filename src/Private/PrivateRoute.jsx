import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	// Get context user to take decision may i give permisiion or not
	const { user } = useContext(AuthContext);
	console.log(user);

	if (user) {
		return children;
	}

	return <Navigate to={"/register"}></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
