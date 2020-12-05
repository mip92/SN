import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    onNumberChange,
    searchNumber,
    toggleIsFetching, toggleIsFetchingProgress, requestUsers, deleteUser, postUser,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getNumberChange,
    getPageSize, getTotalUsersCount, getUsersSuperSelector,
} from "../../redux/usersSelectors";

class UsersAPIComponent extends React.Component {
    /*constructor(props) {
        super(props);
        }
    }*/
    componentDidMount() {
        let {currentPage, pageSize, requestUsers} = this.props
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {setCurrentPage, requestUsers, pageSize} = this.props
        setCurrentPage(pageNumber);
        requestUsers(pageNumber, pageSize);
    }
    onNumberChange = (e) => {
        let {onNumberChange}=this.props
        let number = e.target.value;
        onNumberChange(number);
    };
    searchNumber = () => {
        let {searchNumber, requestUsers, currentPage, pageSize} = this.props
        searchNumber();
        requestUsers(currentPage, pageSize);
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                searchNumber={this.searchNumber}
                onNumberChange={this.onNumberChange}
                numberChange={this.props.numberChange}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                toggleIsFetchingProgress={this.props.toggleIsFetchingProgress}
                deleteUser={this.props.deleteUser}
                postUser={this.props.postUser}
            />
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        numberChange: state.usersPage.numberChange,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/
let mapStateToProps = (state) => {
    return {
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        //users: getUsers(state),
        users: getUsersSuperSelector(state),
        currentPage: getCurrentPage(state),
        numberChange: getNumberChange(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
/*let AuthRedirectComponent=withAuthRedirect(UsersAPIComponent)
const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount,
    onNumberChange, searchNumber, toggleIsFetching, toggleIsFetchingProgress,
    getUsers, deleteUser, postUser
})(AuthRedirectComponent);*/

//export default UsersContainer;

export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount,
        onNumberChange, searchNumber, toggleIsFetching, toggleIsFetchingProgress,
        requestUsers, deleteUser, postUser
    }),
   // withAuthRedirect,
)(UsersAPIComponent)