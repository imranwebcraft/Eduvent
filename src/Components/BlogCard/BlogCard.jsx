import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
	// Destructure blog JSON data
	const { name, role, image, description, blog_img } = blog || {};
	return (
		<div>
			<div className="relative hover:cursor-pointer">
				<img
					className="object-cover object-center w-full h-64 rounded-lg lg:h-80 hover:bg-violet-200 hover:shadow-xl hover:shadow-violet-200 duration-300 ease-linear"
					src={blog_img}
					alt=""
				/>

				<div className="absolute bottom-0 flex p-3 bg-white dark:bg-violet-900 ">
					<img
						className="object-cover object-center w-10 h-10 rounded-full"
						src={image}
						alt="author-img"
					/>

					<div className="mx-4">
						<h1 className="text-sm text-white">{name}</h1>
						<p className="text-sm text-white">{role}</p>
					</div>
				</div>
			</div>

			<h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
				What do you want to know about UI
			</h1>

			<hr className="w-32 h-1 my-6 text-violet-500" />

			<p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>

			<a
				href="#"
				className="inline-block mt-4 text-violet-500 underline hover:text-violet-600"
			>
				Read more
			</a>
		</div>
	);
};

BlogCard.propTypes = {
	blog: PropTypes.object,
};

export default BlogCard;
