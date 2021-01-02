import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import Music from "./components/Music/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp, letError} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxstore";
import {withSuspense} from "./hoc/withSuspense";
import Error404 from "./components/common/Error/Error404";
import process from "process";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    catchAllUnhandledErrors=(reason)=>{
        //letError(reason.reason)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)

    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (<div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path="/" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/users" render={() => <UsersContainer pageTitle ="Самураи"/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="*" render={() => <Error404/>}/>
                    </Switch>

                </div>
                <div className='error'>{this.props.globalError}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, letError},
    ))(App);

const SamuraiJSApp = (props) => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>

    )
}
export default SamuraiJSApp;