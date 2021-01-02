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
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/reduxstore";

type MapStatePropsType={
    totalUsersCount: number;
    pageSize: number;
    users: Array<UsersType>;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
    numberChange: number;
}
type MapDispatchPropsType={
    setCurrentPage:(pageNumber: number)=>void;
    searchNumber: ()=>void;
    requestUsers: (currentPag: number, pageSize: number)=>void;
    deleteUser: (arg0: number)=>void;
    postUser: (arg0: number)=>void;
    onNumberChange: (arg0: number)=>void
    setTotalUsersCount: (arg0: number)=>void;
    toggleIsFetching: (arg0: boolean)=>void;
    toggleIsFetchingProgress: any;
    setUsers: any;
}
type OwnPropsType= {
    pageTitle: string;
    pageNumber: number;
}
type PropsType=MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersAPIComponent extends React.Component<PropsType> {
    /*constructor(props) {
        super(props);
        }
    }*/
    componentDidMount() {
        let {currentPage, pageSize, requestUsers} = this.props
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {setCurrentPage, requestUsers, pageSize} = this.props
        setCurrentPage(pageNumber);
        requestUsers(pageNumber, pageSize);
    }
    onNumberChange = (e: any) => {
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
            <h3>{this.props.pageTitle}</h3>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                //searchNumber={this.searchNumber}
               // onNumberChange={this.onNumberChange}
                //numberChange={this.props.numberChange}
                users={this.props.users}
              // unFollow={this.props.unFollow}
               //follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                //toggleIsFetchingProgress={this.props.toggleIsFetchingProgress}
                deleteUser={()=>this.props.deleteUser}
                postUser={()=>this.props.postUser}
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
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
    //TStateProps={}, TDispatchProps={}, TOwnProps={}, State= DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        /*follow, unFollow,*/ setUsers, setCurrentPage, setTotalUsersCount, searchNumber, toggleIsFetching, toggleIsFetchingProgress,
        requestUsers, deleteUser, postUser, onNumberChange
    }),
   // withAuthRedirect,

)(UsersAPIComponent)