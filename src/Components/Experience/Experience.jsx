import experence from "../../assets/SVG/Experiencesvg.svg";
import heart from "../../assets/SVG/hearts.svg";
import team from "../../assets/SVG/jigsaw.svg";

const Experience = () => {
	return (
		<div className=" relative bg-violet-50 py-10">
			<div className=" container mx-auto flex gap-5 lg:gap-0 flex-col lg:flex-row items-center">
				{/* Left part - Image part */}
				<div
					className=" flex-1 top-[50%]"
					data-aos="fade-right"
					data-aos-duration="1200"
					data-aos-easing="ease-in-out"
				>
					<img
						className=" w-1/2 mx-auto"
						src={experence}
						alt="experience-image"
					/>
				</div>
				{/* Right part - Content part */}
				<div
					className=" flex-1"
					data-aos="flip-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in"
				>
					<div className=" mb-11">
						<h3 className=" text-3xl font-bold text-center lg:text-left">
							Premium <span className=" text-violet-500">Event</span> Experience
						</h3>
					</div>
					<div className=" space-y-8">
						<div className=" flex gap-5">
							<div className=" bg-violet-400 p-2 rounded-md flex justify-center items-center">
								<img className=" w-[25px]" src={heart} alt="" />
							</div>
							<div>
								<h3 className=" text-lg font-medium">Easily Accessible</h3>
								<p className=" text-sm text-gray-600">
									We are always ready to provide joyful educational event
									anytime.
								</p>
							</div>
						</div>
						<div className=" flex gap-5">
							<div className=" bg-violet-400 p-2 rounded-md flex justify-center items-center">
								<img className=" w-[25px]" src={team} alt="" />
							</div>
							<div>
								<h3 className=" text-lg font-medium">Expert Team</h3>
								<p className=" text-sm text-gray-600">
									Our team members are always commited to serve best service for
									you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
