const Summary = () => {
	return (
		<div>
			<section className="bg-white container mx-auto">
				<div className="mx-auto py-12 sm:px-6 md:py-16">
					{/* Section Title */}
					<div>
						<h1 className="text-4xl font-bold text-center text-gray-800 capitalize lg:text-3xl">
							Education&apos;s <span className="text-violet-500 ">Trusted</span>{" "}
							Companion
						</h1>
						<p className="max-w-2xl mx-auto mt-2 text-center text-gray-500">
							Your Partner in Educational Excellence
						</p>
					</div>
					<div className="mt-8 sm:mt-12">
						<dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-200">
							<div
								className="flex flex-col px-4 py-8 text-center"
								data-aos="zoom-in-up"
								data-aos-duration="1500"
								data-aos-easing="ease-in-shine"
							>
								<dt className="order-last text-lg font-medium text-gray-500">
									Event Held
								</dt>

								<dd className="text-4xl font-extrabold text-violet-600 md:text-5xl">
									576
								</dd>
							</div>

							<div
								className="flex flex-col px-4 py-8 text-center"
								data-aos="zoom-in-up"
								data-aos-duration="1500"
								data-aos-easing="ease-in-shine"
							>
								<dt className="order-last text-lg font-medium text-gray-500">
									Institute Engagement
								</dt>

								<dd className="text-4xl font-extrabold text-violet-600 md:text-5xl">
									1200+
								</dd>
							</div>

							<div
								className="flex flex-col px-4 py-8 text-center"
								data-aos="zoom-in-up"
								data-aos-duration="2000"
								data-aos-easing="ease-in-shine"
							>
								<dt className="order-last text-lg font-medium text-gray-500">
									Convention Hall
								</dt>

								<dd className="text-4xl font-extrabold text-violet-600 md:text-5xl">
									86
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Summary;
