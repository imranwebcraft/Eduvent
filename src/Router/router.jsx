import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "../Private/PrivateRoute";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import Blog from "../Pages/Blog";
import Profile from "../Pages/Profile";
import FAQ from "../Pages/FAQ";

// All router
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("/services.json"),
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},

			{
				path: "/team",
				element: <Team></Team>,
			},
			{
				path: "/faq",
				element: <FAQ></FAQ>,
			},
			{
				path: "/blog",
				element: (
					<PrivateRoute>
						<Blog></Blog>
					</PrivateRoute>
				),
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<Profile></Profile>
					</PrivateRoute>
				),
			},

			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/service/:id",
				element: (
					<PrivateRoute>
						<ServiceDetails></ServiceDetails>
					</PrivateRoute>
				),
				loader: () => fetch("/services.json"),
			},
		],
	},
]);

export default router;
