import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import OurServices from "../Components/OurServices/OurServices";
import Footer from "../Components/Footer/Footer";
import Experience from "../Components/Experience/Experience";
import ClientSay from "../Components/ClientSay/ClientSay";

const Home = () => {
	const services = useLoaderData();
	return (
		<div>
			<Banner></Banner>
			<OurServices services={services}></OurServices>
			<Experience></Experience>
			<ClientSay></ClientSay>
			<Footer></Footer>
		</div>
	);
};

export default Home;
