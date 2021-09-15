import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BoardList from './pages/BoardList/BoardList';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={BoardList} />
				{/* <Route exact path="/" component={HomePage} /> */}
			</Switch>
		</Router>
	);
}

export default Routes;
