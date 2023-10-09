import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer/Footer";

const FAQ = () => {
	return (
		<div className=" container mx-auto mt-20">
			<Helmet>
				<title> Frequently Asked Questions </title>
			</Helmet>

			{/* FAQ page title */}

			<div>
				<h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
					Your{" "}
					<span className="text-violet-500">Frequently Asked Questions</span>
				</h1>
				<p className="max-w-2xl mx-auto mt-2 text-center text-gray-500 ">
					Find Answers to Common Queries
				</p>
			</div>

			{/* FAQ page content */}

			<div className="space-y-4 py-20">
				{/* FAQ number one */}
				<details
					className="group border-s-4 border-violet-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5">
						<h2 className="text-lg font-medium text-gray-900">
							What types of educational events do you offer?
						</h2>

						<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						At Eduvent, we take pride in offering an extensive range of
						educational events tailored to suit your diverse interests and
						learning goals. Whether you&apos;re looking to enhance your academic
						knowledge, advance your career, or explore new skills, our events
						have got you covered. From intensive coding bootcamps to
						thought-provoking literary discussions, we curate a comprehensive
						selection of events that continually evolve to meet your educational
						needs.
					</p>
				</details>

				{/* FAQ number two */}
				<details
					className="group border-s-4 border-violet-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5">
						<h2 className="text-lg font-medium text-gray-900">
							How can I register for an educational event?
						</h2>

						<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Registering for an event on Eduvent is a seamless process designed
						with your convenience in mind. After creating your account or
						logging in, navigate through our user-friendly platform. Discover a
						multitude of upcoming events, each just a click away from becoming
						part of your learning journey. Once you&apos;ve found the event that
						piques your interest, simply click the “Register” button. Our
						intuitive registration process will guide you through the necessary
						steps, ensuring that you&apos;re ready to embark on your educational
						adventure.
					</p>
				</details>
				{/* FAQ number three */}
				<details
					className="group border-s-4 border-violet-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5">
						<h2 className="text-lg font-medium text-gray-900">
							Are your events accessible to all levels of learners?
						</h2>

						<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Absolutely! We are committed to fostering an inclusive learning
						environment where everyone, regardless of their proficiency level,
						can find value in our events. Our curated offerings span the entire
						learning spectrum, accommodating beginners, intermediates, and
						advanced learners alike. Whether you&apos;re taking your first steps
						into a new field or seeking to master a subject, you&apos;ll
						discover events thoughtfully designed to meet you where you are on
						your educational journey.
					</p>
				</details>
				{/* FAQ number Four */}
				<details
					className="group border-s-4 border-violet-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5">
						<h2 className="text-lg font-medium text-gray-900">
							Can I access event materials after the event has ended?
						</h2>

						<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Your learning journey doesn&apos;t end when the event does. At
						Eduvent, we understand the importance of ongoing education.
						That&apos;s why we provide attendees with continued access to event
						materials, even after the event&apos;s conclusion. You&apos;ll have
						the opportunity to revisit presentations, delve into recordings, and
						explore additional resources at your own pace. This means you can
						reinforce your knowledge, catch up on missed content, or simply
						revisit your favorite parts of the event whenever it suits you.
					</p>
				</details>
				{/* FAQ Number Five */}
				<details
					className="group border-s-4 border-violet-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5">
						<h2 className="text-lg font-medium text-gray-900">
							Is there a cost associated with attending events?
						</h2>

						<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Eduvent offers a flexible pricing structure to accommodate a wide
						range of budgets and preferences. We believe that education should
						be accessible to all, which is why we offer a mix of free events and
						events with nominal registration fees. While some of our events come
						at no cost to you, others may require a modest fee to cover
						resources and facilitation. Rest assured that all pricing details
						are transparently presented on the event&apos;s information page,
						allowing you to make an informed choice that aligns with your
						educational goals.
					</p>
				</details>
				{/* FAQ number six */}
				<details
					className="group border-s-4 border-violet-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5">
						<h2 className="text-lg font-medium text-gray-900">
							Can I organize my educational event on Eduvent?
						</h2>

						<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Absolutely! We welcome educators, trainers, and organizations to
						become part of our educational community. If you&apos;re passionate
						about sharing your knowledge and expertise, you can easily create
						and host your educational event on Eduvent. Our intuitive event
						management tools empower you to design, promote, and host your event
						efficiently. By doing so, you can reach a broader audience of
						enthusiastic learners eager to engage with your subject matter
						expertise.
					</p>
				</details>
			</div>

			{/* Footer Component */}
			<Footer></Footer>
		</div>
	);
};

export default FAQ;
