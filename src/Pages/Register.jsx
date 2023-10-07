// import registerImg from "../assets/Images/register1.jpg";
import logo from "../assets/SVG/Logo.svg";
import signUpImg from "../assets/Images/register3.webp";
import { PiEyeDuotone } from "react-icons/pi";
import { PiEyeSlashDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
	// Declare state to manage show and hide password visibility
	const [showPassword, setShowPassword] = useState(false);

	// use context
	const { createUser } = useContext(AuthContext);

	// Form submit handler
	const handleRegistration = e => {
		e.preventDefault();

		//Get form
		const form = new FormData(e.currentTarget);

		// Get form data
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		const photo = form.get("files");
		console.log(name, email, password, photo);

		// Create user with email and password

		createUser(email, password)
			.then(response => {
				console.log(response.user);
				toast.success("User registration successful😍");

				// Clear input field
				e.target.reset();
			})
			.catch(() => {
				toast.error("Something went wrong😥");
			});
	};

	return (
		<div className=" container mx-auto h-[80vh] mt-5">
			<div className=" h-full flex justify-between items-center">
				{/* Form */}
				<div className=" w-3/5">
					<div className=" w-1/2 mx-auto h-full flex flex-col gap-10 items-center justify-center">
						<div className=" text-center">
							<span className="flex justify-center">
								<img src={logo} alt="" />
							</span>
							<h1 className=" text-3xl font-bold mb-2">Create Your Accout</h1>
							<p className=" text-text-one font-medium">
								Already register?
								<Link to={"/login"}>
									<span className=" text-violet-500 font-medium ml-1 hover:underline">
										Log in
									</span>
								</Link>
							</p>
						</div>

						<form onSubmit={handleRegistration} className="w-full">
							<div className=" mt-5">
								<label className="block font-medium">Name</label>
								<input
									className="w-full text-gray-900  border-gray-300 rounded-lg shadow-sm focus:border-violet-500 focus:ring-violet-500  placeholder:text-sm placeholder:opacity-80"
									type="text"
									name="name"
									placeholder="Enter your name"
									required
								/>
							</div>
							<div className=" mt-5">
								<label className="block fontme">Email</label>
								<input
									className="w-full text-gray-900  border-gray-300 rounded-lg shadow-sm focus:border-violet-500 focus:ring-violet-500 placeholder:text-sm placeholder:opacity-80"
									type="email"
									name="email"
									placeholder="example@gmail.com"
									required
								/>
							</div>
							<div className="relative mt-5">
								<div className=" flex items-center justify-between">
									<label className="block fontme">Password</label>
								</div>
								<input
									className="w-full text-gray-900 border-gray-300 rounded-lg shadow-sm focus:border-violet-500 focus:ring-violet-500 placeholder:text-sm placeholder:opacity-80"
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
							<div className=" mt-5">
								<label className="block fontme">Attachment</label>
								<input
									className="w-full text-gray-900  border-gray-300 rounded-lg shadow-sm focus:border-violet-500 focus:ring-violet-500 placeholder:text-sm placeholder:opacity-80"
									name="files"
									placeholder="Enter image URL"
									// required
								/>
							</div>

							<div className=" flex items-center mt-4">
								<input
									className="mr-2 rounded-sm focus:ring-violet-500 border-gray-300 text-violet-500 placeholder:text-sm placeholder:opacity-80"
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

							<div className=" w-full text-center py-2 rounded-lg bg-violet-500 hover:bg-violet-600 mt-3 duration-300 ease-in-out">
								<input
									className=" text-white font-medium hover:cursor-pointer"
									type="submit"
									value="Sign Up"
								/>
							</div>

							<div className=" flex justify-center mt-10">
								<p>Copyright &copy; Edu-Vent.com</p>{" "}
							</div>
						</form>
					</div>
				</div>
				{/* Image */}
				<div className="w-2/5">
					<div className=" w-full h-full flex justify-center items-center">
						<img src={signUpImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
