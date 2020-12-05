import React from 'react';
import {addMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps=(state)=>{
    return{
        state: state.dialogsPage,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        addDialog:(text)=>{dispatch(addMessageActionCreator(text))},
    }
}
/*
let AuthRedirectComponent=withAuthRedirect(Dialogs)
const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    )(Dialogs);