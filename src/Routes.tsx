import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/signin" component={SignIn} />
				{/* <Route exact path="/" component={HomePage} /> */}
			</Switch>
		</Router>
	);
}

export default Routes;
