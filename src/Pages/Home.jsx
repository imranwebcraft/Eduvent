import { useLoaderData, useLocation } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import OurServices from "../Components/OurServices/OurServices";
import Footer from "../Components/Footer/Footer";
import Experience from "../Components/Experience/Experience";
import ClientSay from "../Components/ClientSay/ClientSay";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Home = () => {
	const services = useLoaderData();
	// Prevent auto scroll at the bottom
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div>
			<Helmet>
				<title>Eduvent - Home</title>
			</Helmet>
			<Banner></Banner>
			<OurServices services={services}></OurServices>
			<Experience></Experience>
			<ClientSay></ClientSay>
			<Footer></Footer>
		</div>
	);
};

export default Home;
