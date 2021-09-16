import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BoardPost from './pages/Board/BoardPost';
import BoardViewer from './pages/Board/BoardViewer';
import BoardList from './pages/BoardList/BoardList';
import NameCard from './pages/NameCard/NameCard';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/board-post" component={BoardPost} />
				<Route exact path="/board-viewer" component={BoardViewer} />
				<Route exact path="/board-list" component={BoardList} />
				<Route exact path="/namecard" component={NameCard} />
			</Switch>
		</Router>
	);
}

export default Routes;
