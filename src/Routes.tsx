import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';

function Routes() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default Routes;
