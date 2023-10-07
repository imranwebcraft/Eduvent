import PropTypes from "prop-types";
import ServiceCrad from "./ServiceCrad";

const OurServices = ({ services }) => {
	console.log(services);
	return (
		<section className="text-center container mx-auto py-24">
			<div className=" space-y-2 mb-5">
				<h1 className=" text-4xl font-bold text-text-one">
					Our <span className="text-violet-500">Sevices</span>
				</h1>
				<p className=" text-lg text-gray-700">
					Let&apos;s get our best classes services and improve your inttitute
					education quality
				</p>
			</div>

			<div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{services?.map(service => (
					<ServiceCrad key={service.id} service={service}></ServiceCrad>
				))}
			</div>
		</section>
	);
};

OurServices.propTypes = {
	services: PropTypes.array,
};

export default OurServices;
