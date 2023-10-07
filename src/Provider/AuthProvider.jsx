import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../Config/firebase.config";

// ******Create contect******
export const AuthContext = createContext();

// Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	// User state
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Create user with email and password
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Sign in user
	const siginIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// GoogleSignIn
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Github sign in
	const gitHubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};

	// Logout user
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	//  Set user observer
	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log("Observ", currentUser);
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// Pass all context value as object
	const authInfo = {
		user,
		createUser,
		siginIn,
		googleSignIn,
		gitHubSignIn,
		logOut,
		loading,
	};
	// Set provider and get the full app as children
	return (
		<AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
