import { Link, useLocation, useNavigate } from "react-router-dom";
import loginSVG from "../assets/Images/login2.webp";
import logo from "../assets/SVG/Logo.svg";
import google from "../assets/SVG/Google.svg";
import github from "../assets/SVG/github.svg";
import { PiEyeDuotone } from "react-icons/pi";
import { PiEyeSlashDuotone } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
	// Declare state to manage show and hide password visibility
	const [showPassword, setShowPassword] = useState(false);

	// Use state data
	const { siginIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);

	// Get user targeted page address
	const location = useLocation();
	// Use navigate hook to navigate the user after login
	const navigate = useNavigate();

	// Prevent auto scroll at the bottom
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page on route change
	}, [location.pathname]);

	// Login handle
	const handleLogin = e => {
		e.preventDefault();

		// Get form
		const form = new FormData(e.currentTarget);

		// Get data from field
		const email = form.get("email");
		const password = form.get("password");
		const checkBox = e.target.checkbox.checked;
		console.log(email, password, checkBox);

		// Validate
		if (!checkBox) {
			return toast.error("Please accept Term & Privacy Policy");
		}

		// Handle sign in
		siginIn(email, password)
			.then(response => {
				console.log(response.user);
				toast.success("Log in successful😍");
				// Clear input field
				e.target.reset();
				//Navigate the user
				navigate(location.state ? location.state : "/");
			})
			.catch(error => {
				toast.error("Something went wrong😥" + error.message);
			});
	};

	// Handle Google Sign in
	const handlGoogleSignIn = () => {
		googleSignIn()
			.then(response => {
				console.log(response.user);
				toast.success("Google log in successful😍");
				//Navigate the user
				navigate(location.state ? location.state : "/");
			})
			.catch(() => {
				toast.error("Something went wrong😥");
			});
	};

	// Handle GitHub Sign in
	const handlGitHubSignIn = () => {
		gitHubSignIn()
			.then(response => {
				console.log(response.user);
				toast.success("GitHub log in successful😍");
				//Navigate the user
				navigate(location.state ? location.state : "/");
			})
			.catch(() => {
				toast.error("Something went wrong😥");
			});
	};

	return (
		<div className=" container mx-auto  min-h-screen mt-20">
			<Helmet>
				<title>Eduvent - Login</title>
			</Helmet>
			<div className=" h-full flex flex-col lg:flex-row justify-between items-center">
				{/* Form */}
				<div className=" w-full lg:w-3/5">
					<div className=" w-full lg:w-1/2 mx-auto h-full flex flex-col gap-10 items-center justify-center">
						<div className=" text-center">
							<span className="flex justify-center">
								<img src={logo} alt="" />
							</span>
							<h1 className=" text-text-one text-3xl font-bold mb-2">
								Welcome Back
							</h1>
							<p className=" text-gray-600 font-medium">
								Don&apos;t have an account?
								<Link to={"/register"}>
									<span className=" text-violet-500 font-medium ml-1 hover:underline">
										Register
									</span>
								</Link>
							</p>
						</div>

						<form onSubmit={handleLogin} className="w-full">
							<div className=" mt-5">
								<label className="block font-medium">Email</label>
								<input
									className="w-full text-gray-900   border-gray-300 rounded-lg shadow-sm focus:border-violet-500 focus:ring-violet-500 placeholder:text-sm placeholder:opacity-80"
									type="email"
									name="email"
									placeholder="example@gmail.com"
									required
								/>
							</div>
							<div className="relative mt-5">
								<div className=" flex items-center justify-between">
									<label className="block font-medium">Password</label>
								</div>
								<input
									className="w-full text-gray-900  border-gray-300 rounded-lg shadow-sm focus:border-violet-500 focus:ring-violet-500 placeholder:text-sm placeholder:opacity-80"
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="Enter your Password"
									required
								/>
								<div
									onClick={() => setShowPassword(!showPassword)}
									className=" absolute top-9 right-3 hover:cursor-pointer"
								>
									{showPassword ? (
										<PiEyeDuotone className="text-lg"></PiEyeDuotone>
									) : (
										<PiEyeSlashDuotone className=" text-lg"></PiEyeSlashDuotone>
									)}
								</div>
							</div>
							<div className=" flex items-center mt-4">
								<input
									className="mr-2 rounded-sm focus:ring-violet-500 border-gray-300 text-violet-500"
									type="checkbox"
									name="checkbox"
								/>
								<label>
									I agree to the
									<a className="text-violet-500 font-medium px-2" href="#">
										Terms
									</a>
									and
									<a className="text-violet-500 font-medium px-2" href="#">
										Privacy Policy
									</a>
								</label>
							</div>

							<div className=" w-full text-center py-2 rounded-lg bg-violet-500 hover:bg-violet-600 mt-3  duration-300 ease-in-out">
								<input
									className=" text-white font-medium hover:cursor-pointer"
									type="submit"
									value="Log in"
								/>
							</div>

							<div className=" grid grid-cols-3 items-center mt-5">
								<hr />
								<p className=" text-center">Or Continue With</p>
								<hr />
							</div>
							{/* Social Login */}

							<div className=" grid gap-2 grid-cols-2 mt-2">
								{/* Google */}
								<button
									onClick={handlGoogleSignIn}
									className=" bg-gray-100 hover:bg-gray-200  duration-300 ease-in-out cursor-pointer rounded-md px-2 py-2 flex items-center justify-center gap-2"
								>
									<img
										className="w-[20px] h-[20px]"
										src={google}
										alt="Google Logo"
									/>
									<span className="text-gray-900  text-base font-medium">
										Google
									</span>
								</button>

								{/* Github */}
								<button
									onClick={handlGitHubSignIn}
									className=" bg-gray-100 hover:bg-gray-200 duration-300 ease-in-out cursor-pointer rounded-md px-2 py-2 flex items-center justify-center gap-2"
								>
									<img
										className="w-[25px] h-[25px]"
										src={github}
										alt="Google Logo"
									/>
									<span className=" text-gray-900 text-base font-medium">
										GitHub
									</span>
								</button>
							</div>
							{/* Copyright */}
							<div className=" flex  justify-center mt-5">
								<p className=" text-sm text-gray-600">
									Copyright&copy;Eduvent.com
								</p>
							</div>
						</form>
					</div>
				</div>
				{/* Image */}
				<div className=" hidden lg:block w-2/5">
					<div className=" w-full h-full flex justify-center items-center">
						<img src={loginSVG} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
