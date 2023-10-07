import { useEffect, useState } from "react";
import TeamCard from "../Components/TeamCard.jsx/TeamCard";

const Team = () => {
	// State for team members
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		fetch("/teams.json")
			.then(res => res.json())
			.then(data => setTeams(data));
	}, []);

	return (
		<div className=" mt-20">
			<h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
				Our <span className="text-violet-500">Management Team</span>
			</h1>

			<p className="max-w-2xl mx-auto mt-2 text-center text-gray-500 ">
				Our dedicated event management team works tirelessly to make your dreams
				a reality.
			</p>

			<div className="container px-6 py-10 mx-auto">
				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
					{teams?.map(team => (
						<TeamCard key={team.id} team={team}></TeamCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
