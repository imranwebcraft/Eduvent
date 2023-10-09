import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import OurServices from "../Components/OurServices/OurServices";
import Footer from "../Components/Footer/Footer";
import Experience from "../Components/Experience/Experience";
import ClientSay from "../Components/ClientSay/ClientSay";
import { Helmet } from "react-helmet-async";

import Summary from "../Components/Summary/Summary";

const Home = () => {
	const services = useLoaderData();

	return (
		<div>
			<Helmet>
				<title>Eduvent - Home</title>
			</Helmet>
			<Banner></Banner>
			<OurServices services={services}></OurServices>
			<Experience></Experience>
			<ClientSay></ClientSay>
			<Summary></Summary>
			<Footer></Footer>
		</div>
	);
};

export default Home;
