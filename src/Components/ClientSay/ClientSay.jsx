const ClientSay = () => {
	return (
		<section className="relative bg-white py-20">
			<div className="relative container mx-auto">
				{/* Section Title */}
				<div>
					<h1 className="text-4xl font-bold text-center text-gray-800 capitalize lg:text-3xl">
						What our <span className="text-violet-500 ">clients</span> say
					</h1>
					<p className="max-w-2xl mx-auto mt-2 text-center text-gray-500">
						Discover the Voices of Satisfaction and Success
					</p>
				</div>

				{/* All testimonial Cards */}
				<section className="max-w-7xl mx-auto grid grid-cols-1 gap-5 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
					{/* Testimonial Card One */}
					<div
						className="flex flex-col hover:cursor-pointer p-8 shadow-md rounded-lg hover:shadow-lg duration-300 ease-linear border-violet-200"
						data-aos="flip-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-shine"
					>
						<p className="leading-relaxed text-gray-600 mb-2">
							&quot;Exceptional service! The team went above and beyond to make
							our event a grand success. From the beautifully decorated venue to
							the seamless coordination of every detail, they made sure
							everything was perfect.!&quot;
						</p>

						<div className="flex mt-auto items-center -mx-2">
							<img
								className="object-cover mx-2 rounded-full w-10 shrink-0 h-10 ring-4 ring-gray-600"
								src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
							/>

							<div className="mx-2">
								<h1 className="font-semibold text-gray-800">
									Dr. Md. Monirul Islam
								</h1>
								<span className="text-sm text-gray-500">
									Professor, University Of Dhaka
								</span>
							</div>
						</div>
					</div>
					{/* Testimonial Card Two */}
					<div
						className="flex flex-col hover:cursor-pointer p-8 shadow-md rounded-lg hover:shadow-lg duration-300 ease-linear border-violet-200"
						data-aos="flip-up"
						data-aos-duration="1500"
						data-aos-easing="ease-in-shine"
					>
						<p className="leading-relaxed text-gray-600">
							&quot;I was truly impressed by the professionalism and dedication
							of the event management team. They made our special day even more
							special by taking care of every aspect, from planning to
							execution.&quot;
						</p>

						<div className="flex items-center mt-auto -mx-2">
							<img
								className="object-cover mx-2 rounded-full w-10 shrink-0 h-10 ring-4 ring-gray-300 dark:ring-gray-700"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt=""
							/>

							<div className="mx-2">
								<h1 className="font-semibold text-gray-800">Md. Samad Khan</h1>
								<span className="text-sm text-gray-500">Dhaka College</span>
							</div>
						</div>
					</div>
					{/*Testimonial Card Three */}
					<div
						className="flex flex-col hover:cursor-pointer p-8 shadow-md rounded-lg hover:shadow-lg duration-300 ease-linear border-violet-200"
						data-aos="flip-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-shine"
					>
						<p className="leading-relaxed text-gray-600">
							&quot;The attention to detail and creativity exhibited by the team
							were outstanding. Our guests were not only impressed but also
							delighted with the unique and innovative ideas that the team
							brought to the table.&quot;
						</p>

						<div className="flex items-center mt-auto -mx-2">
							<img
								className="object-cover mx-2 rounded-full w-10 shrink-0 h-10 ring-4 ring-gray-300 dark:ring-gray-700"
								src="https://images.unsplash.com/photo-1601655781320-205e34c94eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt=""
							/>

							<div className="mx-2">
								<h1 className="font-semibold text-gray-800">
									Md. Sirajul Islam
								</h1>
								<span className="text-sm text-gray-500">
									North South University
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default ClientSay;
