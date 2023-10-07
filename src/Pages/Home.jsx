import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import OurServices from "../Components/OurServices/OurServices";
import Footer from "../Components/Footer/Footer";

const Home = () => {
	const services = useLoaderData();
	return (
		<div>
			<Banner></Banner>
			<OurServices services={services}></OurServices>
			<Footer></Footer>
		</div>
	);
};

export default Home;
