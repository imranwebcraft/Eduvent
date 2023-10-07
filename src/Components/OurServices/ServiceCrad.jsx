import PropTypes from "prop-types";
import Rating from "react-rating";

// import { AiOutlineStar } from "react-icons/ai";
// import { AiTwotoneStar } from "react-icons/ai";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCrad = ({ service }) => {
	const { id, name, image, details, price, rating } = service || {};

	return (
		<div className=" block  rounded-lg p-4 border border-violet-200 shadow-sm hover:shadow-md hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all shadow-violet-100">
			<img className=" w-full h-[150px] object-cover" alt="Home" src={image} />

			<div className="my-2">
				<div>
					<div>
						<p className="font-semibold text-xl">{name}</p>
					</div>
				</div>

				<div className="mt-2 text-center">
					<p className=" text-gray-600">{details?.slice(0, 120) + "..."}</p>
				</div>
			</div>
			<div className=" flex justify-center gap-5 items-center mb-2">
				<p className=" text-lg font-medium">
					Price: <span className=" text-base">{price} TK</span>
				</p>
				<p className=" flex items-center">
					<Rating
						initialRating={rating}
						readonly
						emptySymbol={
							<BsStarHalf className="text-violet-600 mr-1"></BsStarHalf>
						}
						fullSymbol={
							<BsStarFill className="text-violet-600 mr-1"></BsStarFill>
						}
					/>
					<span className=" text-base">{rating}</span>
				</p>
			</div>

			<div>
				<Link
					to={`/service/${id}`}
					className="group relative inline-block overflow-hidden border border-violet-600 px-8 py-2 focus:outline-none focus:ring"
					href="/download"
				>
					<span className="absolute inset-y-0 left-0 w-[2px] bg-violet-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

					<span className="relative text-sm font-medium text-violet-600 transition-colors group-hover:text-white">
						Details
					</span>
				</Link>
			</div>
		</div>
	);
};

ServiceCrad.propTypes = {
	service: PropTypes.object,
};

export default ServiceCrad;
