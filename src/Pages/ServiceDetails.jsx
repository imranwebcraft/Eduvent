import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowServiceDetails from "../Components/ShowServiceDetails/ShowServiceDetails";
import Footer from "../Components/Footer/Footer";

const ServiceDetails = () => {
	// put the find service in a state
	const [service, setService] = useState(null);
	console.log(service);

	// use data from loader
	const services = useLoaderData();

	//get id from params
	const { id } = useParams();
	const idInt = parseInt(id);

	//Find the exact one for details

	useEffect(() => {
		const findService = services?.find(service => service.id === idInt);
		setService(findService);
	}, [idInt, services]);

	return (
		<div className=" container mx-auto">
			<ShowServiceDetails service={service}></ShowServiceDetails>
			<Footer></Footer>
		</div>
	);
};

export default ServiceDetails;
