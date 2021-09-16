import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BoardPost from './pages/Board/BoardPost';
import BoardViewer from './pages/Board/BoardViewer';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/board-post" component={BoardPost} />
				<Route exact path="/board-viewer" component={BoardViewer} />
			</Switch>
		</Router>
	);
}

export default Routes;
