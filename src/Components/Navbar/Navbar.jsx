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
				toast.success("Sign out successful😍");
			})
			.catch(() => {
				toast.error("Something went wrong😥");
			});
	};

	// All links here
	const links = (
		<>
			<li className=" text-gray-700  hover:text-violet-500 duration-200 ease-in">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Home
				</NavLink>
			</li>
			<li className=" text-gray-700 hover:text-violet-500 duration-200 ease-in">
				<NavLink
					to="/team"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Team
				</NavLink>
			</li>
			<li className=" text-gray-700 hover:text-violet-500 duration-200 ease-in">
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Contact
				</NavLink>
			</li>
			<li className=" text-gray-700 hover:text-violet-500 duration-200 ease-in">
				<NavLink
					to="/faq"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					FAQ
				</NavLink>
			</li>

			{/* Links based on user present or not */}

			<li className=" text-gray-700 hover:text-violet-500 duration-200 ease-in">
				<NavLink
					to="/blog"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Blog
				</NavLink>
			</li>
			<li className=" text-gray-700 hover:text-violet-500 duration-200 ease-in">
				<NavLink
					to="/profile"
					className={({ isActive }) => (isActive ? " text-violet-500  " : "")}
				>
					Profile
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="leading-relaxed">
			<nav className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-5">
				{/* Logo part */}
				<div className=" flex gap-2 items-center">
					<img className=" w-[50px] h-[40px]" src={logo} alt="" />
					<Link className="  duration-200 text-2xl font-bold" to={"/"}>
						Eduvent
					</Link>
				</div>

				{/* Nav search button */}
				<div className="space-y-1 mt-2">
					<div className="relative">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<button
								type="button"
								title="search"
								className="p-1 focus:outline-none focus:ring"
							>
								<svg
									fill="currentColor"
									viewBox="0 0 512 512"
									className="w-4 h-4 text-gray-600"
								>
									<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
								</svg>
							</button>
						</span>
						<input
							type="text"
							name="Search"
							placeholder="Search event..."
							className="w-full py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none focus:border-violet-500 focus:ring focus:ring-violet-200"
						/>
					</div>
				</div>

				{/* Links */}
				<ul className="flex flex-wrap gap-5 lg:gap-11 items-center font-medium mt-2">
					{links}
				</ul>

				{/* Signup or  sign out button and user info (if user logged in) part*/}
				{user ? (
					<>
						<div className=" flex items-center gap-2 mt-2">
							<div className=" bg-gray-100 px-2 py-[5px] rounded hover:bg-gray-200 text-sm font-medium">
								{user.displayName}
							</div>
							<div className="relative flex-shrink-0">
								<span className="absolute bottom-0 right-0 w-3 h-3 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
								<img
									src={user.photoURL}
									alt=""
									className="w-10 h-10 border-2 rounded-full border-violet-500 "
								/>
							</div>
							<div className=" hover:cursor-pointer  bg-violet-500 hover:bg-violet-600 px-6 py-[6px] ring ring-violet-200  text-white rounded duration-300 ease-linear">
								<Link
									to={"/login"}
									onClick={handleLogOut}
									className=" text-sm font-medium "
								>
									Sign Out
								</Link>
							</div>
						</div>
					</>
				) : (
					<>
						<div className=" mt-2  hover:cursor-pointer  bg-violet-500 hover:bg-violet-600 px-6 py-[6px] ring ring-violet-200  text-white rounded duration-300 ease-linear">
							<Link className=" text-sm font-medium " to={"/register"}>
								Sign Up
							</Link>
						</div>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
