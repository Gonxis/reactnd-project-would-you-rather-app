import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import NewQuestion from "./NewQuestion"

const Navigation = (props) => {
	const { isLoggedIn } = props;
	return (
		<Fragment>
			{
			!isLoggedIn ? 
            <Route path="/" component={Login} /> :
            <Fragment>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/add" component={NewQuestion} />
                    <Route
                        path="/questions/:question_id"
                        component={Poll}
                    />
                </Switch>
            </Fragment>
            }
		</Fragment>
	);
};

export default Navigation;