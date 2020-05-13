import React, { Component } from "react";
import { connect } from "react-redux";

import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends Component {

	render() {
		const { leaderboardData } = this.props;

		return (
			<div className="container-leaderboard">
				{leaderboardData.map((data, id) => (
					<LeaderboardCard
						key={data.id}
						data={data}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => {
	const leaderboardData = Object.values(users)
		.map((user) => ({
			id: user.id,
			name: user.name,
			avatarURL: user.avatarURL,
			answerCount: Object.keys(user.answers).length,
			questionCount: user.questions.length,
			totalScore: Object.keys(user.answers).length + user.questions.length
		}))
		.sort((a, b) => b.totalScore - a.totalScore);

	return {
		leaderboardData
	};
};

export default connect(mapStateToProps)(Leaderboard);