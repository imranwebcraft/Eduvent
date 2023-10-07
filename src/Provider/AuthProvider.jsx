import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
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

	// Create user with email and password
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Sign in user
	const siginIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// GoogleSignIn
	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};

	// Github sign in
	const gitHubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	};

	//  Set user observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log("Observ", currentUser);
			setUser(currentUser);
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
