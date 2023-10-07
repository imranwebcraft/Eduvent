import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/SVG/Logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
	// use context data to make synamic the login btn
	const { user, logOut } = useContext(AuthContext);

	// Log out event handler
	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success("Log out successful😍");
			})
			.catch(() => {
				toast.error("Something went wrong😥");
			});
	};

	const links = (
		<>
			<li className=" text-gray-700 hover:text-gray-900 duration-200 ease-in">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Home
				</NavLink>
			</li>
			<li className=" text-gray-700 hover:text-gray-900 duration-200 ease-in">
				<NavLink
					to="/services"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Our Service
				</NavLink>
			</li>
			<li className=" text-gray-700 hover:text-gray-900 duration-200 ease-in">
				<NavLink
					to="/partner"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Partner
				</NavLink>
			</li>
			<li className=" text-gray-700 hover:text-gray-900 duration-200 ease-in">
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Contact us
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="font-inter leading-relaxed">
			<nav className="container mx-auto flex items-center justify-between py-5">
				<div className=" flex gap-2 items-center">
					<img className=" w-[60px] h-[50px]" src={logo} alt="" />
					<Link className="  duration-200 text-2xl font-bold" to={"/"}>
						Edu-Vent
					</Link>
				</div>
				<ul className="flex gap-11 items-center font-semibold">{links}</ul>

				{user ? (
					<>
						{" "}
						<div className=" flex items-center gap-2">
							<div>{user.displayName}</div>
							<div className="relative flex-shrink-0">
								<span className="absolute bottom-0 right-0 w-3 h-3 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
								<img
									src={user.photoURL}
									alt=""
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
								/>
							</div>
							<div
								className=" hover:cursor-pointer  bg-violet-500 hover:bg-violet-600 px-8 py-2 ring-2 ring-violet-200  text-white rounded-lg duration-300 ease-in-out hover:shadow-lg
										hover:shadow-violet-200
									"
							>
								<button
									onClick={handleLogOut}
									className=" text-sm font-medium "
									to={"/register"}
								>
									Sign Out
								</button>
							</div>
						</div>
					</>
				) : (
					<>
						<div
							className=" hover:cursor-pointer  bg-violet-500 hover:bg-violet-600 px-8 py-2 ring-2 ring-violet-200  text-white rounded-lg duration-300 ease-in-out hover:shadow-lg
										hover:shadow-violet-200
									"
						>
							<Link className=" text-sm font-medium " to={"/register"}>
								Login
							</Link>
						</div>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
