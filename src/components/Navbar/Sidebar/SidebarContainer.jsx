import React from 'react';
import {addThreeFriendsActionCreator} from "../../../redux/sidebarReducer";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        threefriends: state.sidebar.friends,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        addFriends:()=>{dispatch(addThreeFriendsActionCreator())},
    }
}
const SidebarContainer=connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;