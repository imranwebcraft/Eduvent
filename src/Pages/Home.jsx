import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import OurServices from "../Components/OurServices/OurServices";

const Home = () => {
	const services = useLoaderData();
	return (
		<div>
			<Banner></Banner>
			<OurServices services={services}></OurServices>
		</div>
	);
};

export default Home;
