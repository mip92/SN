import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {LogoutAC} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId,
});
export default connect(mapStatetoProps, {LogoutAC})(HeaderContainer);