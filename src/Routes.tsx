import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import BoardList from './pages/BoardList/BoardList';
import BoardViewer from './pages/Board/BoardViewer';
import BoardPost from './pages/Board/BoardPost';
import NameCard from './pages/NameCard/NameCard';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';

function Routes() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/board-list/:id" component={BoardList} />
				<Route exact path="/board-post" component={BoardPost} />
				<Route exact path="/board-viewer/:view_id" component={BoardViewer} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/profile" component={NameCard} />
				<Route path="*" component={Main} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default Routes;
