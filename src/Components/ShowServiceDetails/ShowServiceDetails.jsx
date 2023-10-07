import PropTypes from "prop-types";
import map from "../../assets/Images/map.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import moment from "moment/moment";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { useEffect } from "react";

const ShowServiceDetails = ({ service }) => {
	// Destructure
	const { name, image, details, short_description, tags } = service || {};

	// Prevent auto scroll at the bottom
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page on route change
	}, [location.pathname]);

	return (
		<div className="mb-20">
			<div className="relative">
				<img className=" w-full h-[60vh] object-cover" src={image} alt={name} />

				<div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-700 to-gray-800 opacity-60"></div>
				<h1
					className=" flex justify-center items-center absolute top-[40%] left-[25%] right-[25%]
				
				text-white text-6xl font-bold
				
				"
				>
					{name}
				</h1>
			</div>

			{/* Grid Div */}
			<div className=" grid gap-10 grid-cols-3 mt-5">
				<div className=" col-span-2">
					<div>
						<div className="flex gap-2 items-center text-xl font-medium mb-5">
							<p>Details</p>
							<MdOutlineDescription className=" opacity-90 text-violet-500 hover:text-violet-600 hover:cursor-pointer duration-300 ease-linear" />
						</div>
						<div className=" text-justify leading-relaxed mb-5">{details}</div>
					</div>

					<div className="text-xl font-medium mb-5">
						<div className="flex gap-2 items-center mb-5">
							<p>Date & time</p>
							<BsCalendarDate className=" opacity-90 text-violet-500 hover:text-violet-600 hover:cursor-pointer duration-300 ease-linear" />
						</div>
						<div className="border border-violet-300 rounded-md p-8 w-[40%]">
							<p className=" text-gray-600">
								{moment().format("dddd, MMMM Do YYYY")}
							</p>
							<p className="text-sm text-violet-500 my-1">Add to calendar</p>
							<button className="block w-full rounded mb-2 bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-600 duration-300 ease-linear">
								Book now
							</button>
							<button className=" w-full rounded bg-gray-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-300 duration-300 ease-linear">
								Program promoter
							</button>
							<h3 className="text-lg text-center mt-2 text-gray-600">
								No Refunds
							</h3>
						</div>
					</div>

					<div>
						<div className="flex gap-2 items-center text-xl font-medium mb-3">
							<p>Organizer Contact</p>
							<MdOutlineAlternateEmail className=" opacity-90 text-violet-500 hover:text-violet-600 hover:cursor-pointer duration-300 ease-linear" />
						</div>
						<p>
							Please go to{" "}
							<span className=" text-violet-500 hover:underline hover:cursor-pointer">
								www.edu-vent.com
							</span>{" "}
							and refer the FAQ section for more detail.
						</p>
					</div>

					<Link
						to={"/"}
						className=" mt-5 group relative inline-block overflow-hidden border border-violet-600 px-8 py-2 focus:outline-none focus:ring focus:ring-violet-200"
						href="/download"
					>
						<span className="absolute inset-y-0 right-0 w-[2px] bg-violet-600 transition-all group-hover:w-full group-active:bg-violet-500"></span>

						<span className="relative text-sm font-medium text-violet-500 transition-colors group-hover:text-white">
							Go Back
						</span>
					</Link>
				</div>
				<div className="">
					<div>
						<div className="flex gap-2 items-center text-xl font-medium mb-5">
							<p>Choose Location</p>
							<MdOutlineLocationOn className=" opacity-90 text-violet-500 hover:text-violet-600 hover:cursor-pointer duration-300 ease-linear" />
						</div>

						<img
							className=" w-full h-[300px] object-cover"
							src={map}
							alt="map-image"
						/>
					</div>
					<div className=" mt-5 ">
						<p className=" text-lg font-medium"> Dream {name}</p>
						<p className=" text-sm text-gray-600">{short_description}</p>
					</div>
					<div className=" mt-5 ">
						<div className=" flex gap-2 items-center text-xl font-medium">
							<p className=" text-lg font-medium"> Tags</p>
							<BsTags className=" opacity-90 text-violet-500 hover:text-violet-600 hover:cursor-pointer duration-300 ease-linear" />
						</div>

						<ul className=" space-y-2">
							{tags?.map((tag, index) => (
								<li
									key={index}
									className=" px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 duration-300 ease-in-out inline-block rounded-md mr-2 "
								>
									{tag}
								</li>
							))}
						</ul>
					</div>
					<div className="mt-5">
						<div className="flex gap-2 items-center text-xl font-medium mb-2">
							<p>Share with colleague</p>
							<AiOutlineShareAlt className=" opacity-90 text-violet-500 hover:text-violet-600 hover:cursor-pointer duration-300 ease-linear" />
						</div>
						<div className=" flex items-center gap-5">
							<div className=" cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 48 48"
									fill="none"
								>
									<path
										d="M0 16.1C0 10.4051 0 7.55764 1.12587 5.39026C2.07462 3.56382 3.56382 2.07462 5.39026 1.12587C7.55764 0 10.4051 0 16.1 0H31.9C37.5949 0 40.4424 0 42.6097 1.12587C44.4362 2.07462 45.9254 3.56382 46.8741 5.39026C48 7.55764 48 10.4051 48 16.1V31.9C48 37.5949 48 40.4424 46.8741 42.6097C45.9254 44.4362 44.4362 45.9254 42.6097 46.8741C40.4424 48 37.5949 48 31.9 48H16.1C10.4051 48 7.55764 48 5.39026 46.8741C3.56382 45.9254 2.07462 44.4362 1.12587 42.6097C0 40.4424 0 37.5949 0 31.9V16.1Z"
										fill="url(#paint0_linear_77_523)"
									/>
									<path
										d="M33.3333 30.6666L34.4 23.9999H28V19.3333C28 17.4666 28.6667 15.9999 31.6 15.9999H34.6667V9.86659C32.9333 9.59992 31.0667 9.33325 29.3333 9.33325C23.8667 9.33325 20 12.6666 20 18.6666V23.9999H14V30.6666H20V47.9999C22.6667 47.9999 25.3333 47.9999 28 47.9999V30.6666H33.3333Z"
										fill="white"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_77_523"
											x1="24"
											y1="46.5975"
											x2="24"
											y2="0"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#0062E0" />
											<stop offset="1" stopColor="#19AFFF" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className=" cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 48 48"
									fill="none"
								>
									<path
										d="M0 16.1C0 10.4051 0 7.55764 1.12587 5.39026C2.07462 3.56382 3.56382 2.07462 5.39026 1.12587C7.55764 0 10.4051 0 16.1 0H31.9C37.5949 0 40.4424 0 42.6097 1.12587C44.4362 2.07462 45.9254 3.56382 46.8741 5.39026C48 7.55764 48 10.4051 48 16.1V31.9C48 37.5949 48 40.4424 46.8741 42.6097C45.9254 44.4362 44.4362 45.9254 42.6097 46.8741C40.4424 48 37.5949 48 31.9 48H16.1C10.4051 48 7.55764 48 5.39026 46.8741C3.56382 45.9254 2.07462 44.4362 1.12587 42.6097C0 40.4424 0 37.5949 0 31.9V16.1Z"
										fill="url(#paint0_linear_77_630)"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M25.3937 6.59265C29.6424 6.80146 33.6014 8.55351 36.6252 11.5794C39.8506 14.8068 41.626 19.0969 41.6243 23.6593C41.6204 33.0742 33.9559 40.7345 24.5405 40.7345H24.5334C21.6741 40.7335 18.8647 40.0166 16.3694 38.6562L7.31299 41.0307L9.7367 32.1823C8.24168 29.5927 7.455 26.6554 7.45623 23.6458C7.46002 14.2311 15.1238 6.57153 24.5403 6.57153L25.3937 6.59265ZM16.789 35.5649L17.3076 35.8725C19.4877 37.1656 21.9867 37.8498 24.5347 37.8508H24.5404C32.3668 37.8508 38.7366 31.4839 38.7397 23.6583C38.7412 19.8661 37.2657 16.3004 34.5848 13.6178C31.9039 10.935 28.3388 9.45676 24.5461 9.45553C16.7137 9.45553 10.3438 15.8217 10.3407 23.6467C10.3396 26.3285 11.0903 28.9402 12.5117 31.1997L12.8493 31.7368L11.4148 36.974L16.789 35.5649ZM33.1471 27.7198C33.0405 27.5417 32.7559 27.435 32.3291 27.2214C31.9022 27.0078 29.8035 25.9757 29.4123 25.8332C29.021 25.691 28.7364 25.6198 28.4518 26.0468C28.1673 26.4739 27.3492 27.435 27.1001 27.7198C26.8512 28.0045 26.6022 28.0401 26.1754 27.8266C25.7485 27.6131 24.3731 27.1624 22.7426 25.7089C21.4736 24.5775 20.6169 23.1804 20.3679 22.7533C20.119 22.3262 20.3413 22.0952 20.555 21.8825C20.7471 21.6913 20.982 21.3842 21.1954 21.135C21.4088 20.886 21.4799 20.7079 21.6223 20.4232C21.7645 20.1385 21.6934 19.8894 21.5867 19.6758C21.4799 19.4622 20.6263 17.3621 20.2706 16.5078C19.924 15.6759 19.5721 15.7885 19.3101 15.7754C19.0614 15.763 18.7765 15.7603 18.492 15.7603C18.2074 15.7603 17.745 15.867 17.3537 16.2943C16.9624 16.7213 15.8596 17.7536 15.8596 19.8536C15.8596 21.9538 17.3893 23.9824 17.6027 24.2672C17.8161 24.5521 20.6127 28.8613 24.8948 30.7096C25.9132 31.1492 26.7084 31.4117 27.3283 31.6083C28.3509 31.933 29.2814 31.8873 30.017 31.7774C30.8371 31.6549 32.5425 30.7452 32.8982 29.7487C33.2539 28.7519 33.2539 27.8977 33.1471 27.7198Z"
										fill="white"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_77_630"
											x1="24"
											y1="48"
											x2="24"
											y2="0"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#25CF43" />
											<stop offset="1" stopColor="#61FD7D" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className=" cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 48 48"
									fill="none"
								>
									<path
										d="M0 16.1C0 10.4051 0 7.55764 1.12587 5.39026C2.07462 3.56382 3.56382 2.07462 5.39026 1.12587C7.55764 0 10.4051 0 16.1 0H31.9C37.5949 0 40.4424 0 42.6097 1.12587C44.4362 2.07462 45.9254 3.56382 46.8741 5.39026C48 7.55764 48 10.4051 48 16.1V31.9C48 37.5949 48 40.4424 46.8741 42.6097C45.9254 44.4362 44.4362 45.9254 42.6097 46.8741C40.4424 48 37.5949 48 31.9 48H16.1C10.4051 48 7.55764 48 5.39026 46.8741C3.56382 45.9254 2.07462 44.4362 1.12587 42.6097C0 40.4424 0 37.5949 0 31.9V16.1Z"
										fill="#1265BF"
									/>
									<path
										d="M10.7739 14.9066C13.0736 14.9066 14.9378 13.0423 14.9378 10.7426C14.9378 8.44289 13.0736 6.57861 10.7739 6.57861C8.47414 6.57861 6.60986 8.44289 6.60986 10.7426C6.60986 13.0423 8.47414 14.9066 10.7739 14.9066Z"
										fill="white"
									/>
									<path
										d="M18.7513 17.9839H25.6524V21.1453C25.6524 21.1453 27.5251 17.3999 32.6205 17.3999C37.1657 17.3999 40.931 19.639 40.931 26.464V40.856H33.7795V28.2079C33.7795 24.1818 31.6301 23.739 29.9922 23.739C26.593 23.739 26.0111 26.671 26.0111 28.7331V40.856H18.7513V17.9839Z"
										fill="white"
									/>
									<path
										d="M7.144 17.9839H14.4037V40.856H7.144V17.9839Z"
										fill="white"
									/>
								</svg>
							</div>
							<div className=" cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 48 48"
									fill="none"
								>
									<path
										d="M0 16.1C0 10.4051 0 7.55764 1.12587 5.39026C2.07462 3.56382 3.56382 2.07462 5.39026 1.12587C7.55764 0 10.4051 0 16.1 0H31.9C37.5949 0 40.4424 0 42.6097 1.12587C44.4362 2.07462 45.9254 3.56382 46.8741 5.39026C48 7.55764 48 10.4051 48 16.1V31.9C48 37.5949 48 40.4424 46.8741 42.6097C45.9254 44.4362 44.4362 45.9254 42.6097 46.8741C40.4424 48 37.5949 48 31.9 48H16.1C10.4051 48 7.55764 48 5.39026 46.8741C3.56382 45.9254 2.07462 44.4362 1.12587 42.6097C0 40.4424 0 37.5949 0 31.9V16.1Z"
										fill="#1EA1F2"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M37.3227 18.1521C37.3343 18.452 37.3382 18.7516 37.3382 19.0514C37.3382 28.1409 30.9442 38.6342 19.2518 38.6342C15.6601 38.6342 12.3203 37.4895 9.50635 35.5407C10.0038 35.5953 10.5089 35.6362 11.0218 35.6362C13.9999 35.6362 16.7427 34.5322 18.9184 32.6789C16.1368 32.638 13.788 30.6347 12.9779 27.9093C13.3668 27.991 13.7673 28.032 14.1768 28.032C14.7544 28.032 15.3151 27.9504 15.8525 27.7868C12.9417 27.16 10.7492 24.38 10.7492 21.0413C10.7492 21.0004 10.7492 20.9867 10.7492 20.9595C11.6071 21.4637 12.589 21.777 13.6316 21.8178C11.9236 20.5777 10.8009 18.4656 10.8009 16.0808C10.8009 14.827 11.1136 13.6414 11.6639 12.6193C14.7983 16.7893 19.4843 19.5285 24.7673 19.8147C24.6587 19.3104 24.6032 18.7791 24.6032 18.2476C24.6032 14.4456 27.4494 11.3657 30.961 11.3657C32.7891 11.3657 34.4403 12.1971 35.5992 13.5326C37.0501 13.2328 38.4093 12.6605 39.6392 11.8701C39.1625 13.4781 38.156 14.827 36.8408 15.6719C38.1276 15.5083 39.355 15.1407 40.4933 14.5956C39.6393 15.9719 38.5643 17.1846 37.3227 18.1521Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ShowServiceDetails.propTypes = {
	service: PropTypes.object,
};

export default ShowServiceDetails;
