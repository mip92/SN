import React from 'react';
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus, savePhoto} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizedUserId;//12090
        if (!userId) {
            this.props.history.push('/login');
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !=prevProps.match.params.userId)
        this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                    isOwner ={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

//let withURLDataContainerComponent = withRouter(AuthRedirectComponent);
//export default connect(mapStateToProps, {getUserProfile})(withURLDataContainerComponent);
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);