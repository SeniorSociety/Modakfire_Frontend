import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NameCard from './pages/NameCard/NameCard';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/namecard" component={NameCard} />
			</Switch>
		</Router>
	);
}

export default Routes;
