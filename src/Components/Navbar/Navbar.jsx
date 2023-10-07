import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/SVG/Logo.svg";

const Navbar = () => {
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
				<div
					className=" hover:cursor-pointer  bg-violet-500 hover:bg-violet-600 px-8 py-2 ring-2 ring-violet-200  text-white rounded-lg duration-300 ease-in-out hover:shadow-lg
                    hover:shadow-violet-200
                "
				>
					<Link className=" text-sm font-medium " to={"/register"}>
						Register
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
