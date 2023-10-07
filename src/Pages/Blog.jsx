import BlogCard from "../Components/BlogCard/BlogCard";
import useBlogs from "../Hook/blogs";

const Blog = () => {
	// Use my custom hook
	const blogs = useBlogs();

	return (
		<div className=" mt-20">
			<div className="container px-6  mx-auto">
				<div className="text-center">
					<h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
						Our <span className="text-violet-500">Blog</span>
					</h1>

					<p className="max-w-lg mx-auto mt-4 text-gray-500">
						Stay informed and entertained with our latest blog posts.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 mt-10 md:mt-24 md:grid-cols-2 xl:grid-cols-3">
					{blogs?.slice(0, 5).map(blog => (
						<BlogCard key={blog.id} blog={blog}></BlogCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
